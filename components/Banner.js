import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
      />
      <div className="block lg:hidden absolute top-1/4 w-full">
        <p className="font-bold text-xl md:text-4xl text-white ml-5 md:ml-10">Olympian <br />&amp; <br />Paralympian <br />Online <br />Experiences</p>
        <button className="hidden lg:block bg-white rounded-lg py-1.5 px-4 ml-10 mt-10">Explore now</button>
      </div>
      <div className="hidden lg:block absolute top-1/4 w-full">
        <p className="font-bold text-7xl text-white md:ml-10 ml-20">Olympian &amp; <br />Paralympian <br />Online <br />Experiences</p>
        <button className="bg-white rounded-lg py-1.5 px-4 ml-20 md:ml-10 mt-10 hover:shadow-xl active:scale-90 transition duration-150">Explore now</button>
      </div>
    </div>
  );
}

export default Banner;
