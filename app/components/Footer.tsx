import Image from "next/image";
import React from "react";
import { IoSendOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" bg-black h-[300px] flex flex-col items-center justify-center mt-20">
      <div className="text-white h-full w-[1093px] bg-white">
        <div className="flex bg-black h-full w-full">
          <div className="flex gap-3 flex-col pt-[40px] items-center h-full w-[20%]">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-[20px]">Exclusive</h2>
              <h3 className="font-medium">Subscribe</h3>
              <p className="text-[15px]">Get 10% off your first order</p>
            </div>
            <div>
              <div className="relative">
                <input
                  className="h-[40px] border rounded-md pl-1 border-white bg-black"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="absolute top-[9px] right-1">
                  <IoSendOutline className="size-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 flex-col pt-[40px] items-center h-full w-[20%]">
            <div className="flex flex-col gap-3">
              <h3 className="font-medium">Support</h3>
              <p className="text-[15px]">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="text-[15px]">exclusive@gmail.com</p>
              <p className="text-[15px]">+88015-88888-9999</p>
            </div>
          </div>
          <div className="flex gap-3 flex-col pt-[40px] items-center h-full w-[20%]">
            <div className="flex flex-col gap-3">
              <h3 className="font-medium">Account</h3>
              <p className="text-[15px]">My Account</p>
              <p className="text-[15px]">Login / Register</p>
              <p className="text-[15px]">Cart</p>
              <p className="text-[15px]">Wishlist</p>
              <p className="text-[15px]">Shop</p>
            </div>
          </div>
          <div className="flex gap-3 flex-col pt-[40px] items-center h-full w-[20%]">
            <div className="flex flex-col gap-3">
              <h3 className="font-medium">Quick Link</h3>
              <p className="text-[15px]">Privacy Policy</p>
              <p className="text-[15px]">Terms Of Use</p>
              <p className="text-[15px]">FAQ</p>
              <p className="text-[15px]">Contact</p>
            </div>
          </div>
          <div className="flex gap-3 flex-col pt-[40px] items-center h-full w-[20%]">
            <div className="flex flex-col gap-3">
              <h3 className="font-medium">Download App</h3>
              <p className="text-[10px]">Save $3 with App New User Only</p>
              <div className="flex">
                <div className="h-[50px] w-[50px]">
                  <button>
                    <Image
                      className="rounded-sm"
                      src={"/Qrcode 1.png"}
                      alt=""
                      height={0}
                      width={1000}
                    />
                  </button>
                </div>
                <div className="h-[50px] w-[55px]">
                  <div className="h-[24px] ml-1">
                    <button>
                      <Image
                        className="h-[24px] w-[50px] rounded-sm "
                        src={"/google-play-store-logo.png"}
                        alt=""
                        height={0}
                        width={10100}
                      />
                    </button>
                  </div>
                  <div className="h-[24px] ml-1 mt-[2px]">
                    <button>
                      <Image
                        className="h-[24px] w-[50px] rounded-sm "
                        src={"/download-appstore.png"}
                        alt=""
                        height={0}
                        width={10100}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button>
                  <FaFacebookF />
                </button>
                <button>
                  <LuTwitter className="size-[19px]" />
                </button>
                <button>
                  <FaInstagram className="size-[19px]" />
                </button>
                <button>
                  <AiOutlineLinkedin className="size-[19px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40px] bg-black text-gray-400 font-light text-center">
          <p>© Copyright Rimel 2024. All right reserved</p>
        </div>
    </div>
  );
}
