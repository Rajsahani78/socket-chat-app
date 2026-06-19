import { Link } from "react-router";
import { DefaultProfile, Search } from "../../../assets/icons";
import type { Conversation } from "../../../interfaces/chat.interface";
import type { User } from "../../../interfaces/user.interface";

interface SidebarPorps {
    users: User[];
    search: string;
    isSearching: boolean;
    conversations: Conversation[]
    handleSearch: (value: string) => void;
    setActiveConversationId: (id: string) => void;
    createChat: (userId: string) => void;
    profile: User | undefined;
}

const Sidebar = ({ users, search, handleSearch, isSearching, conversations, profile, setActiveConversationId, createChat }: SidebarPorps) => {

    const handleUserClick = (userId: string) => {
        createChat(userId)
    }

    const handleConversationClick = (conversationId: string) => {
        setActiveConversationId(conversationId)
    }

    return (
        <aside className="flex w-80 flex-col border-r border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-4">
                <h1 className="text-xl font-bold">Chats</h1>

                <div className="relative mt-4">
                    <Search
                        width={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        value={search}
                        placeholder="Search..."
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full rounded-xl bg-slate-100 py-2 pl-10 pr-4 outline-none"
                    />
                </div>
            </div>
            {
                isSearching ?
                    (
                        <div className="flex-1 overflow-y-auto">
                            {users?.length ? users?.map((user) => (
                                <div
                                    key={user?._id}
                                    aria-hidden='true'
                                    onClick={() => handleUserClick(user._id)}
                                    className="flex cursor-pointer items-center gap-3 border-b border-slate-100 p-4 transition hover:bg-slate-50"
                                >
                                    {user?.avatar ? <img
                                        src={user?.avatar}
                                        alt={`${user?.name} avatar image`}
                                        className="h-12 w-12 rounded-full"
                                    /> : <DefaultProfile />}

                                    <div className="flex-1">
                                        <h3 className="font-medium">{user?.name}</h3>
                                    </div>
                                </div>
                            )) : (
                                <div>User not found</div>
                            )}
                        </div>
                    )
                    : (
                        <div className="flex-1 overflow-y-auto">
                            {conversations.map((conversation) => {
                                const otherUser = conversation?.participants?.find((v) => v?._id !== profile?._id)
                                
                                return (
                                    <div
                                        key={conversation._id}
                                        aria-hidden="true"
                                        onClick={() => handleConversationClick(conversation._id)}
                                        className="flex cursor-pointer items-center gap-3 border-b border-slate-100 p-4 transition hover:bg-slate-50"
                                    >
                                        {otherUser?.avatar ? <img
                                            src={`${otherUser?.avatar}`}
                                            alt={`profile pic of${otherUser?.avatar}`}
                                            className="h-12 w-12 rounded-full"
                                        /> :
                                            <DefaultProfile />}

                                        <div className="flex-1">
                                            <h3 className="font-medium">{otherUser?.name}</h3>
                                            <p className="truncate text-sm text-slate-500">
                                                {conversation?.lastMessage}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    )
            }

            <div className="border-t border-slate-200 p-4">
                <Link
                    to={'/profile'}
                    className="flex w-full items-center gap-3 rounded-xl p-2 transition hover:bg-slate-100"
                >
                    {profile?.avatar ? <img
                        src={`${profile?.avatar}`}
                        alt="profile"
                        className="h-12 w-12 rounded-full"
                    /> :
                        <DefaultProfile />
                    }

                    <div className="flex-1 text-left">
                        <h3 className="font-semibold text-slate-800">
                            {profile?.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                            View Profile
                        </p>
                    </div>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar
