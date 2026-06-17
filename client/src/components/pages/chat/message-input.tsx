import { Send } from "../../../assets/icons"

const MessageInput = () => {
  return (
    <div className="border-t border-slate-200 bg-white p-4">
          <form className="flex gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary"
            />

            <button
              type="submit"
              className="rounded-xl bg-primary px-5 text-white transition hover:opacity-90"
            >
              <Send width={20} />
            </button>
          </form>
        </div>
  )
}

export default MessageInput
