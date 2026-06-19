
import { useEffect, useRef, useState } from "react";
import Header from "../../components/pages/chat/header";
import MessageInput from "../../components/pages/chat/message-input";
import Messages from "../../components/pages/chat/messages";
import Sidebar from "../../components/pages/chat/side-bar";
import { useAllUserQuery, useGetProfileQuery } from "../../services/user";
import { useDebounce } from "../../hooks/useDebounce";
import { useCreateConversationMutation, useCreateMessageMutation, useGetRecentChatQuery, useGetsingleChatQuery } from "../../services/chat";
import socket from "../../socket";
import type { Message } from "../../interfaces/chat.interface";

const Chat = () => {
  const [activeConversationId, setActiveConversationId] = useState("")
  const [search, setSearch] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("")
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  console.log('typingUsers :', typingUsers);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const debounceValue = useDebounce(search, 500)
  const { data: userData, isLoading } = useAllUserQuery(debounceValue)
  const { data: chatData } = useGetRecentChatQuery()
  const { data: messageData } = useGetsingleChatQuery(activeConversationId, { skip: !activeConversationId, refetchOnMountOrArgChange: true })
  const [createMessage] = useCreateMessageMutation()
  const [createConversation] = useCreateConversationMutation()
  const { data: profileData } = useGetProfileQuery()

  useEffect(() => {
    socket.on("online-users", (users: string[]) => {
      setOnlineUsers(users); // full sync
    });

    socket.on("user-online", (userId) => {
      setOnlineUsers((prev) =>
        prev.includes(userId) ? prev : [...prev, userId]
      );
    });

    socket.on("user-offline", (userId) => {
      setOnlineUsers((prev) => prev.filter((id) => id !== userId));
    });

    return () => {
      socket.off("online-users");
      socket.off("user-online");
      socket.off("user-offline");
    };
  }, []);

  useEffect(() => {
    if (activeConversationId) {
      socket.emit("joinConversation", activeConversationId)
    }
    return () => {
      if (activeConversationId) {
        socket.emit("leaveConversation", activeConversationId)

      }
    }
  }, [activeConversationId])

  useEffect(() => {
    if (messageData?.data) {
      setMessages(messageData?.data ?? [])
    }
  }, [messageData])

  useEffect(() => {
    const handleNewMessage = (message: Message) => {
      setMessages((prev) => {
        const exists = prev.some((m) => m._id === message._id);

        if (exists) return prev;

        return [...prev, message];
      });
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, []);

  useEffect(() => {
    const handleTyping = ({ userId }: { userId: string }) => {
      setTypingUsers((prev) =>
        prev.includes(userId) ? prev : [...prev, userId]
      );
    };

    const handleStopTyping = ({ userId }: { userId: string }) => {
      setTypingUsers((prev) => prev.filter((id) => id !== userId));
    };

    socket.on("typing", handleTyping);
    socket.on("stopTyping", handleStopTyping);

    return () => {
      socket.off("typing", handleTyping);
      socket.off("stopTyping", handleStopTyping);
    };
  }, []);

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const sendMessage = async () => {
    const payload = {
      conversationId: activeConversationId,
      type: 'text',
      text: text
    }
    await createMessage(payload).unwrap()
    setText("")
  }

  const createChat = async (userId: string) => {
    const paylod = {
      participantId: userId
    }
    const data = await createConversation(paylod).unwrap()
    if (data?.data?._id) {
      setActiveConversationId(data.data._id)
    }
  }

  const handleOnChange = (value: string) => {
    setText(value);

    socket.emit("typing", {
      conversationId: activeConversationId,
      userId: profile?._id,
    });

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("stopTyping", {
        conversationId: activeConversationId,
        userId: profile?._id,
      });
    }, 800);
  };

  const isSearching = debounceValue.length > 0;
  const users = userData?.data ?? []
  const conversations = chatData?.data ?? []
  const profile = profileData?.data;
  const activeConversation = conversations?.find((v) => v._id === activeConversationId
  )

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar
        users={users}
        search={search}
        conversations={conversations}
        isSearching={isSearching}
        handleSearch={handleSearch}
        createChat={createChat}
        profile={profile}
        setActiveConversationId={setActiveConversationId}
      />
      <main className="flex flex-1 flex-col">
        <Header
          activeConversation={activeConversation}
          currentUserId={profile?._id}
          onlineUsers={onlineUsers}
        />
        <Messages
          messages={messages}
          currentUserId={profile?._id}
          typingUsers={typingUsers}
          activeConversation={activeConversation}

        />
        <MessageInput
          value={text}
          setValue={setText}
          onclick={sendMessage}
          handleOnChange={handleOnChange} />
      </main>
    </div>
  );
};

export default Chat;