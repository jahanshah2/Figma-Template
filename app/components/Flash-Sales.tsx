import Image from "next/image";
import React from "react";
import ItemSlider from "./Item-Slider";

export default function FlashSale() {
  return (
    <>
      <section className="flex justify-center relative top-[100px]">
        <div className="w-[86.5%]">
          <div className="flex gap-2 h-[25px] w-[80%]">
            <div className=" bg-red-600 h-[25px] w-4  rounded-sm"></div>
            <span className="font-semibold text-red-600 ">Today's</span>
          </div>
          <div className="h-100 w-200">
            <h2 className="font-semibold mt-3 text-3xl">Flash Sales</h2>
          </div>
          <ItemSlider />
        </div>
      </section>
    </>
  );
}
