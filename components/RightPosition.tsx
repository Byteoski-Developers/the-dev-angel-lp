import React from "react";
import "tailwindcss/tailwind.css";
import FirstRowSkills from "./FirstRowSkills";
import SecondRowSkills from "./SecondRowSkills";
import ThirdRowSkills from "./ThirdRowSkills";
import { useState } from "react";
export default function RightPosition() {
  const [hoverButton, setHoverButton] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full ">
        <p className="flex place-content-center font-bold font-poppins text-xl">
          <span>
            {"<"} Right candidates for The Right Position {">"}
          </span>
        </p>
      </div>
      <div className=" flex justify-center items-center  ">
        <div className="  mt-4 border-2  border-orange-500 flex items-center p-2 rounded-md">
          {/* <button
            className={`flex justify-center items-center ${
              hoverButton ? "bg-orange-600 text-white" : "text-black"
            } font-medium rounded mr-2 py-1 px-2`}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
          >
            {" "}
            Data Analytics
          </button>
          <button
            className={`flex justify-center items-center ${
              hoverButton ? "text-black" : "hover:bg-orange-600 hover:text-white"
            } font-medium rounded mr-2 py-1 px-2`}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
          >
            {" "}
            Web Development
          </button> */}

          <button className="flex justify-center items-center text-black bg-orange-500 hover:bg-orange-600 hover:text-white font-medium rounded mr-2 py-1 px-2">
            {" "}
            Web Development
          </button>
          <button className="flex justify-center items-center hover:bg-orange-600 hover:text-white font-medium rounded mr-2 py-1 px-2">
            {" "}
            Data Analytics
          </button>
        </div>
      </div>
      <FirstRowSkills />

      <SecondRowSkills />

      <ThirdRowSkills />

      <div className="mt-6 flex justify-center items-center ">
        <button className="flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 px-3 rounded">
          <span className="mr-2">Start Hiring</span>
          <span className="text-xl font-thin">&gt;</span>
        </button>
      </div>
    </div>
  );
}
