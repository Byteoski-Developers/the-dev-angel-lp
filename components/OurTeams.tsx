export default function OurTeams() {
  return (
    <>
      {/* Our Teams Section: Simple */}

      <div className="">
        {/* Member Card Start */}
        <div className="border-t-2 border-primaryOrange w-full ml-0 mr-0 px-0 py-0 lg:px-0 lg:py-0 overflow-hidden  "></div>
        {/* <div className="bg-white  dark:bg-gray-800 dark:text-gray-100 bg-gradient-to-t from-[rgba(255,193,7,0.32)] via-slate-100 via-slate-50 to-white"> */}
        <div className="bg-white  dark:bg-gray-800 dark:text-gray-100 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[rgba(255,193,7,0.12)] via-white  to-white grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-1 ">
          <div className="container mx-auto space-y-16 lg:ml-32 py-16  lg:px-8 lg:py-16 xl:max-w-7xl  col-span-4">
            {/* Heading */}
            <div className="text-center ">
              <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                &lt;Our<span className="text-primaryOrange"> Team ! </span> &gt;
              </h2>
              <h3 className="mx-auto text-xl font-medium leading-relaxed text-[#B5B5B5] lg:w-2/3 dark:text-gray-300">
                Your One Stop Destination for Success
              </h3>
            </div>

            {/* Heading End */}

            {/* Card Component  */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2` gap-2 sm:grid-cols-1 items-center">
              {/* Photo Component  */}

              <img
                className="w-[100vw] sm:justify-center items-center"
                src="\assets\images\instructor.png"
                alt=""
              />

              {/* Photo Component  */}

              {/* Description */}
              <div className="container mx-auto space-y-16 px-4 py-16  lg:px-8 lg:py-4 xl:max-w-7xl font-poppins">
                {/* <div> */}
                <div>
                  <h2 className="text-black font-extrabold text-4xl mb-10">
                    Anubhav Gupta
                  </h2>
                  <div className="grid lg:grid-cols-4 xl:grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-0 mb-8">
                    <span className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow text-center font-semibold">
                      Javascript
                    </span>
                    <span className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow text-center font-semibold">
                      GraphQl
                    </span>
                    <span className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow text-center font-semibold">
                      Python
                    </span>
                    <span className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow text-center font-semibold">
                      Node Js
                    </span>
                    <span className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow text-center font-semibold">
                      Tailwind
                    </span>
                    <span className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow text-center font-semibold">
                      Next Js
                    </span>
                  </div>
                  <h3 className="text-black font-bold text-2xl mb-6">
                    Experience: 3 Years
                  </h3>

                  <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-0 mb-6">
                    <span className="bg-[#ffc107b8]/[0.13] text-[#FFC107] b-[#FFC107] py-2 px-4 font-bold rounded-lg shadow  text-center">
                      Work:
                    </span>
                  </div>
                  <div className="grid lg:grid-cols-1 w-auto gap-4 sm:grid-cols-2 md:grid-cols-3 mt-0 mb-6">
                    <p className="font-bold">
                      Software Engineer @ Writesonic, Open Source Contributor{" "}
                    </p>
                    <p className="font-bold">
                      Talks about Tech, Indie Hacking, Life and Poetry.
                    </p>
                    <p className="font-bold">Student Mentor and developer.</p>
                  </div>

                  <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-0 mb-6">
                    <span className="bg-[#ffc107b8]/[0.13] text-[#FFC107] b-[#FFC107] py-2 px-4 font-bold rounded-lg shadow text-center ">
                      About:
                    </span>
                  </div>
                  <p className="font-bold mb-8">
                    Anubhav, a Writesonic software engineer, is passionate about
                    open source and coding exploration. He contributes to
                    projects, mentors students, and shares insights through tech
                    talks, embodying the collaborative spirit of the open-source
                    community.
                  </p>

                  {/* <div className="grid lg:grid-cols-4  sm:grid-rows-1 md:grid-cols-3 gap-1 mt-0 "> */}
                  <div className="  mt-8 flex justify-start gap-6 sm:mt-0 sm:gap-[100px] sm:justify-center">
                    <img src="./Twitter.svg" alt="twitter logo" />
                    <img src="./Instagram.svg" alt="insta logo" />
                    <img src="./Github.svg" alt="Github logo" />
                    <img src="./LinkedIn.svg" alt="Linked Logo" />

                    {/* <div className=" text-sm mt-6 flex-auto">

                    </div>
                    <div className=" text-sm mt-6 flex-auto ">

                    </div>
                    <div className=" text-sm mt-6 flex-auto ">

                    </div>
                    <div className=" text-sm mt-6 flex-auto pr-0 ">

                    </div> */}
                  </div>
                </div>
              </div>
              {/* Description */}
            </div>
            {/* Card Component  */}
          </div>
          {/* Member Card End */}
          {/* Arrow Div */}
          <div className="bg-[rgba(255,87,34,0.25)] h-full md:w-[40%] sm:w-full flex flex-inline justify-center items-center sm:justify-center sm:items-center lg:ml-32 md:ml-5 sm:ml-5">
            <button className="flex flex-inline justify-center items-center ">
              <img src="./Redarrow.svg" alt="redarrow logo" />
            </button>
          </div>
          {/* Arrow Div End  */}
        </div>
      </div>
    </>
  );
}
