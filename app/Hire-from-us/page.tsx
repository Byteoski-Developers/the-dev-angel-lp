import CircularRating from "@/components/circularRating";

export default function HirefromUs() {
  return (
    <>
      <div className="border-t-2 border-primaryOrange w-full ml-0 mr-0 px-0 py-0 lg:px-0 lg:py-0 "></div>
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100 ">
        <div className="container mx-auto space-y-16 px-4 py-16  lg:px-8 lg:py-16 xl:max-w-7xl  ">
          {/* Heading */}
          <div className="text-center ">
            <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
              &lt;Our
              <span className="text-primaryOrange"> Client Reviews </span> &gt;
            </h2>
            <h3 className="mx-auto text-xl font-medium leading-relaxed text-[#B5B5B5] lg:w-2/3 dark:text-gray-300">
              Your One Stop Destination for Success
            </h3>
          </div>

          {/* Heading End */}

          <div className="grid grid-cols-3 gap-3 justify-center">
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
          </div>
        </div>
      </div>
    </>
  );
}
