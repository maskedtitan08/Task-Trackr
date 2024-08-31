'use client';
import { useContext, useEffect } from "react";
import { BoardContext } from "@/components/BoardContext";
import PresenceAvatars from "@/components/PresenceAvatars";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Card({ id, name }) {
  const params = useParams();
  const router = useRouter();
  const { openCard } = useContext(BoardContext);

  useEffect(() => {
    if (params.cardId && !openCard) {
      const { boardId, cardId } = params;
      router.push(`/boards/${boardId}/cards/${cardId}`);
    }
    if (!params.cardId && openCard) {
      router.push(`/boards/${params.boardId}`);
    }
  }, [params.cardId]);

  return (
    <Link
      href={`/boards/${params.boardId}/cards/${id}`}
      className="relative border block bg-white my-2 py-8 px-4 rounded-md border-2 border-[#4A5696]"
    >
      <span className="block break-words">{name}</span>
      <div className="absolute bottom-1 right-1">
        <PresenceAvatars presenceKey={'cardId'} presenceValue={id} />
      </div>
    </Link>
  );
}
