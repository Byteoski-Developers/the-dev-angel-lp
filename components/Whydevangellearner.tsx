import React from "react";

import clsx from "clsx";
import Image from "next/image";
import HireCard from "./HireCard";
import { classNames } from "@/utils/classNames";

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
    // {
    //   h1: "Trusted",
    //   h2: "By Industry Leaders",
    //   description:
    //     "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
    //   image: "/assets/images/undraw_powerful_re_frhr 1.png",
    // },
  ];
  return (
    <div className="flex w-full place-content-center">
      <div className="flex flex-col  w-full place-content-center ">
        <p className="flex place-content-center font-bold font-poppins text-xl">
          <span>{"<"} Why </span>

          <span className=" ml-2 text-primaryOrange"> Devangel Learner? </span>
          <span>{">"}</span>
        </p>
        <p className="flex text-grey font-medium place-content-center font-poppins text-base ">
          Your One Stop Destination for Success
        </p>
        <div className="mt-10  justify-center ">
          {hirecardProps.map((props, index) => (
            <div
              key={index}
              className={clsx(
                "flex justify-center",
                "my-2",
                index % 2 === 0
                  ? "flex-row md:mr-32"
                  : "flex-row-reverse md:ml-32 sm:mr-4"
              )}
            >
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
                  index % 2 == 0
                    ? "border-r border-r-1 border-r-black"
                    : "border-l border-l-1 border-l-black"
                )}
              ></div>
              <div className="w-[10px] h-[10px] rounded-full bg-orange-500"></div>
            </div>
          ))}
          <div>
            <div
              className="flex w-screen bg-yellow-100"
              style={{
                backgroundColor: "#ecf1e9",
                backgroundImage:
                  "linear-gradient(45deg, #ecf1e9 0%, #e5f98c 100%)",
              }}
            >
              <div className="w-11/12 flex justify-end">
                <div className="flex  justify-center w-1/2 mr-20 ">
                  <div className="mt-10">
                    <div className="text-xl font-semibold pb-2 font-poppins">
                      <span className="text-primaryOrange">Trusted {"  "}</span>
                      <span className="">By Industry Leaders</span>
                    </div>
                    <div className="text-sm font-poppins font-medium">
                      "The DevAngel is started for supporting students / young
                      Professionals to build their products, learn technology in
                      all domains be it web, apps, devOps, product management,
                      indie Hacking etc."
                    </div>
                    <div className="mt-10 flex justify-center items-center ">
                  <button className="mb-10 flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 px-3 rounded">
              <span className="ml-auto">Start Hiring</span>
              <span className="text-xl font-thin">&gt;</span>
            </button>
                </div>
                  </div>
                  <img
                    src="/assets/images/undraw_powerful_re_frhr 1.png"
                    alt="Hire Card Iamge"
                    className="w-40 h-40"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whydevangellearner;
