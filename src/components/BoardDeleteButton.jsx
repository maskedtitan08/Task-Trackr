'use client';
import { deleteBoard } from "@/app/actions/boardActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BoardDeleteButton({ boardId }) {
  const router = useRouter();
  const [boardDeleting , setBoardDeleting] = useState(false);
  async function handleDeleteBoard() {
    setBoardDeleting(true);
    await deleteBoard(boardId);
    router.push('/');
  }
  return (
    <div>
    {!boardDeleting ? (
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={handleDeleteBoard}
      >
        Delete board
      </button>
    ) : (
      <button className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-not-allowed" disabled>
        Deleting...
      </button>
    )}
  </div>
  );
}
