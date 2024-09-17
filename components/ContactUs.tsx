import { ChevronRight } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      {/* Contact Section: Simple */}

      <div className=" dark:bg-gray-800 dark:text-gray-100 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[rgba(255,193,7,0.12)] via-white to-[rgba(255,193,7,0.22)] ">
        <div className=" dark:bg-gray-800 dark:text-gray-100 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[rgba(255,193,7,0.12)] via-white to-[rgba(255,193,7,0.22)] ">
          <div className="container mx-auto space-y-16 px-4 py-16  lg:px-8 lg:py-16 xl:max-w-7xl">
            {/* Heading */}
            <div className="text-center ">
              <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                &lt; Contact Us &gt;
              </h2>
              <h3 className="mx-auto text-xl font-medium leading-relaxed text-[#B5B5B5] lg:w-2/3 dark:text-gray-300">
                Your One Stop Destination for Success
              </h3>
            </div>

            {/* END Heading */}

            <div className="border-t-2 border-primaryOrange ml-0 mr-0 px-0 py-0 lg:px-0 lg:py-0 "></div>

            {/* Contact Form */}
            <div className="mx-auto lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="firstname" className="font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Type here"
                      className="block w-full py-2 leading-6 placeholder-gray-500 dark:placeholder-gray-400 border-b-4 shadow-none outline-none  z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-transparent"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Type here"
                      className="block w-full py-2 leading-6 placeholder-gray-500 dark:placeholder-gray-400 border-b-4 shadow-none outline-none  z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="font-medium">
                    Why are you joining Us ?
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-2">
                  <label
                    htmlFor="hs-radio-on-right"
                    className="flex items-center space-x-3 p-3 w-full bg-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-transparent"
                  >
                    <input
                      type="radio"
                      name="hs-radio-on-right"
                      className="form-radio text-orange-500 h-5 w-5 border-2 border-orange-500 rounded-full focus:ring-orange-500"
                      id="hs-radio-on-right"
                    />
                    <span className="text-lg font-medium text-black dark:text-gray-400">
                      UI/UX
                    </span>
                  </label>
                  <label
                    htmlFor="hs-radio-on-right"
                    className="flex items-center space-x-3 p-3 w-full bg-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-transparent"
                  >
                    <input
                      type="radio"
                      name="hs-radio-on-right"
                      className="form-radio text-orange-500 h-5 w-5 border-2 border-orange-500 rounded-full focus:ring-orange-500"
                      id="hs-radio-on-right"
                    />
                    <span className="text-lg font-medium text-black dark:text-gray-400">
                      Data Base
                    </span>
                  </label>
                  <label
                    htmlFor="hs-radio-on-right"
                    className="flex items-center space-x-3 p-3 w-full bg-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-transparent"
                  >
                    <input
                      type="radio"
                      name="hs-radio-on-right"
                      className="form-radio text-orange-500 h-5 w-5 border-2 border-orange-500 rounded-full focus:ring-orange-500"
                      id="hs-radio-on-right"
                    />
                    <span className="text-lg font-medium text-black dark:text-gray-400">
                      Mobile App Design
                    </span>
                  </label>
                  <label
                    htmlFor="hs-radio-on-right"
                    className="flex items-center space-x-3 p-3 w-full bg-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-transparent"
                  >
                    <input
                      type="radio"
                      name="hs-radio-on-right"
                      className="form-radio text-orange-500 h-5 w-5 border-2 border-orange-500 rounded-full focus:ring-orange-500"
                      id="hs-radio-on-right"
                    />
                    <span className="text-lg font-medium text-black dark:text-gray-400">
                    New project
                    </span>
                  </label>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={1}
                    placeholder="Type here"
                    className="block w-full py-3 placeholder-gray-500 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                    defaultValue={""}
                  />
                </div>
                <div className="flex flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex px-16 items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#ff5622aa] hover:bg-[#ff562294] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <span>Submit </span>
                    <ChevronRight />
                  </button>
                </div>
              </form>
            </div>
            {/* END Contact Form */}
          </div>
        </div>
      </div>

      {/* END Contact Section: Simple */}
    </>
  );
}
