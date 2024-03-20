import React from "react";
import "tailwindcss/tailwind.css";

interface MyProps {
  h1: string;
  h2: string;
  description: string;
}

const Card: React.FC<MyProps> = (props) => {
  return (
    <div className="  p-px lg:w-1/3 md:w-1/3  xl:w-1/3 rounded-md shadow-md md:shadow-md lg:shadow-lg sm:shadow-md shadow-vermilion-500/10">
      <div className="flex flex-col bg-white rounded-md">
        <div className="px-4 sm:px-6 lg:px-8 pt-6">
          <p className="text-xl font-semibold pb-2 font-poppins">
            <span>{props.h1}</span>&nbsp;
            <span className="text-primaryOrange">{props.h2}</span>
          </p>
          <p className="text-sm font-poppins font-medium">
            {props.description}
          </p>
          <div className="pl-4 sm:pl-6 lg:pl-8 mt-4">
            <span className="right-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
