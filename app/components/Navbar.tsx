import Link from "next/link";
import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

export default function Navbar() {
  return (
    <>
      <div className="p-1 text-center bg-black">
        <span className="text-gray-100 font-light text-[15px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <b className="text-white underline animate-pulse ml-3">
            <a href="#">ShopNow </a>
          </b>
        </span>
        <span>
          <select
            name="language"
            className="bg-black text-[16px] text-gray-100 absolute right-[130px] mt-[0.5px] "
          >
            <option value="volvo">English</option>
            <option value="volvo">Urdu</option>
            <option value="saab">Hindi</option>
            <option value="mercedes">Arabic</option>
            <option value="audi">Spanish</option>
          </select>
        </span>
      </div>
      <div className="flex justify-center mt-5 border-b-[1.5px] ">
        <div className="flex justify-between w-[1170px] h-[38px] m-2 items-center">
          <h2 className="text-3xl font-semibold ml-6  ">Exclusive</h2>
          <div className="flex gap-9">
            <Link className="nav" href={"/"}>Home</Link>
            <Link className="nav" href={"contact"}>Contact</Link>
            <Link className="nav" href={"about"}>About</Link>
            <Link className="nav" href={"signup"}>Sign Up</Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <input
                type="search"
                className="bg-gray-200 focus-visible:outline-[0.5px] outline-gray-500 px-[15px] py-[4px] w-[280px] text-[14px] rounded-sm "
                placeholder="What are you looking for?"
              />
              <button>
                <LuSearch className="absolute right-1 top-[2px] border-l-[1.5px] border-gray-300 size-6 rounded-sm text-gray-500" />
              </button>
            </div>
            <IoIosHeartEmpty className="cursor-pointer size-7 " />
            <IoCartOutline className="cursor-pointer size-7 " />
          </div>
        </div>
      </div>
    </>
  );
}
