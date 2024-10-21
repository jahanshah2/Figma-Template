import Image from "next/image";
import Link from "next/link";
import React from "react";
import Frame891 from "../components/Frame-891";
import Frame890 from "../components/Frame-890";
import FullServices from "../components/Full-Services";

export default function about() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white w-[1093px] h-auto">
          <div className="text-gray-400 mt-[50px]">
            <Link className="hover:text-gray-700" href={"/"}>
              Home{" "}
            </Link>
            <Link className="hover:text-gray-700" href={"/"}>
              / About
            </Link>
          </div>
          <div className="flex h-[80vh]">
            <div className="flex items-center w-[50%]  h-full">
              <div className="flex flex-col gap-6 w-[80%] h-[80%]">
                <h1 className="font-semibold text-5xl">Our Story</h1>
                <p className="text-[14px]">
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p className="text-[14px]">
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
            </div>
            <div className="w-[50%] h-full">
              <Image
                className="h-[440px] w-[600px]"
                src={"/portrait-two-african-females.png"}
                alt=""
                height={0}
                width={530}
              />
            </div>
          </div>
          <div>
            <Frame891 />
          </div>
          <Frame890 />
          <FullServices />
        </div>
      </div>
    </>
  );
}
