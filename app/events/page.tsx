import Image from "next/image";

export default function Events() {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20">
      {/* Title */}
      <h3 className="text-center text-gray-600 text-5xl font-bold py-12">
        Events
      </h3>

      {/* Navbar */}
      <div className="w-full text-center font-poppins px-4 md:px-5 lg:px-16 xl:px-60 text-opacity-70 text-xl ml-19 font-medium text-black py-5 flex items-center ">
        <p>
          The DevAngel is started for supporting students / young professionals
          to build their <br></br>
          products, learn technologies in all domains be it web, apps, DevOps,
          product <br></br>
          management, indie hacking, etc.
        </p>
      </div>

      {/* Orange Box */}
      <div className="w-full text-center font-poppins px-8 md:px-5 lg:px-16 xl:px-40 mb-8">
        <div className="h-12 px-8 py-2 mb-6  text-primaryOrange bg-primaryOrangeLight  rounded-lg flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="justify-start items-end gap-1 inline-flex">
            <div className="w-1 h-1 relative" />
            <div>
              <div className=" text-primaryOrange text-xs font-normal inline ">
                Fill{" "}
              </div>
              <div className=" text-primaryOrange text-xs font-bold underline inline">
                this form
              </div>
              <div className=" text-primaryOrange text-xs font-normal inline">
                if you want to host your event at your campus.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events Section */}
      <div className="text-left text-sm text-black font-bold mb-6">
        Recent Events (17)
      </div>

      {/* Cards start */}
      <div className="max-w-6xl mx-auto flex space-x-4 ">
        {/* First card */}
        <div className="rounded overflow-hidden shadow-lg max-w-sm ">
          <img src="\assets\images\imagecard2.jpeg" alt="imagecard2" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Event Title-1</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>{" "}
              Nullam nec ligula nec lectus ullamcorper sodales vel eu leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore
            </p>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
          <div className="flex space-5">
            <span className="bg-gray-100 rounded-full px-4 py-1 font-base">
              Topic-1
            </span>
            <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
            <span className="bg-gray-100 rounded-full px-3 py-1 font-base">
              Topic-2
            </span>
          </div>
          <div className=" text-primaryOrange text-base mx-2 py-3 font-normal font-['Poppins']">
            Explore Event{" "}
          </div>
        </div>

        {/* Second card */}
        <div className="rounded overflow-hidden shadow-lg max-w-sm">
          <img src="\assets\images\imagecard2.jpeg" alt="imagecard2" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Event Title-2</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>{" "}
              Nullam nec ligula nec lectus ullamcorper sodales vel eu leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore
            </p>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
          <div className="flex space-5">
            <span className="bg-gray-100 rounded-full px-4 py-1 font-base">
              Topic-1
            </span>
            <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
            <span className="bg-gray-100 rounded-full px-3 py-1 font-base">
              Topic-2
            </span>
          </div>
          <div className="text-primaryOrange text-base mx-2 py-3 font-normal font-['Poppins']">
            Explore Event{" "}
          </div>
        </div>

        {/* Third card */}
        <div className="rounded overflow-hidden shadow-lg max-w-sm">
          <img src="\assets\images\imagecard2.jpeg" alt="imagecard2" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Event Title-3</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>{" "}
              Nullam nec ligula nec lectus ullamcorper sodales vel eu leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore
            </p>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
          <div className="flex space-5">
            <span className="bg-gray-100 rounded-full px-4 py-1 font-base">
              Topic-1
            </span>
            <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
            <span className="bg-gray-100 rounded-full px-3 py-1 font-base">
              Topic-2
            </span>
          </div>
          <div className="text-primaryOrange text-base mx-2 py-3 font-normal font-['Poppins']">
            Explore Event{" "}
          </div>
        </div>
      </div>
      {/* Cards end */}

      {/* View More Button */}
      <button className="w-full text-center font-poppins px-8 md:px-5 lg:px-16 xl:px-40 mb-10 mt-8">
        <div className="w-60 h-12 px-4 py-2 bg-primaryOrange rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-xs font-semibold font-['Inter']">
            View More
          </div>
        </div>
      </button>

      {/* Footer */}
      <footer>
        <div className="bg-black md:px-5 lg:px-16 xl:px-40">
          <div className="mx-15">
            <Image
              src="/assets/images/Logo.svg"
              alt="Logo"
              width={127}
              height={52}
            />
          </div>
          <div className="text-white text-xs py-8 mx-15">
            Copyright © 2023 All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
