'use client';
import { addEmailToBoard } from "@/app/actions/boardActions";
import { useRouter } from "next/navigation";
import { useRef ,useState } from "react";

export default function NewBoardAccess({ boardId }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const [email, setEmail] = useState()

  async function addEmail(event) {
    event.preventDefault();
    console.log(email);
    await addEmailToBoard(boardId, email);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    router.refresh();
    setEmail("");
  }

  function handleInputChange(event) {
    setEmail(event.target.value);
  }

  return (
    <form onSubmit={addEmail} className="max-w-xs">
      <h2 className="text-lg mb-2">Add email</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="john@example.com"
        name="email" 
        value={email}
        onChange={handleInputChange} 
      />
      <button className="w-full mt-2 bg-[#4A5696] p-2 px-4 border-2 rounder-xl " type="submit">Save</button>
    </form>
  );
}
