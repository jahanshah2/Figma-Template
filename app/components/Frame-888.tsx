import React from "react";
import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

export default function Frame888(props:any) {
  return (
    <>
      <div>
        <div className="flex justify-center items-end rounded-sm bg-gray-200 h-[250px] w-[200px]">
          <Image
            className="h-[220px] w-[150px]"
            src={props.image}
            alt=""
            height={0}
            width={200}
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-xl font-medium whitespace-nowrap">{props.name}</p>
          <p className="whitespace-nowrap">{props.title}</p>
          <div className="cursor-pointer mt-[4px] flex gap-2">
            <CiTwitter />
            <CiInstagram />
            <CiLinkedin />
          </div>
        </div>
      </div>
    </>
  );
}
