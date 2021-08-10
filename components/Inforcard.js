import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { useState } from "react";

function Inforcard({ img, location, title, description, star, price, total }) {
  const [like, setLike] = useState(false);
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-in-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-gray-500">{location}</p>
          {like ? (
            <SolidHeartIcon
              className="cursor-pointer h-7 text-red-500"
              onClick={() => setLike(false)}
            />
          ) : (
            <HeartIcon
              className="cursor-pointer h-7"
              onClick={() => setLike(true)}
            />
          )}
        </div>

        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-500" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inforcard;
