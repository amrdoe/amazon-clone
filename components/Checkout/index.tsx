"use client";

import Image from "next/image";
import Subtotal from "./Subtotal";
import Item from "./Item";
import { useStateValue } from "@/lib/StateContext";

export default function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="flex p-[20px] bg-white h-max">
      <div>
        <Image
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
          width={1540}
          height={120}
          className="w-full mb-[10px]"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="mr-[10px] p-[10px] border-b border-b-[lightgray]">
            Your Shopping Cart
          </h2>

          {cart.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        </div>
      </div>

      <div>
        <Subtotal />
      </div>
    </div>
  );
}
