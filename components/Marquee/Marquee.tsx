import FastMarquee from "react-fast-marquee";
import Image from "next/image";
import star from "../../public/assets/images/softStars.svg";
import { MarqueeList1, MarqueeList2 } from "./MarqueeData";

export const Marque = () => {
  return (
    <div className="pb-40">
      <div className="relative top-0 md:top-5 md:rotate-6 sm:rotate-0">
        <FastMarquee
          className="bg-primaryOrange"
          pauseOnHover
          autoFill={true}
          speed={100}
        >
          {MarqueeList1.map((item, index) => (
            <div
              key={index}
              className="mx-2 flex flex-row  items-center text-sm font-normal font-poppins text-black"
            >
              {item.title}
              <Image
                className="flex mx-2 my-1 -rotate-6 size-3"
                alt=""
                src={star}
              />
            </div>
          ))}
        </FastMarquee>
      </div>

      <div className="md:-rotate-6 sm:rotate-0">
        <FastMarquee
          className="bg-black object-fit"
          direction="right"
          pauseOnHover
          autoFill={true}
          speed={100}
        >
          {MarqueeList2.map((item, index) => (
            <div
              key={index}
              className="mx-2 flex flex-row items-center text-sm font-normal font-poppins text-white"
            >
              {item.title}
              <Image
                className="flex mx-2 my-1 -rotate-6 size-3"
                alt=""
                src={star}
              />
            </div>
          ))}
        </FastMarquee>
      </div>
    </div>
  );
};
