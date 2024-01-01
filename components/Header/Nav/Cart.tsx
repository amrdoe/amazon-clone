"use client";

import { useStateValue } from "@/lib/StateContext";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "next/link";

export default function Cart() {
  const [{ cart }] = useStateValue();

  return (
    <Link href="/checkout">
      <div className="flex items-center text-white">
        <ShoppingCartIcon />
        <span className="text-[13px] font-extrabold mx-[10px]">{cart.length}</span>
      </div>
    </Link>
  )
}
