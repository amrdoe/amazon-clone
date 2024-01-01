"use client";

import { useStateValue } from "@/lib/StateContext";
import useOrders from "@/lib/useOrders";
import Order from "./Order";
import useRedirectIfNotAuthenticated from "@/lib/useRedirectIfNotAuthenticated";

export default function Orders() {
  useRedirectIfNotAuthenticated();

  const [{ user }] = useStateValue();
  const orders = useOrders(user?.uid!);
  console.log("ORDERS >>>", orders);

  return (
    <div className="py-[20px] px-[80px]">
      <h1 className="my-[30px] mx-0">Your Orders</h1>

      <div>
        {orders.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div>
    </div>
  );
}
