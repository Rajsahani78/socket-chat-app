import { Link } from "react-router"
import { Search } from "../../../assets/icons"

const Sidebar = () => {
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
                        placeholder="Search..."
                        className="w-full rounded-xl bg-slate-100 py-2 pl-10 pr-4 outline-none"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                {[1, 2, 3, 4].map((chat) => (
                    <div
                        key={chat}
                        className="flex cursor-pointer items-center gap-3 border-b border-slate-100 p-4 transition hover:bg-slate-50"
                    >
                        <img
                            src={`https://i.pravatar.cc/150?img=${chat}`}
                            alt=""
                            className="h-12 w-12 rounded-full"
                        />

                        <div className="flex-1">
                            <h3 className="font-medium">John Doe</h3>
                            <p className="truncate text-sm text-slate-500">
                                Last message...
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t border-slate-200 p-4">
                <Link
                    to={'/profile'}
                    // onClick={() => navigate("/profile")}
                    className="flex w-full items-center gap-3 rounded-xl p-2 transition hover:bg-slate-100"
                >
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="profile"
                        className="h-12 w-12 rounded-full"
                    />

                    <div className="flex-1 text-left">
                        <h3 className="font-semibold text-slate-800">
                            Your Name
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
