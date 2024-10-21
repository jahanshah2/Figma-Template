import React from "react";
import { CiShop } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { PiHandbag } from "react-icons/pi";
import { TbCalendarDollar } from "react-icons/tb";

export default function Frame891() {
  return (
    <div className="flex justify-center mt-[70px]">
      <div className="w-[1093px] h-auto">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3 shadow-lg justify-center items-center rounded-sm border-[1.5px] border-gray-400 h-[200px] w-[23%]">
            <div className="flex justify-center rounded-full items-center bg-gray-300 h-[60px] w-[60px]">
              <div className="flex justify-center items-center bg-black h-[80%] rounded-full w-[80%]">
                <CiShop className="text-white size-9" />
              </div>
            </div>
            <h2 className="font-bold text-3xl">10.5k</h2>
            <p className="text-[14px]">Sallers active our site</p>
          </div>
          <div className="flex flex-col gap-3 shadow-lg justify-center items-center rounded-sm border-[1.5px] border-gray-400 h-[200px] w-[23%]">
            <div className="flex justify-center rounded-full items-center bg-gray-300 h-[60px] w-[60px]">
              <div className="flex justify-center items-center bg-black h-[80%] rounded-full w-[80%]">
                <AiOutlineDollar className="text-white size-9" />
              </div>
            </div>
            <h2 className="font-bold text-3xl">33k</h2>
            <p className="text-[14px]">Monthly Produduct Sale</p>
          </div>
          <div className="flex flex-col gap-3 shadow-lg justify-center items-center rounded-sm border-[1.5px] border-gray-400 h-[200px] w-[23%]">
            <div className="flex justify-center rounded-full items-center bg-gray-300 h-[60px] w-[60px]">
              <div className="flex justify-center items-center bg-black h-[80%] rounded-full w-[80%]">
                <PiHandbag className="text-white size-9" />
              </div>
            </div>
            <h2 className="font-bold text-3xl">45.5k</h2>
            <p className="text-[14px]">Customer active in our site</p>
          </div>
          <div className="flex flex-col gap-3 shadow-lg justify-center items-center rounded-sm border-[1.5px] border-gray-400 h-[200px] w-[23%]">
            <div className="flex justify-center rounded-full items-center bg-gray-300 h-[60px] w-[60px]">
              <div className="flex justify-center items-center bg-black h-[80%] rounded-full w-[80%]">
                <TbCalendarDollar className="text-white size-9" />
              </div>
            </div>
            <h2 className="font-bold text-3xl">25k</h2>
            <p className="text-[14px]">Anual gross sale in our site</p>
          </div>
        </div>
      </div>
    </div>
  );
}
