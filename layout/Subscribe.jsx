"use client";

import { CustomButton } from "@/components";

const Subscribe = () => {
  return (
    <div
      id="contact-us"
      className="max_container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up From <span className="text-coral-red">Update</span> & Newsletter
      </h3>

      <div className="lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-3 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="service@nike.com" className="input" />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <CustomButton title="Sign Up" arrowUp={false} fullWidth />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
