import React from "react";
import "tailwindcss/tailwind.css";

export default function PlacementHighlights() {
  return (
    <div className="flex w-screen place-content-center">
      <div className="flex flex-col  w-full place-content-center ">
        <p className="flex place-content-center font-bold font-poppins text-3xl">
          <span>{"<"} Placement</span>

          <span className=" ml-2 text-primaryOrange">Highlights</span>
          <span className=" ml-2 flex place-content-center font-bold font-poppins">
            {">"}
          </span>
        </p>

        <div className=" mt-10 bg-white-100 flex justify-center gap-12">
          <div className="bg-orange-50 p-1 flex flex-col item-center rounded-lg">
            <span className="text-orange-500 font-bold text-center">$100k LPA</span>
            <p className=" font-medium text-center">Highest Package</p>
          </div>
          <div className="bg-orange-50 p-1 flex flex-col rounded-lg item-center ">
            <span className="text-orange-500 font-bold text-center">$2000</span>
            <p className=" font-medium text-center">Highest Stipend</p>
          </div>
          <div className="bg-orange-50 p-1 flex flex-col rounded-lg item-center">
            <span className="text-orange-500 font-bold text-center">302%</span>
            <p className=" font-medium">Highest Hike</p>
          </div>
          <div className="bg-orange-50 p-1 flex flex-col rounded-lg item-center">
            <span className="text-orange-500 font-bold text-center">68%</span>
            <p className=" font-medium">Average Hike</p>
          </div>
        </div>
      </div>
    </div>
  );
}
