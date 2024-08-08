
'use client';
import { createBoard } from "@/app/actions/boardActions";
import { useRouter} from "next/navigation";
import { useState } from 'react';

export default function NewBoardPage() {
  const [boardName, setBoardName] = useState('');
  const router = useRouter()

  async function handleNewBoardSubmit(event) {
    event.preventDefault(); 
    // console.log(boardName);
    const roomInfo = await createBoard(boardName);
    // console.log("created board")
    // console.log(roomInfo,roomInfo.id);
    if (roomInfo) {
      router.push(`/boards/${roomInfo.id}`)
    }
  }

  function handleInputChange(event) {
    setBoardName(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleNewBoardSubmit} className="max-w-xs block">
        <h1 className="text-2xl mb-4">Create new board</h1>
        <input
          type="text"
          name="name"
          placeholder="board name"
          value={boardName}
          onChange={handleInputChange}
        />
        <button type="submit" className="mt-2 w-full">Create board</button>
      </form>
    </div>
  );
}
