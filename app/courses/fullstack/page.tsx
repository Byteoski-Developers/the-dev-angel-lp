import CourseMenu from "@/components/Courses/CourseMenu";
import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/common/Button";
import Image from "next/image";
import CreatorMenu from "@/components/Courses/CreatorMenu";
import CreatorCard from "@/components/Courses/CreatorCard";
import ContactCTA from "@/components/common/ContactCTA";
import CourseCurriculum from "@/components/Courses/CourseCurriculum";

const creators = [
  {
    name: "Anubhav Gupta",
    year: "20",
    img: "anubhav",
  },
  {
    name: "Gautam Singla",
    year: "20",
    img: "anubhav",
  },
  {
    name: "Tushar Gupta",
    year: "20",
    img: "anubhav",
  },
];

export default function FullStackCoursesPage() {
  return (
    <div className="border-3  view-container">
      {/* header menu */}
      <div className="flex flex-col gap-2">
        <p>Select Course*</p>
        <CourseMenu />
      </div>
      {/* hero sectiom */}
      <div className="grid md:grid-cols-2 grid-cols-1 md:mt-12 mt-6 gap-6">
        <div className="flex flex-col  gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-heading text-4xl font-heading leading-tight">
              <span className="text-primaryOrange block leading-tight">
                Full Stack
              </span>
              <span className="block leading-tight">Software Development</span>
              Training
            </h1>
            <p className="md:text-xl text-base w-full font-semibold opacity-75">
              The DevAngel is started for supporting students / young
              Professionals to build their products, learn technology in all
              domains be it web, apps, devOps, product management, indie Hacking
              etc.
            </p>
          </div>
          <div className="flex gap-6">
            <Button text="Download Curriculum" filled={false} />
            <Button text="Join Course" filled={true} />
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
      <SectionHeader title="Program Creators" subtitle="" />
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

      <CourseCurriculum />
      <ContactCTA />
    </div>
  );
}
