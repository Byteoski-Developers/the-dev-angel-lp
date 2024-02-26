import React from "react";
import "tailwindcss/tailwind.css";

export default function RightPosition() {
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
          <button className="flex justify-center items-center hover:bg-orange-600 text-black font-medium rounded mr-2 py-1 px-2">
            {" "}
            Web Development
          </button>
          <button className="flex justify-center items-center hover:bg-orange-600 text-black font-medium rounded mr-2 py-1 px-2">
            {" "}
            Data Analytics
          </button>
        </div>
      </div>
      <div className=" mt-10 bg-white-100 flex items-center justify-center gap-3">
        <div className="  bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Coding
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Java
        </div>
        <div className=" bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          C++
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Node Js
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Tailwind Css
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Github
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Mobile Development
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Full Stack Developer
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Software Engineer
        </div>
      </div>

      <div className=" mt-6 bg-white-100 flex items-center justify-center gap-3">
        <div className="  bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Coding
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Java
        </div>
        <div className=" bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          C++
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Node Js
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Tailwind Css
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Github
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Mobile Development
        </div>
      </div>

      <div className=" mt-6 bg-white-100 flex items-center justify-center gap-3">
        <div className="  bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Coding
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Java
        </div>
        <div className=" bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          C++
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Node Js
        </div>
        <div className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center">
          Tailwind Css
        </div>
        </div>
        <div className = "mt-6 flex justify-center items-center ">
            <button className="flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 px-3 rounded">
                        <span className ="mr-2">Start Hiring</span>
                        <span className="text-xl font-thin">&gt;</span>
            </button>
            </div>
    </div>
  );
}
