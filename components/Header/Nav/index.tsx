"use client";

import Cart from "./Cart";
import Auth from "./Auth";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-evenly">
      <Auth />
      <Link href="/orders" className="flex flex-col mx-[10px] text-white">
        <span className="text-[10px]">Returns</span>
        <span className="text-[13px] font-extrabold">& Orders</span>
      </Link>
      <div className="flex flex-col mx-[10px] text-white">
        <span className="text-[10px]">Your</span>
        <span className="text-[13px] font-extrabold">Prime</span>
      </div>
      <Cart />
    </nav>
  );
}
