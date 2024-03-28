import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/common/Button";
import Image from "next/image";
import CreatorMenu from "@/components/Courses/CreatorMenu";
import CreatorCard from "@/components/Courses/CreatorCard";
// import ContactCTA from "@/components/common/ContactCTA";
import CourseCurriculum from "@/components/Courses/CourseCurriculum";

const creators = [
  {
    name: "Anubhav Gupta",
    year: "3",
    img: "gautam",
  },
  {
    name: "Gautam Singla",
    year: "2",
    img: "gautam",
  },
  {
    name: "Nishant Chandel",
    year: "2",
    img: "nishant",
  },
];

export default function FullStackCourses() {
  return (
    <>
      {" "}
      {/* hero sectiom */}
      <div className="grid md:grid-cols-2 grid-cols-1 md:mt-12 mt-6 gap-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-5xl text-4xl font-bold leading-relaxed">
              <span className="text-primaryOrange block">Full Stack</span>
              <span className="my-3 block">Cohort Development</span>
              {/* <span className="my-3 block">Training Software</span> */}
              {/* <span>Development</span> */}
            </h1>
            <h2 className="md:text-3xl text-3xl font-semibold leading-relaxed">
              <span>Starting: </span>
              <span className="text-primaryOrange">
                4<sup>th</sup> June, 2024
              </span>
            </h2>
            <p className="text-base w-full  opacity-75">
              The DevAngel is started for supporting students / young
              Professionals to build their products, learn technology in all
              domains be it web, apps, devOps, product management, indie Hacking
              etc.
            </p>
            <h2 className="md:text-3xl text-3xl font-semibold leading-relaxed">
              <div className="mt-4 flex gap-3 font-bold ">
                <p className=" text-black md:text-2xl text-2xl font-semibold leading-relaxed">
                  Price:{" "}
                </p>
                <p className=" text-primaryOrange md:text-2xl text-2xl font-semibold leading-relaxed">
                  ₹4999
                </p>
                <p className="  line-through md:text-lg text-lg font-bold leading-relaxed">
                  ₹10,999
                </p>
                {/* <p className="  md:text-lg text-lg font-semibold leading-relaxed">
                  45%off
                </p> */}
              </div>
            </h2>
          </div>
          <div className="flex gap-6">
            {/* <Button text="Download Curriculum" filled={false} /> */}
            <Button text="Register Now" filled={true} />{" "}
            <div className="rounded-lg pr-4  md:px-4 py-2 md:py-3 text-sm sm:text-base font-semibold transition">
              Duration : 3 Months
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/fullstack.png"
            width={1000}
            height={1000}
            alt="fullstack"
          />
        </div>
      </div>
      {/* hero sectiom */}
      {/* program creators */}
      <SectionHeader title="PROGRAM CREATOR" subtitle="" />
      <CreatorMenu />
      <div className="flex md:flex-row flex-col md:gap-8 gap-6  md:mx-18 md:mt-16 mt-8 items-center justify-center">
        {creators.map((creator, index) => (
          <CreatorCard
            key={index}
            creatorName={creator.name}
            year={creator.year}
            img={creator.img}
          />
        ))}
      </div>
      {/* class curriculum> */}
      <CourseCurriculum />
      {/* <ContactCTA /> */}
    </>
  );
}
