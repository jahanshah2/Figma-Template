"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import ImageCard from "./Image-Card";

export default function ItemSlider() {
  return (
    <>
      <div className="relative top-4 h-[490px] ">
        <Swiper
          slidesPerView={4.3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-2.jpg"}
                discount={"20%"}
                title={"Fire-Boltt Ninja Call Pro Max"}
                price={120}
                deletePrice={160}
                rating={88}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-2.jpg"}
                discount={"40%"}
                title={"Fire-Boltt Ninja Call Pro Max"}
                price={320}
                deletePrice={360}
                rating={88}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-2.jpg"}
                discount={"30%"}
                title={"Fire-Boltt Ninja Call Pro Max"}
                price={1020}
                deletePrice={1060}
                rating={88}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-4.jpg"}
                discount={"10%"}
                title={"LPG Gas Stove | Black Spill Proof Design"}
                rate={420}
                deleteRate={460}
                rating={79}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-5.jpg"}
                discount={"17%"}
                title={
                  "Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)"
                }
                price={190}
                deletePrice={220}
                rating={79}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-5.jpg"}
                discount={"12%"}
                title={
                  "Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)"
                }
                price={190}
                deletePrice={220}
                rating={79}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-5.jpg"}
                discount={"17%"}
                title={
                  "Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)"
                }
                price={190}
                deletePrice={220}
                rating={79}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-5.jpg"}
                discount={"5%"}
                title={
                  "Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)"
                }
                price={190}
                deletePrice={220}
                rating={79}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-5.jpg"}
                discount={"17%"}
                title={
                  "Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)"
                }
                price={190}
                deletePrice={220}
                rating={79}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-5.jpg"}
                discount={"27%"}
                title={
                  "Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)"
                }
                price={190}
                deletePrice={220}
                rating={79}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-[355px] w-[200px]">
              <ImageCard
                image={"/item-5.jpg"}
                discount={"17%"}
                title={
                  "Mixer Grinder With 4 Jars (3 Stainless Steel Jars+ 1 Juicer Jar)"
                }
                price={190}
                deletePrice={220}
                rating={79}
              />
            </div> 
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
