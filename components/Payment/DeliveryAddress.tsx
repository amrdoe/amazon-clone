import { useStateValue } from "@/lib/StateContext";

export default function DeliveryAddress() {
  const [{ user }] = useStateValue();

  return (
    <div className="flex p-[20px] my-0 mx-[20px] border-b border-b-[lightgray]">
      <div className="flex-1">
        <h3>Delivery Address</h3>
      </div>
      <div className="flex-[4]">
        <p>{user?.email}</p>
        <p>123 Next Lane</p>
        <p>Los Angeles, CA</p>
      </div>
    </div>
  );
}
