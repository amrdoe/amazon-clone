"use client";

import { useStateValue } from "@/lib/StateContext"
import formatMoney from "@/lib/formatMoney";

export default function Subtotal() {
  const [{ cart }] = useStateValue()
  const total = cart.reduce((amount, item) => item.price + amount, 0)

  return (
    <div className="flex flex-col justify-between w-[300px] p-[20px] bg-[#f3f3f3] border border-[#dddddd] rounded-[3px]">
      <p>
        Subtotal ({cart.length} items):
        <strong>{formatMoney(total)}</strong>
      </p>

      <small className="flex items-center">
        <input type="checkbox" />
        This order contains a gift
      </small>

      <button className="bg-[#f0c14b] rounded-[2px] w-full h-[30px] border mt-[10px] border-t-[#a88734] border-x-[#9c7e31] border-b-[#846a29] text-[#111]">
        Proceed to checkout
      </button>
    </div>
  )
}
