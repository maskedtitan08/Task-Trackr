
'use client';
import { createBoard } from "@/app/actions/boardActions";
import { useRouter} from "next/navigation";
import { useState } from 'react';

export default function NewBoardPage() {
  const [boardName, setBoardName] = useState('');
  const [boardCreating , setBoardCreating] = useState(false);
  const router = useRouter()


  async function handleNewBoardSubmit(event) {
    event.preventDefault(); 
    // console.log(boardName);
    setBoardCreating(true);
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
    <div className="m-7">
      <form onSubmit={handleNewBoardSubmit} className="max-w-xs block">
        <h1 className="text-2xl mb-4">Create new board</h1>
        <input
          type="text"
          name="name"
          placeholder="board name"
          value={boardName}
          onChange={handleInputChange}
          required
        />
        {!boardCreating ? (
          <button type="submit" className="bg-[#4A5696] text-white p-2 px-4 border-2 rounded-xl mt-4 w-full">
            Create board
          </button>
      ) : (
        <button disabled className="bg-[#666c8e] text-white p-2 px-4 border-2 rounded-xl mt-4 w-full">
            Creating
          </button>
      )}
      </form>
    </div>
  );
}
