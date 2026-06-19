import { DefaultProfile } from "../../../assets/icons";
import type { Conversation } from "../../../interfaces/chat.interface"

interface HeaderProps {
    activeConversation: Conversation | undefined;
    currentUserId: string | undefined;
    onlineUsers: string[]
}
const Header = ({ activeConversation, currentUserId, onlineUsers }: HeaderProps) => {
    const OtherUser = activeConversation?.participants?.find((v) => v._id !== currentUserId);
    const isOnline = Boolean(
  OtherUser?._id && onlineUsers.includes(OtherUser._id)
);
    return (
        <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-6 py-4">
            {OtherUser?.avatar ? <img
                src={`${OtherUser?.avatar}`}
                alt=""
                className="h-12 w-12 rounded-full"
            /> : <DefaultProfile />}

            <div>
                <h2 className="font-semibold">{OtherUser?.name}</h2>
                <p className={`text-sm ${isOnline ? "text-green-500" : "text-gray-500"}`}>{isOnline ? "Online" : "Offline"}</p>
            </div>
        </div>
    )
}

export default Header
