import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function getUserEmail() {
  const session = await getServerSession(authOptions);
  return session?.user?.email || '';
}
