import Image from "next/image";

const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgUrl}
        alt="Customer Images"
        className="object-cover rounded-full w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info_text">{feedback}</p>

      <div className="mt-3 flex justify-center items-center gap-3">
        <Image
          src="./icons/star.svg"
          alt="Star Image"
          width={25}
          height={25}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>

      <h3 className="mt-3 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
