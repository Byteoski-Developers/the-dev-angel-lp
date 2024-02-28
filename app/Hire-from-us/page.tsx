import HireEnds from "@/components/HireEnds";
import PlacementHighlights from "@/components/Placementhighlights";
import RightPosition from "@/components/RightPosition";
import Whydevangel from "@/components/Whydevangel";
import Whydevangellearner from "@/components/Whydevangellearner";
import CircularRating from "@/components/circularRating";

export default function HirefromUs() {
  return (
    <div className="w-screen bg-white-500">
      {/* <div className="border-t-2 border-primaryOrange w-full ml-0 mr-0 px-0 py-0 lg:px-0 lg:py-0 "></div> */}
      <div className="text-center ">
        <h2 className="mt-10 mb-4 text-4xl font-black text-black dark:text-white">
          Hire Tech Talent That Delivers
        </h2>
      </div>
      <div className="text-center ">
        <h2 className=" mb-4 text-4xl font-black text-black dark:text-white">
          <span className="text-primaryOrange"> Quick.Simple.</span>
        </h2>
      </div>

      <div className=" container bg-white-500 max-w-md mx-auto flex items-center justify-between">
        <div className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h4 className="text-center  mb-4">Share Your Hiring Requirements</h4>
          <form className="w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Work Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <input
                type="submit"
                id="submit"
                name="submit"
                required
                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-orange-500"
              />
            </div>
            <p className="text-center">Have Queries?</p>
            <p className="text-center">
              Dial us at <span className="text-primaryOrange">88888888888</span>
            </p>
          </form>
        </div>
      </div>

      <div className="mt-10">
        <Whydevangellearner />
      </div>

      <div className="mt-10">
            <HireEnds/>
      </div>

      <div className="mt-4">
        <PlacementHighlights/>
      </div>

      <div className="mt-16">
        <RightPosition/>
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
    </div>
  );
}
