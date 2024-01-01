import { useStateValue } from "@/lib/StateContext";
import Item from "../Checkout/Item";

export default function ReviewItems() {
  const [{ cart }] = useStateValue();

  return (
    <div className="flex p-[20px] my-0 mx-[20px] border-b border-b-[lightgray]">
      <div className="flex-1">
        <h3>Review items and delivery</h3>
      </div>
      <div className="flex-[4]">
        {cart.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
