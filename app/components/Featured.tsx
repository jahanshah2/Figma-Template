import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Featured() {
  return (
    <div className="h-[450px] flex justify-center mt-20">
      <div className=" flex justify-between h-full w-[1093px] bg-white">
        <div className="relative overflow-hidden rounded-md bg-black h-full w-[49%]">
          <Image
            className="bg-bla w-[80%] absolute left-[90px] bottom-0 object-cover "
            src={"/item-ps5-slim.png"}
            alt=""
            height={0}
            width={100000000}
          />
          <div className="flex flex-col gap-3 absolute bottom-4 text-white left-4">
            <p className="font-medium">PlayStation 5</p>
            <p className="text-[12px]">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <Link className="underline animate-pulse " href={"#"}>
              Shop Now
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between  h-full w-[49%]">
          <div className="relative overflow-hidden rounded-md bg-black h-[49%]">
            <Image
              className="absolute right-0 h-[100%] w-[70%] "
              src={"/item-womens-collection.png"}
              alt=""
              height={0}
              width={1000}
            />
            <div className="flex flex-col gap-3 absolute bottom-4 text-white left-4">
              <p className="font-medium">Women’s Collections</p>
              <p className="text-[12px]">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <Link className="underline animate-pulse " href={"#"}>
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex justify-between h-[49%]">
            <div className=" h-full w-[49%]">
              <div className="relative overflow-hidden rounded-md bg-black h-full">
                <Image
                  className="absolute bottom-3 left-[23%] w-[60%] "
                  src={"/item-speaker-collection.png"}
                  alt=""
                  height={0}
                  width={11000}
                />
                <div className="flex flex-col gap-1 absolute bottom-4 text-white left-4">
                  <p className="font-medium">Speakers</p>
                  <p className="text-[12px]">
                  Amazon wireless speakers
                  </p>
                  <Link className="underline animate-pulse " href={"#"}>
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-full w-[49%]">
            <div className="relative overflow-hidden rounded-md bg-black h-full">
                <Image
                  className="absolute bottom-7 left-[23%] w-[60%] "
                  src={"/item-perfume-collection.png"}
                  alt=""
                  height={0}
                  width={11000}
                />
                <div className="flex flex-col gap-1 absolute bottom-4 text-white left-4">
                  <p className="font-medium">Perfume</p>
                  <p className="text-[12px]">
                  GUCCI INTENSE OUD EDP
                  </p>
                  <Link className="underline animate-pulse " href={"#"}>
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
