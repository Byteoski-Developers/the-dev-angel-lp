import React from "react";
import Image from "next/image";
import CourseImg from "../../public/assets/images/Course.svg";

const Course = () => {
  return (
    <div className="w-full text-center px-52 font-poppins">
      <h2 className="text-[32px] leading-[48px] py-4 font-bold ">
        {"<"} Our <span className="text-orangered">Course !</span> {">"}
      </h2>
      <h3 className="text-2xl leading-[36px] font-medium text-[#4D4D4D]">
        Your One Stop Destination for Success
      </h3>
      <div className="grid grid-cols-12 gap-x-1 py-5">
        <div className="text-left col-span-7 py-14">
          <h4 className="text-2xl leading-[36px] font-semibold py-2">
            Explore <span className="text-orangered">Our Course :</span>
          </h4>
          <p className="py-5 font-normal text-[16px] leading-6">
            Unlock your potential with our diverse range of courses designed to
            meet your learning needs. Whether you're a beginner or an expert
            looking to enhance your skills, our carefully curated selection
            offers something for everyone. Dive into a world of knowledge and
            opportunity with:
          </p>
          <button className="bg-orangered px-4 gap-[10px] py-2 w-[308px] h-[39px] rounded-lg">
            <div className=" text-white font-inter text-[16px] leading-[19.36px]">
              Explore Our Courses {"-->"}
            </div>
          </button>
        </div>
        <div className="col-span-5">
          <Image src={CourseImg} width={553} height={404} alt="courses" />
        </div>
      </div>
    </div>
  );
};

export default Course;
