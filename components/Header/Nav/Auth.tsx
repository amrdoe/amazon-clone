import { useStateValue } from "@/lib/StateContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";

export default function Auth() {
  const [{ user }] = useStateValue();

  return user ? (
    <div
      className="flex flex-col mx-[10px] text-white cursor-pointer"
      onClick={() => signOut(auth)}
    >
      <span className="text-[10px]">Hello Guest</span>
      <span className="text-[13px] font-extrabold">Sign Out</span>
    </div>
  ) : (
    <Link href="/login" className="flex flex-col mx-[10px] text-white">
      <span className="text-[10px]">Hello Guest</span>
      <span className="text-[13px] font-extrabold">Sign In</span>
    </Link>
  );
}
