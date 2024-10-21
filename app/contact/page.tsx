import React from "react";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../components/Button";


export default function contact() {
  
  return (
    <>
      <div className="flex justify-center mt-[100px]">
        <div className=" w-[1093px]">
          <div className="text-gray-400">
            <Link className="hover:text-gray-700" href={"/"}>
              Home{" "}
            </Link>
            <Link className="hover:text-gray-700" href={"/"}>
              / About
            </Link>
          </div>
          <div className="flex justify-between h-[400px] mt-[100px]">
            <div className="flex justify-center items-center h-full w-[31%] rounded-md shadow-2xl">
              <div className="flex flex-col gap-4 h-[90%] w-[90%]">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-500 flex justify-center items-center rounded-full h-[40px] w-[40px]">
                      <LuPhone className="size-6 text-white" />
                    </div>
                    <p className="font-medium">Call To Us</p>
                  </div>
                  <p className="text-[14px]">
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className="text-[14px]">Phone: +8801611112222.</p>
                  <hr className="h-[3px] bg-gray-400" />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-500 flex justify-center items-center rounded-full h-[40px] w-[40px]">
                      <AiOutlineMail className="size-6 text-white" />
                    </div>
                    <p className="font-medium">Write To US</p>
                  </div>
                  <p className="text-[14px]">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className="text-[14px]">Emails: customer@exclusive.com</p>
                  <p className="text-[14px]">Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center h-full w-[67%] rounded-md shadow-2xl">
              <div className="h-[90%] w-[90%]">
                <form action="">
                  <div className="flex justify-between mb-[30px]">
                    <input
                      className="bg-gray-100 h-[35px] w-[32%] pl-[15px] rounded-sm focus-visible:outline-none"
                      type="text"
                      placeholder="Your Name *"
                    />
                    <input
                      className="bg-gray-100 h-[35px] w-[32%] pl-[15px] rounded-sm focus-visible:outline-none"
                      type="email"
                      placeholder="Your Email *"
                    />
                    <input
                      className="bg-gray-100 h-[35px] w-[32%] pl-[15px] rounded-sm focus-visible:outline-none"
                      type="number"
                      placeholder="Your Phone *"
                    />
                  </div>
                  <div className="h-[200px]">
                    <textarea
                      className="resize-none bg-gray-100 h-full w-full pl-[15px] rounded-sm focus-visible:outline-none"
                      name=""
                      id=""
                      placeholder="Your Massage"
                    ></textarea>
                  </div>
                  <div className="mt-[20px] flex justify-end">
                    <Button
                      style2="bg-red-600 py-[10px] px-8 rounded-sm text-white text-[12px]"
                      title="Send Massage"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
