import React from "react";
import Card from "@/components/Card";
import clsx from "clsx";
import Image from "next/image";

const Whydevangel = () => {
  const cardProps = [
    {
      h1: "It's",
      h2: "Free",
      description:
        "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
    },
    {
      h1: "Best",
      h2: "Team",
      description:
        "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
    },
    {
      h1: "24/7",
      h2: "Support",
      description:
        "The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.",
    },
  ];
  return (
    <div className="flex w-full place-content-center">
      <div className="flex flex-col  w-full place-content-center ">
        <p className="flex place-content-center font-bold font-poppins text-xl">
          <span>{"<"} Why </span>
          <span className=" text-primaryOrange">Devangel? </span>
          <span>{">"}</span>
        </p>
        <p className="flex text-grey font-medium place-content-center font-poppins text-base ">
          Your One Stop Destination for Success
        </p>
        <div className="mt-10  justify-center ">
          {cardProps.map((props, index) => (
            <div
              key={index}
              className={clsx(
                "flex justify-center",
                "my-2",
                index % 2 === 0
                  ? "flex-row md:mr-32"
                  : "flex-row-reverse md:ml-32 sm:mr-4",
              )}
            >
              <Card key={index} {...props} />
              {index % 2 != 0 ? (
                <Image
                  src={"/assets/images/photo.png"}
                  alt="whydevangel"
                  width={400}
                  height={70}
                  className="hidden sm:flex  max-w-[354px]"
                ></Image>
              ) : index % 4 === 0 ? (
                <div className="hidden flex-col pl-5 sm:flex">
                  <div className="flex-1"></div>
                  <img src={"/Frame 1.svg"} alt="My SVG" />
                </div>
              ) : (
                <div className="hidden pl-5 sm:flex items-start">
                  <img src={"/Frame 2.svg"} alt="My SVG" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whydevangel;
