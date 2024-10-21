import Image from "next/image";
import React from "react";
import Button from "../components/Button";

export default function singup() {
  return (
    <div className=" h-[600px] mt-[50px] flex justify-between">
      <div className="relative bg-customColor h-full w-[45%]">
        <Image
          className="absolute bottom-0"
          src={"/dl.beatsnoop 1.png"}
          alt=""
          width={1000}
          height={0}
        />
      </div>
      <div className=" h-full w-[45%] flex items-center justify-end ">
        <div className=" h-[80%] w-[80%]">
          <form className="flex flex-col gap-4" action="">
            <h2 className="text-[25px] font-bold">Create an account</h2>
            <p className="font-medium">Enter your details below</p>
            <input
              className="h-[32px] w-[300px] border-b-[1.5px] border-gray-500"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-[32px] w-[300px] border-b-[1.5px] border-gray-500"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              className="h-[32px] w-[300px] border-b-[1.5px] border-gray-500"
              type="password"
              placeholder="Password"
            />
            <Button
              style1="cursor-pointer"
              style2="bg-red-600 w-[300px] h-[40px] rounded-sm text-white text-[12px]"
              title="Create Account"
            />
            <Button
              style1="bg-red w-[300px]"
              style2="flex gap-2 justify-center items-center border h-[40px] w-[300px] rounded-sm"
              title="Sign up with Google"
              image="/G-logo.png"
            />
            <div className="flex gap-2 justify-center w-[300px]">
              <p className="text-gray-500">Already have account?</p>
              <p className="border-b-[2px] text-gray-700 cursor-pointer border-gray-600 font-medium">
                Log in
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
