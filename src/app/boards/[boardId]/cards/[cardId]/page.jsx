import BoardPage from "@/app/boards/[boardId]/page";

export default function CardPage({ params }) {
  return (
    <BoardPage params={params} />
  );
}
