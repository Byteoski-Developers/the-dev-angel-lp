import { ArrowRight } from "lucide-react";
// Contact Us of Our Hiring Partners Page


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
                &lt;Contact<span className="text-primaryOrange"> Us </span> &gt;
              </h2>
              <h3 className="mx-auto text-xl font-medium leading-relaxed text-[#B5B5B5] lg:w-2/3 dark:text-gray-300">
                Your One Stop Destination for Success
              </h3>
            </div>

            {/* END Heading */}

            <div className="border-t-2 border-primaryOrange w-full ml-0 mr-0 px-0 py-0 lg:px-0 lg:py-0 "></div>

            {/* Contact Form */}
            <div className="mx-auto lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="firstname" className="font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="block w-full  px-5 py-3 leading-6 placeholder-gray-500 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none  z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full  px-5 py-3 leading-6 placeholder-gray-500 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none  z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
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
                    className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <span className="text-sm text-black dark:text-gray-400">
                      UI/UX
                    </span>
                    <input
                      type="radio"
                      name="hs-radio-on-right"
                      className="shrink-0 ms-auto mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                      id="hs-radio-on-right"
                    />
                  </label>

                  <label
                    htmlFor="hs-radio-on-right"
                    className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <span className="text-sm text-black dark:text-gray-400">
                      Data Base
                    </span>
                    <input
                      type="radio"
                      name="hs-radio-on-right"
                      className="shrink-0 ms-auto mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                      id="hs-radio-on-right"
                    />
                  </label>

                  <label
                    htmlFor="hs-radio-on-right"
                    className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <span className="text-sm text-black dark:text-gray-400">
                      Mobile App Design
                    </span>
                    <input
                      type="radio"
                      name="hs-radio-on-right"
                      className="shrink-0 ms-auto mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                      id="hs-radio-on-right"
                    />
                  </label>

                  <label
                    htmlFor="hs-radio-on-right"
                    className="flex p-3  w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <span className="text-sm text-black dark:text-gray-400">
                      New Project
                    </span>
                    <input
                      type="radio"
                      name="hs-radio-on-right"
                      className="shrink-0 ms-auto mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                      id="hs-radior-on-right"
                    />
                  </label>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    className="block w-full  px-5 py-3 leading-6 placeholder-gray-500 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                    defaultValue={""}
                  />
                </div>
                <div className="flex flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex w-9/11 items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-4 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#ff5622aa] hover:bg-[#ff562294] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <ArrowRight />

                    <span>Submit</span>
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
