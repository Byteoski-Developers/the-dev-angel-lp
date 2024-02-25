import React from "react";
import "tailwindcss/tailwind.css";

export default function HireCard() {
  return (
    <div className="flex w-full place-content-center">
      <div className="flex flex-col  w-full place-content-center ">
        <p className="flex place-content-center font-bold font-poppins text-3xl">
          <span>{"<"} Your Talent Hunt</span>

          <span className=" ml-2 text-primaryOrange"> Ends </span>
          <span className=" ml-2 flex place-content-center font-bold font-poppins">
            Here {">"}
          </span>
        </p>
        {/* features of devangel  Starting*/}
        <div className=" mt-10 bg-white-100 flex justify-evenly">
          <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin ">
            Hassle Free Hiring
          </div>
          <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin ">
            Pre-Assessed Candidates
          </div>
          <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin">
            Dedicated Relationship Manager
          </div>
        </div>
        {/* Ending */}

        {/* facilities provided by DevAngel 1st row Starting */}
        <div className="mt-10 bg-white-100 flex justify-evenly text-xl">
          <div className="border-orange-400">
            <span className="text-orange-500 font-bold">19000+</span>
            <p className=" font-bold">Learners</p>
          </div>
          <div>
            <span className="text-orange-500 font-bold">27+</span>
            <p className=" font-bold">Hires</p>
          </div>
          <div>
            <span className="text-orange-500 font-bold">5+</span>
            <p className=" font-bold">Domains</p>
          </div>
        </div>
        {/* 1st row ending  */}
        

        {/* 2nd row starting  */}

        <div className="mt-10 bg-white-100 flex justify-evenly text-xl">
          <div className="">
            <span className="text-orange-500 font-bold">14+</span>
            <p className=" font-bold">Cities</p>
          </div>
          <div>
            <span className="text-orange-500 font-bold">700+</span>
            <p className=" font-bold">Companies</p>
          </div>
          <div>
            <span className="text-orange-500 font-bold">9+</span>
            <p className=" font-bold">Industries</p>
          </div>
        </div>

      </div>
    </div>
  );
}
