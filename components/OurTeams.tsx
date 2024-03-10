export default function OurTeams() {
  return (
    <>
      {/* Our Teams Section: Simple */}

      <div className="">
        {/* Member Card Start */}
        <div className="border-t-2 border-primaryOrange w-full ml-0 mr-0 px-0 py-0 lg:px-0 lg:py-0 "></div>
        {/* <div className="bg-white  dark:bg-gray-800 dark:text-gray-100 bg-gradient-to-t from-[rgba(255,193,7,0.32)] via-slate-100 via-slate-50 to-white"> */}
        <div className="bg-white  dark:bg-gray-800 dark:text-gray-100 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[rgba(255,193,7,0.12)] via-white  to-white grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-1 ">
          <div className="container mx-auto space-y-16 ml-32 py-16  lg:px-8 lg:py-16 xl:max-w-7xl  col-span-4">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-2` gap-2 sm:grid-cols-1">
              {/* Photo Component  */}

              <img
                className="w-[90%] sm:justify-center"
                src="\assets\images\instructor.png"
                alt=""
              />

              {/* Photo Component  */}

              {/* Description */}
              <div className="container mx-auto space-y-16 px-4 py-16  lg:px-8 lg:py-16 xl:max-w-7xl font-poppins">
                {/* <div> */}
                <div>
                  <h2 className="text-black font-extrabold text-4xl mb-10">
                    Vansh Gakhar
                  </h2>
                  <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-0 mb-8">
                    <button className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow">
                      Javascript
                    </button>

                    <button className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow">
                      UI/UX
                    </button>

                    <button className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow">
                      Figma
                    </button>

                    <button className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow">
                      Prototyping
                    </button>

                    <button className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow">
                      Tailwind
                    </button>

                    <button className="bg-[#FFD0C1] text-[#FF5722] py-2 px-auto rounded shadow">
                      Next Js
                    </button>
                  </div>
                  <h3 className="text-black font-bold text-2xl mb-8">
                    Experience: 2 Years
                  </h3>

                  <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-0 mb-6">
                    <button className="bg-[#ffc107b8]/[0.13] text-[#FFC107] b-[#FFC107] py-2 px-4 font-bold rounded-lg shadow">
                      Work:
                    </button>
                  </div>
                  <div className="grid lg:grid-cols-3 w-auto gap-4 sm:grid-cols-2 md:grid-cols-3 mt-0 mb-6">
                    <p className="font-bold">Full Time </p>
                    <p className="font-bold">Freelancer</p>
                    <p className="font-bold">Contract Base</p>
                  </div>

                  <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-0 mb-6">
                    <button className="bg-[#ffc107b8]/[0.13] text-[#FFC107] b-[#FFC107] py-2 px-4 font-bold rounded-lg shadow ">
                      About:
                    </button>
                  </div>
                  <p className="font-bold mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde, sapiente voluptatum at doloremque dicta minima earum
                    ex sequi facilis fuga accusantium omnis labore commodi
                    praesentium aliquid dignissimos assumenda sint in.
                  </p>

                  <div className="grid lg:grid-cols-4  sm:grid-cols-2 md:grid-cols-3 mt-0 w-[400px]">
                    <img src="./Twitter.svg" alt="twitter logo"/>
                    <img src="./Instagram.svg" alt="insta logo"/>
                    <img src="./Github.svg" alt="Github logo"/>
                    <img src ="./LinkedIn.svg" alt="Linked Logo"/>
                    
                    
                    
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
          <div className="bg-[rgba(255,87,34,0.25)] h-full md:w-[40%] sm:w-full flex flex-inline justify-center items-center sm:justify-center sm:items-center ml-32">
            <button className="flex flex-inline justify-center items-center ">
              <img src="./Redarrow.svg"  alt="redarrow logo" />
            </button>
          </div>
          {/* Arrow Div End  */}
        </div>
      </div>
    </>
  );
}
