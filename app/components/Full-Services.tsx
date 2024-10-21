import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";

export default function FullServices() {
  return (
    <div className="h-[125px] flex justify-center mt-[90px]">
      <div className="flex justify-between h-full w-[900px]">
        <div className="flex flex-col justify-center gap-5 text-center items-center h-full w-[31%]">
          <div>
            <div className="flex justify-center rounded-full items-center bg-gray-300 h-[60px] w-[60px]">
              <div className="flex justify-center items-center bg-black h-[80%] rounded-full w-[80%]">
                <CiDeliveryTruck className="text-white size-9" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">FREE AND FAST DELIVERY</h2>
            <p className="text-[13px] mt-1">Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 text-center items-center h-full w-[31%]">
          <div>
            <div className="flex justify-center rounded-full items-center bg-gray-300 h-[60px] w-[60px]">
              <div className="flex justify-center items-center bg-black h-[80%] rounded-full w-[80%]">
                <CiHeadphones className="text-white size-9" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">24/7 CUSTOMER SERVICE</h2>
            <p className="text-[13px] mt-1">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 text-center items-center h-full w-[31%]">
          <div>
            <div className="flex justify-center rounded-full items-center bg-gray-300 h-[60px] w-[60px]">
              <div className="flex justify-center items-center bg-black h-[80%] rounded-full w-[80%]">
                <CiBookmarkCheck className="text-white size-9" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">MONEY BACK GUARANTEE</h2>
            <p className="text-[13px] mt-1">We reurn money within 30 days</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
