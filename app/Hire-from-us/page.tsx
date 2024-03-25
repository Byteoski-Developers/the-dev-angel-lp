"use client";
import HireEnds from "@/components/HireEnds";
import PlacementHighlights from "@/components/Placementhighlights";
import RightPosition from "@/components/RightPosition";
import OurClientReviews from "@/components/OurClientReviews";
import Footer from "@/components/Footer";
import ContactUs from "@/app/hire-from-us/ContactUs";
import HiringRequirements from "./HiringRequirements";
import Whydevangellearner from "@/components/Whydevangellearner";
import HiringPartners from "@/app/hire-from-us/HiringPartners";
export default function HirefromUs() {
  return (
    <div className="w-screen bg-white-500 overflow-x-hidden  overflow-hidden">
      {/* <div className="border-t-2 border-primaryOrange w-full ml-0 mr-0 px-0 py-0 lg:px-0 lg:py-0 "></div> */}
      <div className="text-center ">
        <h2
          className="mt-
        j10 mb-4 text-4xl font-black text-black dark:text-white"
        >
          Hire Tech Talent That Delivers
        </h2>
      </div>
      <div className="text-center ">
        <h2 className=" mb-4 text-4xl font-black text-black dark:text-white">
          <span className="text-primaryOrange"> Quick.Simple.</span>
        </h2>
      </div>
      <HiringRequirements />

      <div className="mt-10">
        <Whydevangellearner />
      </div>

      <div className="mt-10">
        <HireEnds />
      </div>

      <div className="mt-4">
        <PlacementHighlights />
      </div>

      <div className="mt-16">
        <RightPosition />
      </div>

      <div className="bg-white dark:bg-gray-800 dark:text-gray-100 ">
        <div className="container mx-auto space-y-16 px-4 py-16  lg:px-8 lg:py-16 xl:max-w-7xl  ">
          {/* Heading */}
          <div className="text-center ">
            <h2 className="mb-4 text-2xl font-black text-black dark:text-white">
              &lt;Companies Trust
              <span className="text-primaryOrange"> DevAngel </span>Learners
              &gt;
            </h2>
            <h3 className="mx-auto text-xl font-medium leading-relaxed text-[#B5B5B5] lg:w-2/3 dark:text-gray-300"></h3>
          </div>

          {/* Heading End */}

          {/* <div className="grid grid-cols-3 gap-3 justify-center">
            <div className="bg-white border rounded-lg p-6">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="\assets\images\AlexReview.png"
                alt="Alex"
              />
              <h2 className="text-xl font-bold text-center mt-4">Alex</h2>
              <p className="text-center text-gray-500">
                Assistant Backend Developer
              </p>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <CircularRating rating={5} />
            </div>
          </div> */}
        </div>
      </div>
      <HiringPartners />
      <OurClientReviews />
      <ContactUs />
      <Footer />
    </div>
  );
}
