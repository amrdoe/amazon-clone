import { Item, useStateValue } from "@/lib/StateContext";
import Image from "next/image";

export default function Item({ id, image, title, price, rating }: Item) {
  const [_, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id
    })
  }
  return (
    <div className="flex my-[20px] ">
      <Image
        src={image}
        width={262}
        height={400}
        alt=""
        className="object-contain w-[180px] h-[180px]"
      />

      <div className="pl-[20px] w-[180px] h-[180px]">
        <p className="text-[17px] font-extrabold">{title}</p>

        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="flex">
          {Array(rating).fill(0).map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>

        <button
          className="bg-[#f0c14b] border mt-[10px] border-t-[#a88734] border-x-[#9c7e31] border-b-[#846a29] text-[#111]"
          onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  )
}
