"use client";

import { Item, useStateValue } from "@/lib/StateContext";
import formatMoney from "@/lib/formatMoney";
import Image from "next/image"
import React from "react"

function Product({ id, title, image, price, rating }: Item) {
  const [_, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-end m-[10px] p-[20px] w-full max-h-[400px] min-w-[100px] bg-white z-10">
      <div className="mb-[15px] self-start">
        <p>{title}</p>
        <p className="mt-5px">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating).fill(0).map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
      </div>

      <Image
        src={image}
        width={262}
        height={400}
        alt=""
        className="max-h-[200px] w-full object-contain mb-[15px]"
      />

      <button
        className="bg-[#f0c14b] border mt-[10px] border-t-[#a88734] border-x-[#9c7e31] border-b-[#846a29] text-[#111]"
        onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  )
}

export default Product