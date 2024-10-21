import Image from "next/image";
import React from "react";

export default function Button(prop:any) {
  return (
    <>
      <div className={prop.style1}>
        <button className={prop.style2}>
          <Image alt="" height={0} width={30} src={prop.image} /> {prop.title}
        </button>
      </div>
    </>
  );
}
