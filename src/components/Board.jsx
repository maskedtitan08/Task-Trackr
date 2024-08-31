'use client';
import { updateBoard } from "@/app/actions/boardActions";
import { RoomProvider, useUpdateMyPresence } from "@/app/liveblocks.config";
import { BoardContextProvider } from "@/components/BoardContext";
import Columns from "@/components/Columns";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LiveList } from "@liveblocks/core";
import { ClientSideSuspense } from "@liveblocks/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Board({ id, name }) {
  const [renameMode, setRenameMode] = useState(false);
  const router = useRouter();
  const updateMyPresence = useUpdateMyPresence();

  useEffect(() => {
    updateMyPresence({ boardId: id });

    return () => {
      updateMyPresence({ boardId: null });
    };
  }, []);

  async function handleNameSubmit(ev) {
    ev.preventDefault();
    const input = ev.target.querySelector('input');
    if (input) {
      const newName = input.value;
      await updateBoard(id, { metadata: { boardName: newName } });
      input.value = '';
      setRenameMode(false);
      router.refresh();
    }
  }

  return (
    <BoardContextProvider>
      <RoomProvider
        id={id}
        initialPresence={{
          cardId: null,
          boardId: null,
        }}
        initialStorage={{
          columns: new LiveList([]),
          cards: new LiveList([]),
        }}
      >
        <ClientSideSuspense fallback={<Loader />}>
          {() => (
            <>
              <div className="flex gap-2 justify-between items-center m-7 ">
                <div className="flex items-center gap-2">
                  {!renameMode ? (
                    <>
                      <h1 className="text-2xl">Board: {name}</h1>
                      <button
                        className="text-[#4A5696] m-2 hover:underline"
                        onClick={() => setRenameMode(true)}
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    <form onSubmit={handleNameSubmit} className="flex items-center gap-2">
                      <input type="text" defaultValue={name} />
                      <button
                        type="submit"
                        className="text-[#4A5696] m-2 hover:underline"
                      >
                        Done
                      </button>
                    </form>
                  )}
                </div>
                <Link
                  className="flex gap-1 items-center btn"
                  href={`/boards/${id}/settings`}
                >
                  <FontAwesomeIcon icon={faCog} />
                  Board settings
                </Link>
              </div>
              <Columns />
            </>
          )}
        </ClientSideSuspense>
      </RoomProvider>
    </BoardContextProvider>
  );
}
