export default function OurClientReviews() {
  return (
    <>
      {/* Our Teams Section: Simple */}
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
              <div className="flex justify-center mt-4">
                <svg
                  className="w-4 h-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16A8 8 0 0 0 10 2zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-500 mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16A8 8 0 0 0 10 2zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-500 mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16A8 8 0 0 0 10 2zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-gray-400 mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16A8 8 0 0 0 10 2zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16A8 8 0 0 0 10 2zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
              </div>
            </div>
          </div> */}

          {/* <div className=" grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3"> */}
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 sm:grid-cols-1 justify-center ">
            {/* 1st Component */}
            <div className="w-[316px] h-[298px] relative z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
              <div className="w-[316px] h-[254px] px-[25px] py-10 left-0 top-[44px] absolute bg-yellow-400 bg-opacity-10 rounded-xl shadow flex-col justify-start items-center gap-[18px] inline-flex">
                <div className="flex-col justify-start items-center gap-3 flex">
                  <div className="flex-col justify-start items-center gap-0.5 flex">
                    <div className="text-black text-xl font-semibold font-['Poppins'] leading-normal">
                      Sophia White
                    </div>
                    <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                      Asistant Backend Developer
                    </div>
                  </div>
                  <div className="w-[266px] text-center text-black text-xs font-medium font-['Poppins'] leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </div>
                  {/* Star rating start */}
                  <div className="flex gap-[1px] text-yellow500">
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/GreyStar.svg" alt ="cvf" />
                  </div>
                  {/* Star rating end  */}
                </div>
                <div className="justify-start items-start gap-2 inline-flex"></div>
              </div>
              <img
                className="w-[120px] h-[120px] justify-center absolute rounded-full border-8 border-white mb-0 ml-[100px] bottom-[220px] "
                src="\assets\images\sophiaWhitereview.png"
                alt="Reviewer's Image"
              />
            </div>

            {/* 2nd Component */}
            <div className="w-[316px] h-[298px] relative z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
              <div className="w-[316px] h-[254px] px-[25px] py-10 left-0 top-[44px] absolute bg-yellow-400 bg-opacity-10 rounded-xl shadow flex-col justify-start items-center gap-[18px] inline-flex">
                <div className="flex-col justify-start items-center gap-3 flex">
                  <div className="flex-col justify-start items-center gap-0.5 flex">
                    <div className="text-black text-xl font-semibold font-['Poppins'] leading-normal">
                      Alex
                    </div>
                    <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                      Asistant Backend Developer
                    </div>
                  </div>
                  <div className="w-[266px] text-center text-black text-xs font-medium font-['Poppins'] leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </div>
                  {/* Star rating start */}
                  <div className="flex gap-[1px] text-yellow500">
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/GreyStar.svg" alt ="cvf" />
                  </div>
                  {/* Star rating end  */}
                </div>
                <div className="justify-start items-start gap-2 inline-flex"></div>
              </div>
              <img
                // className="w-16 h-16 left-[126px] top-0 absolute rounded-full border-8 border-white"
                className="w-[120px] h-[120px] justify-center absolute rounded-full border-8 border-white mb-0 ml-[100px] bottom-[220px] "
                src="\assets\images\AlexReview.png"
                alt="Reviewer's Page"
              />
            </div>

            {/* 3rd Component  */}
            <div className="w-[316px] h-[298px] relative z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
              <div className="w-[316px] h-[254px] px-[25px] py-10 left-0 top-[44px] absolute bg-yellow-400 bg-opacity-10 rounded-xl shadow flex-col justify-start items-center gap-[18px] inline-flex">
                <div className="flex-col justify-start items-center gap-3 flex">
                  <div className="flex-col justify-start items-center gap-0.5 flex">
                    <div className="text-black text-xl font-semibold font-['Poppins'] leading-normal">
                      Zakar{" "}
                    </div>
                    <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                      Asistant Backend Developer
                    </div>
                  </div>
                  <div className="w-[266px] text-center text-black text-xs font-medium font-['Poppins'] leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </div>
                  {/* Star rating start */}
                  <div className="flex gap-[1px] text-yellow500">
                    <img src = {"/YellowStar.svg"} alt ="cvf" />
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/YellowStar.svg" alt ="cvf" />
                    <img src = "/GreyStar.svg" alt ="cvf" />
                  </div>
                  {/* Star rating end  */}
                </div>
                <div className="justify-start items-start gap-2 inline-flex"></div>
              </div>
              <img
                // className="w-16 h-16 left-[126px] top-0 absolute rounded-full border-8 border-white"
                className="w-[120px] h-[120px] justify-center absolute rounded-full border-8 border-white mb-0 ml-[100px] bottom-[220px] "
                src="\assets\images\zakarreview.png"
                alt="Reviewer's Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
