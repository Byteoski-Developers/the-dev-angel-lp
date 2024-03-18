import React from "react";
import "tailwindcss/tailwind.css";

export default function hireCard() {
  return (
    <div className="flex w-full place-content-center">
      <div className="flex flex-col  w-full place-content-center ">
        <p className="flex place-content-center font-bold font-poppins text-2xl">
          <span>{"<"} Your Talent Hunt</span>

          <span className=" ml-2 text-primaryOrange"> Ends </span>
          <span className=" ml-2 flex place-content-center font-bold font-poppins">
            Here {">"}
          </span>
        </p>
        {/* features of devangel  Starting*/}
        <div className=" mt-4 bg-white-100 flex items-center justify-center gap-5 " >
          <div className=" w-72 bg-orange-100 p-1 rounded-lg text-orange-500 font-medium text-center">
            Hassle Free Hiring
          </div>
          <div className=" w-72 bg-orange-100 p-1 rounded-lg text-orange-500 font-medium text-center">
            Pre-Assessed Candidates
          </div>
          <div className="w-72 bg-orange-100 p-1 rounded-lg text-orange-500 font-medium text-center">
            Dedicated Relationship Manager
          </div>
        </div>
        {/* Ending */}

        {/* facilities provided by DevAngel 1st row Starting */}
        <div className="relative grid max-w-4xl mx-auto grid-cols-2 gap-3 px-6 py-6 sm:py-12 md:gap-6 md:grid-cols-3">
  <div className="rounded-md border-2 border-orange-500 p-4 text-center">
    <h3 className="font-bold text-orange-500">19000+</h3>
    <p>Learners</p>
  </div>
  <div className="rounded-md border-2 border-orange-500 p-4 text-center">
    <div className="font-bold text-orange-500">27+</div>
    <div className="font-bold">Hires</div>
  </div>
  <div className="rounded-md border-2 border-orange-500 p-4 text-center">
    <div className="font-bold text-orange-500">5+</div>
    <div className="font-bold">Domains</div>
  </div>

  <div className="rounded-md border-2 border-orange-500 p-4 text-center">
    <div className="font-bold text-orange-500">14+</div>
    <div className="font-bold">Cities</div>
  </div>
  <div className="rounded-md border-2 border-orange-500 p-4 text-center">
    <div className="font-bold text-orange-500">700+</div>
    <div className="font-bold">Companies</div>
  </div>
  <div className="rounded-md border-2 border-orange-500 p-4 text-center">
    <div className="font-bold text-orange-500">9+</div>
    <div className="font-bold">Industries</div>
  </div>
</div>

      </div>
    </div>
  );
}
