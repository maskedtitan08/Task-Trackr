import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession(authOptions);         // function provided by next/auth to check wether user is logged in or not
  return (
    <header className="bg-gray-400 p-4 px-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="logo font-extrabold text-xl text-stone-800">Task Trackr</Link>
        <div>
          {session && (
            <>
              Hello, {session?.user?.name}
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              Not logged in
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
