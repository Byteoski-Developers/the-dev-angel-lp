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
        "The DevAngel empowers students and young professionals to bring their ideas to life. Whether it's web development, app creation, DevOps, or product management, you'll access all the tools and resources for free, helping you grow without any financial barriers. Join a thriving community dedicated to supporting your journey.",
    },
    {
      h1: "Best",
      h2: "Team",
      description:
        "At DevAngel, you’ll collaborate with an exceptional team of professionals passionate about technology and innovation. Our experts span across web, apps, DevOps, and product management, providing you with the mentorship and insights you need to succeed in every domain. Learn from the best, and accelerate your growth with the support of our dedicated team.",
    },
    {
      h1: "24/7",
      h2: "Support",
      description:
        "Whenever you face a challenge, DevAngel is here to help—day or night. Our 24/7 support ensures that you're never alone in your journey. Whether you're coding at midnight or troubleshooting a project in the early hours, our team is always ready to assist you with technical advice, mentorship, and problem-solving guidance.",
    },
  ];
  return (
    <div className="flex w-full place-content-center mb-6">
      <div className="flex flex-col  w-full place-content-center ">
        <p className="flex place-content-center font-bold font-poppins text-xl">
          <span>{"<"} Why </span>
          <span className=" text-primaryOrange">Devangel? </span>
          <span>{">"}</span>
        </p>
        <p className="flex text-grey font-medium place-content-center font-poppins text-base ">
          Your One Stop Destination for Success
        </p>
        <div className="mt-10  justify-center mx-auto">
          {cardProps.map((props, index) => (
            <div
              key={index}
              className={clsx(
                "flex justify-center",
                "my-2",
                "w-full sm:max-w-5xl",
                index % 2 === 0
                  ? "flex-row md:mr-32"
                  : "flex-row-reverse md:ml-32 sm:mr-4",
              )}
            >
              <Card key={index} {...props} />
              {index % 2 != 0 ? (
                <Image
                  src={"/assets/images/bgphoto.png"}
                  alt="whydevangel"
                  width={400}
                  height={70}
                  className="hidden sm:flex me-32 max-w-[354px]"
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
