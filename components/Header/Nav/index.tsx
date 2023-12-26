"use client";

import Cart from "./Cart";
import Auth from "./Auth";

export default function Nav() {
  return (
    <nav className="flex justify-evenly">
      <Auth />
      <div className="flex flex-col mx-[10px] text-white">
        <span className="text-[10px]">Returns</span>
        <span className="text-[13px] font-extrabold">& Orders</span>
      </div>
      <div className="flex flex-col mx-[10px] text-white">
        <span className="text-[10px]">Your</span>
        <span className="text-[13px] font-extrabold">Prime</span>
      </div>
      <Cart />
    </nav>
  );
}
