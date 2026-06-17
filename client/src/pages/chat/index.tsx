
import Header from "../../components/pages/chat/header";
import MessageInput from "../../components/pages/chat/message-input";
import Messages from "../../components/pages/chat/messages";
import Sidebar from "../../components/pages/chat/side-bar";

const Chat = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      {/* Chat Area */}
      <main className="flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Messages */}
        <Messages />

        {/* Message Input */}
        <MessageInput />
      </main>
    </div>
  );
};

export default Chat;