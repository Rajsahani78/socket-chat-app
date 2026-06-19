import type React from "react";
import { Send } from "../../../assets/icons"
interface MessageInputProps {
  value: string;
  setValue: (val: string) => void;
  onclick: () => void;
  handleOnChange: (val: string)=> void;
}

const MessageInput = ({ value, setValue, onclick, handleOnChange }: MessageInputProps) => {
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    if (!value.trim()) return
    onclick()
  }

  return (
    <div className="border-t border-slate-200 bg-white p-4">
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary"
        />

        <button
          type="submit"
          disabled={!value.trim()}
          className="rounded-xl bg-primary px-5 text-white transition hover:opacity-90"
        >
          <Send width={20} />
        </button>
      </form>
    </div>
  )
}

export default MessageInput
