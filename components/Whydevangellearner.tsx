import React from "react";

import clsx from "clsx";
import Image from "next/image";

import { classNames } from "@/utils/classNames";
import HireCard from "./hireCard";

const Whydevangellearner = () => {
  const hirecardProps = [
    {
      h1: "Industry -",
      h2: "Ready Candidates",
      description:
        "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
      image: "/assets/images/undraw_experts.png",
    },
    {
      h1: "Diverse",
      h2: "Skill sets and Experience ",
      description:
        "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
      image: "/assets/images/diverse.png",
    },
    {
      h1: "Mentored By",
      h2: "Global Experts",
      description:
        "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
      image: "/assets/images/globe.png",
    },
    {
      h1: "Trusted",
      h2: "By Industry Leaders",
      description:
        "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
      image: "/assets/images/undraw_powerful_re_frhr 1.png",
    },
  ];
  return (
    <>
      <div className="flex w-screen place-content-center overflow-hidden">
        <div className="flex flex-col  w-full place-content-center ">
          <p className="flex place-content-center font-bold font-poppins text-xl">
            <span>{"<"} Why </span>

            <span className=" ml-2 text-primaryOrange">
              {" "}
              Devangel Learner?{" "}
            </span>
            <span>{">"}</span>
          </p>
          <p className="flex text-grey font-medium place-content-center font-poppins text-base ">
            Your One Stop Destination for Success
          </p>
          <div className="mt-10  justify-center mx-2 ">
            {hirecardProps.map((props, index) => (
              // <div
              //   key={index}
              //   className={clsx(
              //     "flex justify-center items-center",
              //     "my-2",
              //     index % 2 === 0
              //       ? "flex-row md:mr-32"
              //       : "flex-row-reverse md:ml-32 sm:mr-4"
              //   )}
              // >
              //   <div className="image-container">
              //     <Image
              //       src={hirecardProps[index].image}
              //       alt="....."
              //       width={150}
              //       height={35}
              //       className="hidden sm:flex  max-w-[354px]"
              //     ></Image>{" "}
              //   </div>

              //   <HireCard key={index} {...props} />
              //   <div
              //     className={classNames(
              //       "border-t border-t-1 border-t-black  w-96 h-32  ",
              //       index % 2 == 0
              //         ? "border-r border-r-1 border-r-black"
              //         : "border-l border-l-1 border-l-black"
              //     )}
              //   ></div>
              //   <div
              //     className={classNames(
              //       "w-[10px] h-[10px] rounded-full bg-orange-500 relative top-16 ",
              //       index % 2 == 0 ? "-left-[5px]" : "left-[5px]"
              //     )}
              //   ></div>
              //   {/* <div className="w-[20px] h-[20px] rounded-full bg-orange-500 relative top-16 "></div> */}
              // </div>

              <div
                key={index}
                className={clsx(
                  "flex justify-center items-center",
                  "my-2",
                  index % 2 === 0
                    ? "flex-row md:mr-32"
                    : "flex-row-reverse md:ml-32 sm:mr-4"
                )}
              >
                {index !== 3 && (
                  <>
                    <div className="image-container">
                      <Image
                        src={hirecardProps[index].image}
                        alt="....."
                        width={150}
                        height={35}
                        className="hidden sm:flex  max-w-[354px]"
                      ></Image>{" "}
                    </div>

                    <HireCard key={index} {...props} />

                    <div
                      className={classNames(
                        "border-t border-t-1 border-t-black  w-96 h-32  ",
                        index % 2 === 0
                          ? "border-r border-r-1 border-r-black"
                          : "border-l border-l-1 border-l-black"
                      )}
                    ></div>
                    <div
                      className={classNames(
                        "lg:w-[1em] lg:h-[1em] md:w-[20px] md:h-[10px] sm:w-[20px] sm:h-[7px]  w-[20px] h-[4px] rounded-full bg-orange-500 relative top-16 ",
                        index % 2 === 0 ? "-left-[5px]" : "left-[5px]"
                      )}
                    ></div>
                  </>
                )}
                {index === 3 && (
                  <>
                    <div className="image-container">
                      <Image
                        src={hirecardProps[index].image}
                        alt="....."
                        width={150}
                        height={35}
                        className="hidden sm:flex  max-w-[354px]"
                      ></Image>{" "}
                    </div>

                    <HireCard key={index} {...props} />

                    <div
                      className={classNames(
                        "border-t border-t-1 border-t-white  w-96 h-32  ",
                        index % 2 === 0
                          ? "border-r border-r-1 border-r-white"
                          : "border-l border-l-1 border-l-white"
                      )}
                    ></div>
                    <div
                      className={classNames(
                        "w-[10px] h-[10px] rounded-full bg-white relative top-16 ",
                        index % 2 === 0 ? "-left-[5px]" : "left-[5px]"
                      )}
                    ></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div
          className="flex w-screen bg-white"
          style={{
            backgroundColor: "white",
            backgroundImage:
              // "linear-gradient(45deg, #ecf1e9 0%, #e5f98c 100%)",
              "linear-gradient( to top , rgba(255, 193, 7, 0.19) 0%, rgba(255, 255, 255, 1) 100%)",
          }}
        >
          <div className=" justify-center w-screen">
            <div className=" flex justify-center items-center ">
              <button className="mb-10 flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 px-3 rounded">
                <span className="ml-auto">Start Hiring</span>
                <span className="text-xl font-thin">&gt;</span>
              </button>
            </div>
            {/* <img
                    src="/assets/images/undraw_powerful_re_frhr 1.png"
                    alt="Hire Card Iamge"
                    className="w-40 h-40 l-0"
                  /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Whydevangellearner;
