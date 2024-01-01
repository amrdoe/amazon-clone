import dayjs from "dayjs";
import Item from "../Checkout/Item";
import { Order } from "@/lib/useOrders";
import formatMoney from "@/lib/formatMoney";

export default function Order({ order }: { order: Order }) {
  return (
    <div className="p-[40px] my-[20px] mx-0 border border-[lightgray] bg-white relative">
      <h2>Order</h2>
      <p>{dayjs.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="absolute top-[40px] right-[20px]">
        <small>{order.id}</small>
      </p>

      {order.data.cart?.map((item: any, i: number) => (
        <Item key={i} {...item} hideButton />
      ))}

      <h3 className="font-medium text-right">
        Order Total: {formatMoney(order.data.amount / 100)}
      </h3>
    </div>
  );
}
