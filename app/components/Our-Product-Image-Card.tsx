import React from "react";
import Image from "next/image";

export default function OurProductImageCard(prop: any) {
  return (
    <>
        <div className="h-full w-[200px]">
          <Image src={prop.image} alt="" height={0} width={150} />
          <p className="text-[17px] mt-2 font-medium ">{prop.title}</p>
          <div className="flex gap-x-4 mt-2">
            <span className="text-red-600 font-medium">${prop.price}</span>
            <Image
              className=" text-yellow-600 mt-2 w-20 h-3 "
              src={"/rating-logo.png"}
              alt=""
              height={0}
              width={100}
            />
            <span className="text-gray-400 mt-1 text-[11px]">
              ({prop.rating})
            </span>
          </div>
        </div>
    </>
  );
}