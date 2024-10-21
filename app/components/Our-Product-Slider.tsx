"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import OurProductImageCard from "./Our-Product-Image-Card";

export default function OurProductSlider() {
  return (
    <>
      <Swiper
        slidesPerView={5.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
          <div>
          <OurProductImageCard image="/item-5.jpg" title="Breed Dry Dog Food" price="200" rating="68" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
