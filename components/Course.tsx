import React from "react";
import Image from "next/image";

const Course = () => {
  return (
    <div className="w-full text-center font-poppins px-10 md:px-5 lg:px-16 xl:px-40">
      <h2 className="text-3xl py-2 lg:py-4 font-bold ">
        {"<"} Our <span className="text-orangered">Course !</span> {">"}
      </h2>
      <h3 className="text-base md:text-xl leading-9 font-medium text-gray-600">
        Your One Stop Destination for Success
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:py-5">
        <div className="text-center md:text-left md:col-span-1 md:py-7 lg:py-14">
          <h4 className="text-xl md:text-2xl leading-9 font-semibold py-2">
            Explore <span className="text-orangered">Our Course :</span>
          </h4>
          <p className="py-3 lg:py-5 font-normal text-base leading-6">
            Unlock your potential with our diverse range of courses designed to
            meet your learning needs. Whether you&apos;re a beginner or an
            expert looking to enhance your skills, our carefully curated
            selection offers something for everyone. Dive into a world of
            knowledge and opportunity with:
          </p>
          <button className="bg-orangered px-4 gap-2.5 py-2 w-80 h-10 rounded-lg">
            <div className=" text-white font-inter text-base leading-5">
              Explore Our Courses {"-->"}
            </div>
          </button>
        </div>
        <div className="md:col-span-1 text-center ">
          <Image
            src={"/assets/images/Course.svg"}
            width={553}
            height={404}
            alt="courses"
            className="inline"
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
