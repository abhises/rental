import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquareMore, PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="mx-20 my-10 mt-20">
        <h1 className="text-4xl font-bold text-gray-400 mb-10">
          FEATURED RENT
        </h1>
        <div className="h-80 w-75 border-gray-200 border-2 hover:shadow-lg rounded-lg ">
          <Image
            src="https://umgmifowuhsavwbybvux.supabase.co/storage/v1/object/public/rental/icon.png"
            alt="Hero Image"
            width={200}
            height={200}
          />
          <div className="m-4 flex flex-col gap-2">
            <span className="text-lg hover:text-pink-600 cursor-pointer">
              OFFICE FOR RENT IN Kalanki, Kathmandu
            </span>
            <span>Kalanki, Kathmandu</span>
            <span>Flat ,Apartment</span>
            <div className="flex justify-between ">
              {" "}
              <span>Rs. 25,000 / month</span>
             <div className="flex gap-3">
                <button className="bg-green-300 p-1 text-white cursor-pointer rounded-lg hover:bg-green-600 hover:-translate-y-1">
                  <PhoneCall />
                </button>
                <button className="bg-green-300 p-1 text-white cursor-pointer rounded-lg hover:bg-green-600 hover:-translate-y-1">
                  <MessageSquareMore />
                </button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
