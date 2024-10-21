"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper "
    >
      <SwiperSlide>
          <Image className=" h-[320px] w-[880px] rounded-md " src={"/slide1.jpg"} alt="" width={700} height={0} />
      </SwiperSlide>
      <SwiperSlide>
          <Image className="h-[320px] w-[880px] rounded-md " src={"/slide2.webp"} alt="" width={700} height={0} />
      </SwiperSlide>
      <SwiperSlide>
          <Image className="h-[320px] w-[880px] rounded-md " src={"/slide3.webp"} alt="" width={700} height={0} />
      </SwiperSlide>
      <SwiperSlide>
          <Image className="h-[320px] w-[880px]  rounded-md " src={"/slide4.webp"} alt="" width={700} height={0} />
      </SwiperSlide>
      <SwiperSlide>
          <Image className="h-[320px] w-[880px] rounded-md " src={"/slide5.webp"} alt="" width={700} height={0} />
      </SwiperSlide>
    </Swiper>
  );
}
