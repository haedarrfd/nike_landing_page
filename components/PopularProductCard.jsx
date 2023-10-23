import Image from "next/image";

const PopularProductCard = ({ imgUrl, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgUrl} alt={name} className="w-[280px] h-[280px]" />

      <div className="flex justify-start gap-3 mt-8">
        <Image
          src="/icons/star.svg"
          alt="Star Icon"
          width={24}
          height={24}
          className="object-contain"
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>

      <h2 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h2>
      <p className="mt-2 text-[18px] leading-normal font-semibold font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
