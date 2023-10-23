"use client";

import Image from "next/image";
import { CustomButton } from "@/components";

const SpecialOffer = () => {
  return (
    <div className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 w-full max_container">
      <div className="flex-1">
        <Image
          src="/images/offer.svg"
          alt="Offer Image"
          width={773}
          height={687}
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Special <span className="text-coral-red">Offer</span>
        </h1>
        <p className="mt-4 lg:max-w-lg info_text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <div className="mt-11 flex flex-wrap gap-5">
          <CustomButton title="View Details" arrowUp={false} />
          <CustomButton
            title="Learn More"
            arrowUp={false}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
