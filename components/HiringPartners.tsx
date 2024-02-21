import Image from "next/image";

const logos = [
  "/assets/images/Canvasvg.svg",
  "/assets/images/Nikesvg.svg",
  "/assets/images/Amazonsvg.svg",
  "/assets/images/coca-cola.svg",

  "/assets/images/Coca-cola.svg",
];
const ProductBuilt = () => {
  return (
    <>
      {/* <div className="border-t border-primaryOrange w-full"></div> */}
      <div className="bg-gradient-to-b from-[rgba(255,193,7,0.22)]  via-[rgba(255,193,7,0.12)] to-white">
        <div className="text-center font-poppins w-full px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-20 ">
          <h2 className="text-black h-12 w-full font-bold text-2xl md:text-3xl leading-10 md:leading-12 py-4 md:py-6 lg:py-8 mb-4 md:mb-5">
            &lt; Our <span className="text-primaryOrange">Hiring Partners</span>{" "}
            &gt;
          </h2>
          <h3 className="text-gray-500 font-medium text-base md:text-xl leading-6 md:leading-9 h-9 w-full">
            Your One Stop Destination for Success
          </h3>
        </div>

        <div className="flex items-center justify-center px-6 md:px-10 lg:px-0 xl:px-20 2xl:px-40 py-6 md:py-10  ">
          {/* <div className="  w-full h-auto rounded-lg bg-gradient-to-b from-orange-600 to-amber-400 p-1  "> */}
          <div className="  w-full h-auto rounded-lg p-1  ">
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
          </div>
        </div>
      </div>
      {/* <div className=" border-b-8 w-full ml-0 mr-0 px-0 py-4 lg:px-0 lg:py-8 bg-gradient-to-b from-[#FF5722] to-[#FFC10752]"></div> */}
    </>
  );
};
export default ProductBuilt;

// import Image from "next/image";

// const logos = [
//   "/assets/images/Logo.svg",
//   "/assets/images/Logo.svg",
//   "/assets/images/Logo.svg",
//   "/assets/images/Logo.svg",
// ];
// const ProductBuilt = () => {
//   return (
//     <>
//       <div className="text-center font-poppins w-full px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-20">
//         <h2 className="text-black h-12 w-full font-bold text-2xl md:text-3xl leading-10 md:leading-12 py-4 md:py-6 lg:py-8 mb-4 md:mb-5">
//           &lt; Product <span className="text-orangered">to built</span> &gt;
//         </h2>
//         <h3 className="text-gray-500 font-medium text-base md:text-xl leading-6 md:leading-9 h-9 w-full">
//           Your One Stop Destination for Success
//         </h3>
//       </div>

//       <div className="flex items-center justify-center px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-40 py-6 md:py-10  ">
//         <div className="  w-full h-auto rounded-lg border-b-8 ml-0 mr-0 px-0 py-4 lg:px-0 lg:py-8 bg-gradient-to-b from-[#FFC10752] to-[#FFC10752] ">
//           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full bg-white p-16 ">
//             {logos.map((logo, index) => (
//               <Image
//                 height={100}
//                 width={100}
//                 key={index}
//                 src={logo}
//                 alt="logoimage"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ProductBuilt;
