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
        image:"/assets/image/globe.png",
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
                width={400}
                height={70}
                className="hidden sm:flex  max-w-[354px]"
              ></Image> </div>

                

              <HireCard key={index} {...props} /> 

              <div
                className={classNames(
                  "border-t border-t-1 border-t-black  w-96 h-32 ",
                  index % 2 == 0
                    ? "border-r border-r-1 border-r-black"
                    : "border-l border-l-1 border-l-black"
                )}
              ></div>
            </div>
          ))}
          <div className = "flex justify-center items-center ">
            <button className="flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 px-3 rounded">
                        <span className ="mr-2">Start Hiring</span>
                        <span className="text-xl font-thin">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whydevangellearner;
