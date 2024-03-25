import Image from "next/image";
import FastMarquee from "react-fast-marquee";
import star from "../../public/assets/images/softStars.svg";

const logos = [
  "/assets/images/Canvasvg.svg",
  "/assets/images/Nikesvg.svg",
  "/assets/images/Amazonsvg.svg",
  "/assets/images/coca-cola.svg",
];
// className="flex items-center justify-center px-6 md:px-10 lg:px-0 xl:px-20 2xl:px-40 py-6 md:py-10  "

const ProductBuilt = () => {
  return (
    <div className="bg-white">
      <div >
        <FastMarquee
          className="bg-white"
          pauseOnHover
          autoFill={true}
          speed={50}
          gradient={true}
        //   gradientWidth="md:w-50 lg:w-150"
        gradientWidth={100}
        >
          <div className="  w-full h-auto rounded-lg p-1  ">
            <div className=" grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-10 w-full bg-white p-16 ">
              {logos.map((logo, index) => (
                <Image
                  height={100}
                  width={100}
                  key={index}
                  src={logo}
                  alt="logoimage"
                />
              ))}
            </div>
          </div>
        </FastMarquee>
      </div>

      {/* <div className="md:-rotate-6 sm:rotate-0">
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
      </div> */}
    </div>
  );
};
export default ProductBuilt;
