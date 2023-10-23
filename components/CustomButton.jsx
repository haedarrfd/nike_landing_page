"use client";

import { arrowRight } from "@/public/icons";

const CustomButton = ({
  title,
  arrowUp = true,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-2 p-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} rounded-full`
          : `bg-coral-red rounded-full text-white border-coral-red ${
              fullWidth && "w-full"
            } `
      }`}
    >
      {title}

      {arrowUp && (
        <img
          src="./icons/arrow-right.svg"
          alt="Arrow Icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default CustomButton;
