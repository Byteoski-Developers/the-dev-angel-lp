import React from "react";
import Card from "@/components/Card";
import clsx from "clsx";
import Image from "next/image";

const Whydevangel = () => {
  const cardProps = [
    {
      h1: "Learns Skills",
      h2: "That Matters",
      description:
      "The DevAngel empowers aspiring professionals with essential skills for today's tech landscape. From web development to product management, we cultivate expertise crucial for success in diverse domains."
    },
    {
      h1: "Break Out of ",
      h2: "Tutorial Hell",
      description:
     " At The DevAngel, we guide you to break out of tutorial hell and embark on practical learning journeys. Our hands-on approach equips you with the skills to confidently tackle real-world challenges in tech and beyond."
        },
    {
      h1: "Personalised",
      h2: "Mentorship",
      description:
      "The DevAngel offers personalized mentorship, providing tailored guidance and support to individuals seeking to navigate their career paths and excel in the ever-evolving tech field."
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
