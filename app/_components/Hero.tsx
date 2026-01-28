"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquareMore, PhoneCall } from "lucide-react";
import { rentals } from "@/constants/rentals";

const Hero = () => {

    const [rentList, setRentList] = React.useState(rentals);
  return (
    <div className="w-full h-screen">
      <div className="mx-20 my-10 mt-20">
        <h1 className="text-4xl font-bold text-gray-400 mb-10">
          FEATURED RENT
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {rentList.map((item) => (
            <div
              key={item.id}
              className="  min-h-80
            border-gray-200 border-2 hover:shadow-lg dark:hover:shadow-gray-200
            rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="mx-auto mt-4"
              />

              <div className="m-4 flex flex-col gap-2">
                <span className="text-lg hover:text-pink-600 cursor-pointer">
                  {item.title}
                </span>

                <span>{item.location}</span>
                <span>{item.type}</span>

                <div className="flex justify-between items-center">
                  <span>Rs. {item.price.toLocaleString()} / month</span>

                  <div className="flex gap-3">
                    <button
                      title="Call"
                      className="bg-green-300 p-1 text-white rounded-lg hover:bg-green-600 hover:-translate-y-1 transition cursor-pointer"
                    >
                      <PhoneCall />
                    </button>

                    <button
                      title="Message"
                      className="bg-green-300 p-1 text-white rounded-lg hover:bg-green-600 hover:-translate-y-1 transition cursor-pointer"
                    >
                      <MessageSquareMore />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
