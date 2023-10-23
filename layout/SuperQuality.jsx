"use client";

import { CustomButton } from "@/components";
import Image from "next/image";

const SuperQuality = () => {
  return (
    <div
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max_container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You{" "}
          <span className="text-coral-red inline-block mt-3">Super</span>{" "}
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h1>
        <p className="mt-4 lg:max-w-lg info_text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <div className="mt-11">
          <CustomButton title="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/images/shoe8.svg"
          alt="Shoe Quality Image"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SuperQuality;
