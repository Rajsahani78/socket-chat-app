
const Messages = () => {
    return (
        <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-6">
            {/* Receiver */}
            <div className="flex">
                <div className="max-w-xs rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                    Hey 👋
                </div>
            </div>

            {/* Sender */}
            <div className="flex justify-end">
                <div className="max-w-xs rounded-2xl rounded-br-md bg-primary px-4 py-3 text-white">
                    Hello! How are you?
                </div>
            </div>

            <div className="flex">
                <div className="max-w-xs rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                    I'm doing great 🚀
                </div>
            </div>
        </div>
    )
}

export default Messages
