import React from "react";
import OurProductSlider from "./Our-Product-Slider";
import Button from "./Button";

export default function Ourproducts() {
  return (
    <div className="h-[540px] flex justify-center mt-[27%]">
      <div className="h-full w-[1093px] bg-white">
        <div className="flex gap-2 h-[25px] w-[80%]">
          <div className=" bg-red-600 h-[25px] w-4  rounded-sm"></div>
          <span className="font-semibold text-red-600 ">Our Products</span>
        </div>
        <div className="h-100 w-200">
          <h2 className="font-semibold mt-3 text-3xl">Explore Our Products</h2>
        </div>
        <div>
          <OurProductSlider />
        </div>
        <Button
          style1="flex justify-center cursor-pointer mt-[50px] "
          style2="bg-red-600 py-[8px] px-8 rounded-sm text-white text-[12px]"
          title="View All Products"
        />
      </div>
    </div>
  );
}
