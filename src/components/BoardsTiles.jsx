'use client';
import { RoomProvider } from "@/app/liveblocks.config";
import PresenceAvatars from "@/components/PresenceAvatars";
import Link from "next/link";

export default function BoardsTiles({ boards }) {

  return (
    <>
      <div className="my-4 grid md:grid-cols-3 lg:grid-cols-4 gap-2">
        {boards?.length > 0 && boards.map(board => (
          <Link
            href={`/boards/${board.id}`}
            key={board.id}
          >
            <div className="bg-gray-200 px-8 py-12 rounded-md block relative">
              {board.metadata.boardName}
              <RoomProvider id={board.id} initialPresence={{}}>
                <div className="absolute bottom-1 right-1">
                  <PresenceAvatars presenceKey={'boardId'} presenceValue={board.id} />
                </div>
              </RoomProvider>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
