import Image from "next/image";
import FastMarquee from "react-fast-marquee";

const logos = [
  "/assets/images/Canvasvg.svg",
  "/assets/images/Nikesvg.svg",
  "/assets/images/Amazonsvg.svg",
  "/assets/images/coca-cola.svg",
];
const ProductBuilt = () => {
  return (
    <>
      {/* <div className="border-t border-primaryOrange w-full"></div> */}
      <div className="bg-gradient-to-b from-[rgba(255,193,7,0.22)]  via-[rgba(255,193,7,0.12)] to-white xl:max-w-7xl mx-auto">
        <div className="text-center font-poppins w-full px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-20 ">
          <h2 className="text-black h-12 w-full font-bold text-2xl md:text-3xl leading-10 md:leading-12 py-4 md:py-6 lg:py-8 mb-4 md:mb-5">
            &lt; Our <span className="text-primaryOrange">Hiring Partners</span>{" "}
            &gt;
          </h2>
          <h3 className="text-gray-500 font-medium text-base md:text-xl leading-6 md:leading-9 h-9 w-full">
            Your One Stop Destination for Success
          </h3>
        </div>
      </div>

      {/* <div className="flex items-center justify-center px-6 md:px-10 lg:px-0 xl:px-20 2xl:px-40 py-6 md:py-6  "> */}
      <div className="xl:max-w-7xl mx-auto">
        {/* <div className="  w-full h-auto rounded-lg bg-gradient-to-b from-orange-600 to-amber-400 p-1  "> */}
        {/* <div className="  w-full h-auto rounded-lg p-1  ">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full bg-white p-16 ">
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
          </div> */}

        <div>
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
      </div>
      {/* </div> */}
    </>
  );
};
export default ProductBuilt;


