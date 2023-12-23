import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      className="w-[100px] object-contain mx-[20px] mt-[18px] mb-0"
      width={100}
      height={60}
      alt=""
    />
  )
} 