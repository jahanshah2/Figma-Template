"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Frame888 from "./Frame-888";

export default function Frame890() {
  return (
    <>
      <div className="flex justify-center items-center w-[1093px] h-[400px] mt-[100px]">
        <div className="flex justify-between w-[900px] h-[350px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={150}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Frame888
                image="/image 46.png"
                name="Tom Cruise"
                title="Founder & Chairman"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Frame888
                image="/image 47.png"
                name="Will Smith"
                title="Product Designer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Frame888
                image="/image 51.png"
                name="Emma Watson"
                title="Managing Director"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Frame888
                image="/image 51.png"
                name="Emma Watson"
                title="Managing Director"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Frame888
                image="/image 51.png"
                name="Emma Watson"
                title="Managing Director"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
