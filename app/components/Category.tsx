import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";

export default function Category() {
  return (
    <>
      <div className="h-[213px] flex justify-center relative top-[50px]">
        <div className="h-full w-[1093px] bg-white">
          <div className="flex gap-2 h-[25px] w-[80%]">
            <div className=" bg-red-600 h-[25px] w-4  rounded-sm"></div>
            <span className="font-semibold text-red-600 ">Categories</span>
          </div>
          <div className="h-100 w-200">
            <h2 className="font-semibold mt-3 text-3xl">Browse By Category</h2>
          </div>
          <div className="flex justify-between mt-[29px]">
            <div className="border-[1.5px] border-gray-300 text-gray-700 flex gap-1 justify-center items-center flex-col h-[110px] w-[135px] rounded-sm">
              <FaMobileAlt className="size-11" />
              <p className="font-medium">Phones</p>
            </div>
            <div className="border-[1.5px] border-gray-300 text-gray-700 flex gap-1 justify-center items-center flex-col h-[110px] w-[135px] rounded-sm">
              <RiComputerLine className="size-11" />
              <p className="font-medium">Computer</p>
            </div>
            <div className="border-[1.5px] border-gray-300 text-gray-700 flex gap-1 justify-center items-center flex-col h-[110px] w-[135px] rounded-sm">
              <BsSmartwatch className="size-11" />
              <p className="font-medium">SmartWatch</p>
            </div>
            <div className="border-[1.5px] border-gray-300 text-gray-700 flex gap-1 justify-center items-center flex-col h-[110px] w-[135px] rounded-sm">
              <IoCameraOutline className="size-11" />
              <p className="font-medium">Camera</p>
            </div>
            <div className="border-[1.5px] border-gray-300 text-gray-700 flex gap-1 justify-center items-center flex-col h-[110px] w-[135px] rounded-sm">
              <LuHeadphones className="size-11" />
              <p className="font-medium">HeadPhones</p>
            </div>
            <div className="border-[1.5px] border-gray-300 text-gray-700 flex gap-1 justify-center items-center flex-col h-[110px] w-[135px] rounded-sm">
              <IoGameControllerOutline className="size-11" />
              <p className="font-medium">Gaming</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
