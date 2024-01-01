"use client";

import Link from "next/link";
import DeliveryAddress from "./DeliveryAddress";
import PaymentMethod from "./PaymentMethod";
import ReviewItems from "./ReviewItems";
import { useStateValue } from "@/lib/StateContext";

export default function Payment() {
  const [{ cart }] = useStateValue();

  return (
    <div className="bg-white">
      <div>
        <h1 className="text-center p-[10px] font-normal bg-[rgb(234, 237, 237)] border-b border-b-[lightgray]">
          Checkout (
          <Link href="/checkout" className="no-underline">
            {cart.length} items
          </Link>
          )
        </h1>
        <DeliveryAddress />
        <ReviewItems />
        <PaymentMethod />
      </div>
    </div>
  );
}
