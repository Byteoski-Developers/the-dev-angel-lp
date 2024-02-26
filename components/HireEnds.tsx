import React from "react";
import "tailwindcss/tailwind.css";

export default function hireCard() {
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
        <div className=" mt-10 bg-white-100 flex items-center justify-center gap-5 " >
          <div className=" w-72 bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
            Hassle Free Hiring
          </div>
          <div className=" w-72 bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
            Pre-Assessed Candidates
          </div>
          <div className="w-72 bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
            Dedicated Relationship Manager
          </div>
        </div>
        {/* Ending */}

        {/* facilities provided by DevAngel 1st row Starting */}
        <div className="mt-9 bg-white-100 flex items-center justify-center gap-5 text-xl">
          <div className="border-2  border-orange-500 flex-col items-center rounded-md ">
            <div className="text-orange-500 font-bold text-center">19000+</div>
            <div className=" font-bold  text-center">Learners</div>
          </div>
          <div className="border-2  border-orange-500 flex-col items-center rounded-md ">
            <div className="text-orange-500 font-bold text-center">27+</div>
            <div className=" font-bold">Hires</div>
          </div>
          <div className="border-2  border-orange-500 flex-col items-center rounded-md ">
            <div className="text-orange-500 font-bold text-center">5+</div>
            <div className=" font-bold">Domains</div>
          </div>
        </div>
        {/* 1st row ending  */}
        

        {/* 2nd row starting  */}

        <div className="mt-9 bg-white-100 flex items-center justify-center gap-5 text-xl">
        <div className="border-2  border-orange-500 flex-col items-center rounded-md ">
            <div className="text-orange-500 font-bold text-center">14+</div>
            <div className=" font-bold">Cities</div>
          </div>
          <div className="border-2  border-orange-500 flex-col items-center rounded-md ">
            <div className="text-orange-500 font-bold text-center">700+</div>
            <div className=" font-bold">Companies</div>
          </div>
          <div className="border-2  border-orange-500 flex-col items-center rounded-md ">
            <div className="text-orange-500 font-bold text-center">9+</div>
            <div className=" font-bold">Industries</div>
          </div>
        </div>

      </div>
    </div>
  );
}
