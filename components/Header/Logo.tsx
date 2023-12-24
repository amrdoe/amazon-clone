import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="w-[100px] object-contain mx-[20px] mt-[18px] mb-0"
        width={100}
        height={60}
        alt=""
      />
    </Link>
  )
} 