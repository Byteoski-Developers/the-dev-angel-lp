import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      {/* Contact Section: Simple */}
      {/* <div className="relative">
        <img className="h-full w-full" src="/assets/images/Contact_us.png" alt="Phone Image" />
        <div className=" absolute ">
          <h1 className="font-extrabold size-2/4">Contact Us </h1>
          <p>
            Get in Touch with us leet us help you with any question or inquiries
            you may have
          </p>
        </div>
      </div> */}

      <div className="h-full w-full relative">
        {/* <img src="https://placekitten.com/600" alt=""/> */}
        <img
          className="h-full w-full"
          src="/assets/images/Contact_us.png"
          alt="Phone Image"
        />
        <div className="absolute bottom-0 px-4 py-3 w-[30%] ml-10 mb-36 sm:invisible md:invisible ">
          <h1 className="text-white font-semibold text-4xl sm:text-sm "> Contact Us </h1>
          <p className="text-gray-200">
            Get in Touch with us leet us help you with any questions or
            inquiries you may have
          </p>
        </div>
      </div>

      {/* <div className=" dark:bg-gray-800 dark:text-gray-100 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[rgba(255,193,7,0.12)] via-white to-[rgba(255,193,7,0.22)] ">
        <div className=" dark:bg-gray-800 dark:text-gray-100 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[rgba(255,193,7,0.12)] via-white to-[rgba(255,193,7,0.22)] "> */}
      <div className="container mx-auto space-y-16 px-4 py-16  lg:px-8 lg:py-16 xl:max-w-7xl">
        {/* Heading */}
        <div className="text-center ">
          {/* <div className="mb-1 text-sm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-500">
              We reply in 24hrs
            </div> */}
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
                  // className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-rose-500 shadow-none"
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
                  // className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-rose-500"
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
                //   className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-rose-500"
                className="block w-full  px-5 py-3 leading-6 placeholder-gray-500 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                defaultValue={""}
              />
            </div>
            <div className="flex flex-row-reverse">
              <button
                type="submit"
                className="inline-flex w-9/11 items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-4 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#ff5622aa] hover:bg-[#ff562294] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
              >
                <svg
                  className="hi-mini hi-paper-airplane inline-block size-5 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
        {/* END Contact Form */}
      </div>
      {/* </div> */}
      {/* // </div> */}
      <Footer />

      {/* END Contact Section: Simple */}
    </>
  );
}

/* <div className="grid grid-cols-2 gap-4">
<div>
  <label>
    <input
      type="radio"
      id="radio"
      name="message"
      //   className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-rose-500"
      className="block w-full  px-5 py-3 leading-6 placeholder-gray-500 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none"
      defaultValue={""}
    />
    UI/UX
  </label>
</div>

<div>
  <label>
    <input
      type="radio"
      id="radio"
      name="message"
      //   className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-rose-500"
      className="block w-full  px-5 py-3 leading-6 placeholder-gray-500 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none"
      defaultValue={""}
    />
    Data Base
  </label>
</div>

<div>
  <label>
    <input
      type="radio"
      id="radio"
      name="message"
      //   className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-rose-500"
      className="block w-full  px-5 py-3 leading-6 placeholder-gray-500 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none"
      defaultValue={""}
    />
    Mobile App Design
  </label>
</div>

<div>
  <label>
    New Project
    <input
      type="radio"
      id="radio"
      name="message"
      //   className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-rose-500"
      className="block w-full  px-5 py-3 leading-6 placeholder-gray-500 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none"
      defaultValue={""}
    />
    New Project
  </label>
</div>
</div>
</div> */
