"use client";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export default function Nav() {
  return (
    <nav className="flex justify-evenly">
      <div className="flex flex-col mx-[10px] text-white">
        <span className="text-[10px]">Hello Amr</span>
        <span className="text-[13px] font-extrabold">Sign In</span>
      </div>
      <div className="flex flex-col mx-[10px] text-white">
        <span className="text-[10px]">Returns</span>
        <span className="text-[13px] font-extrabold">& Orders</span>
      </div>
      <div className="flex flex-col mx-[10px] text-white">
        <span className="text-[10px]">Your</span>
        <span className="text-[13px] font-extrabold">Prime</span>
      </div>
      <div className="flex items-center text-white">
        <ShoppingBasketIcon />
        <span className="text-[13px] font-extrabold mx-[10px]">0</span>
      </div>
    </nav>
  )
}