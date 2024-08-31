import Boards from "@/components/Boards";
import LoginView from "@/components/views/LoginView";
import { authOptions } from "@/lib/authOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <LoginView />
    );
  }
  return (
    <div className="m-7">
      <div className="flex justify-between">
        <h1 className="text-4xl mb-4 text-center mt-2">Your boards</h1>
        <div className="mt-4">
          <Link
            className="bg-[#4A5696] text-white p-2 px-4 border-2 rounded-xl border-white inline-flex gap-2"
            href={'/new-board'}>
            Create new board <FontAwesomeIcon className="h-6" icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <Boards />
    </div>
  );
}
