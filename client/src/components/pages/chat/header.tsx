
const Header = () => {
    return (
        <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-6 py-4">
            <img
                src="https://i.pravatar.cc/150?img=5"
                alt=""
                className="h-12 w-12 rounded-full"
            />

            <div>
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-sm text-green-500">Online</p>
            </div>
        </div>
    )
}

export default Header
