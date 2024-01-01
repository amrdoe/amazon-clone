import { Item, useStateValue } from "@/lib/StateContext";
import Image from "next/image";
import Button from "../Button";

export default function Item({
  id,
  image,
  title,
  price,
  rating,
  hideButton = false,
}: Item & { hideButton?: boolean }) {
  const [_, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove the item from the cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };
  return (
    <div className="flex my-[20px]">
      <Image
        src={image}
        width={262}
        height={400}
        alt=""
        className="object-contain w-[180px] h-[180px]"
      />

      <div className="pl-[20px] w-[180px]">
        <p className="text-[17px] font-extrabold">{title}</p>

        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="flex">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        {!hideButton && (
          <Button onClick={removeFromCart}>Remove from cart</Button>
        )}
      </div>
    </div>
  );
}
