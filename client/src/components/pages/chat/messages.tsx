import { useEffect } from "react";
import type { Conversation, Message } from "../../../interfaces/chat.interface";

interface MessagesProps {
  messages: Message[];
  typingUsers: string[];
  activeConversation: Conversation | undefined;
  currentUserId: string | undefined;
}
const Messages = ({ messages, currentUserId, typingUsers, activeConversation }: MessagesProps) => {
  const typingNames = typingUsers
    .map((id) => {
      const user = activeConversation?.participants?.find((u) => u._id === id);
      return user?.name;
    })
    .filter(Boolean);

  useEffect(() => {
    const el = document.getElementById("chat-scroll");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, typingUsers]);
  
  return (
    <div id="chat-scroll" className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-6">
      {messages.map((message) => {
        const isMe = message.sender === currentUserId;

        return (
          <div
            key={message._id}
            className={`flex ${isMe ? "justify-end" : "justify-start"
              }`}
          >
            <div
              className={`max-w-xs rounded-2xl px-4 py-3 ${isMe
                ? "rounded-br-md bg-primary text-white"
                : "rounded-bl-md bg-white shadow-sm"
                }`}
            >
              {message.text}
            </div>
          </div>
        );
      })}
      {typingNames.length > 0 && (
        <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 min-h-[40px]">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <span
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>

          <span>{typingNames.join(", ")} typing...</span>
        </div>
      )}
    </div>
  );
};

export default Messages;