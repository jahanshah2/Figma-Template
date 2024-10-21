import React from "react";
import BestSellImageCard from "./Best-Selling-Card";
import Button from "./Button";

export default function BestSelling() {
  return (
    <div className="h-[213px] flex justify-center relative top-[50px]">
      <div className="h-full w-[1093px]">
        <div className="flex gap-2 h-[25px] w-[80%]">
          <div className=" bg-red-600 h-[25px] w-4  rounded-sm"></div>
          <span className="font-semibold text-red-600 ">This Month</span>
        </div>
        <div className="flex justify-between h-100 w-200">
          <h2 className="font-semibold mt-3 text-3xl">Best Selling Products</h2>
          <Button
            style1="flex justify-center items-center cursor-pointer"
            style2="bg-red-600  w-[100px] h-[35px] rounded-sm text-white text-[12px]"
            title="View All"
          />
        </div>
        <div className="h-[400px] flex justify-between mt-10">
          <div>
            <BestSellImageCard
              image="/item-2.jpg"
              title="pakistan"
              price="200"
              deletePrice="230"
              rating="65"
            />
          </div>
          <div>
            <BestSellImageCard
              image="/item-3.jpg"
              title="pakistan"
              price="200"
              deletePrice="230"
              rating="65"
            />
          </div>
          <div>
            <BestSellImageCard
              image="/item-4.jpg"
              title="pakistan"
              price="200"
              deletePrice="230"
              rating="65"
            />
          </div>
          <div>
            <BestSellImageCard
              image="/item-5.jpg"
              title="pakistan"
              price="200"
              deletePrice="230"
              rating="65"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
