import React from "react";
import "tailwindcss/tailwind.css";

export default function PlacementHighlights() {
  return (
    <div className="flex w-full place-content-center">
      <div className="flex flex-col  w-full place-content-center ">
        <p className="flex place-content-center font-bold font-poppins text-3xl">
          <span>{"<"} Placement</span>

          <span className=" ml-2 text-primaryOrange">Highlights</span>
          <span className=" ml-2 flex place-content-center font-bold font-poppins">
            {">"}
          </span>
        </p>

        <div className=" mt-10 bg-white-100 flex justify-center gap-28">
          <div className="bg-orange-100 p-1 rounded-lg">
            <span className="text-orange-500 font-bold">$100k LPA</span>
            <p className=" font-medium">Learners</p>
          </div>
          <div className="bg-orange-100 p-1 rounded-lg ">
            <span className="text-orange-500 font-bold">$2000</span>
            <p className=" font-medium">Highest Stipend</p>
          </div>
          <div className="bg-orange-100 p-1 rounded-lg ">
            <span className="text-orange-500 font-bold">302%</span>
            <p className=" font-medium">Highest Hike</p>
          </div>
          <div className="bg-orange-100 p-1 rounded-lg ">
            <span className="text-orange-500 font-bold">68%</span>
            <p className=" font-medium">Average Hike</p>
          </div>
        </div>
      </div>
    </div>
  );
}
