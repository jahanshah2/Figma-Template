import BestSelling from "./components/Best-Selling";
import BigImage from "./components/Big-Image";
import Button from "./components/Button";
import Category from "./components/Category";
import Featured from "./components/Featured";

import FlashSale from "./components/Flash-Sales";
import FullServices from "./components/Full-Services";
import Hero from "./components/Hero";

import Ourproducts from "./components/Our-Products";

export default function Home() {
  return (
    <>
      <Hero />
      <FlashSale />
      <Button
        style1="flex justify-center cursor-pointer mb-8 z-20"
        style2="bg-red-600 py-[8px] px-8 rounded-sm text-white text-[12px]"
        title="View All Products"
      />
      <div className="flex justify-center">
        <hr className="h-[0.5px] w-[1093px] border-0 bg-gray-300" />
      </div>
      <Category />
      <div className="mt-[110px] flex justify-center">
        <hr className="h-[0.5px] w-[1093px] border-0 bg-gray-300" />
      </div>
      <BestSelling />
      <BigImage />
      <Ourproducts />
      <Featured />
      <FullServices />
    </>
  );
}
