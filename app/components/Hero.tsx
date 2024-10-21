import Link from "next/link";
import React from "react";
import Slider from "./Slider";

export default function Hero() {
  return (
    <>
      <div className="flex">
        <div className="h-full w-[25%] flex flex-col items-center border-r-[1px]">
          <div className="flex flex-col w-[45%] mt-10 gap-2">
            <Link href={"#"} className="hover:text-[16.3px]">Woman's Fashion</Link>
            <Link href={"#"} className="hover:text-[16.3px]">Man's Fashion</Link>
            <Link href={"#"} className="hover:text-[16.3px]">Electronics</Link>
            <Link href={"#"} className="hover:text-[16.3px]">Home & Lifestyle</Link>
            <Link href={"#"} className="hover:text-[16.3px]">Medicine</Link>
            <Link href={"#"} className="hover:text-[16.3px]">Sports & Outdoor</Link>
            <Link href={"#"} className="hover:text-[16.3px]">Baby's & Toys</Link>
            <Link href={"#"} className="hover:text-[16.3px]">Groceries & Pets</Link>
            <Link href={"#"} className="hover:text-[16.3px]">Health & Beauty </Link>
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-[75%]">
          <div className=" w-[90%] h-[300px] mt-5">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
