import Image from 'next/image';

export default function Events() {
  return (
    <>
      {/* Title */}
      <div className="text-center text-gray-600 text-5xl font-bold py-12">Events</div>

      {/* Navbar */}
      <div className="w-full text-center font-poppins px-8 md:px-10 lg:px-20 xl:px-64 text-opacity-70 font-medium text-black py-5 ">
        <p>
          The DevAngel is started for supporting students / young professionals to build their <br />
          products, learn technologies in all domains be it web, apps, DevOps, product <br />
          management, indie hacking, etc.
        </p>
      </div>

      {/* Orange Box */}
      <div className="mx-auto text-center font-poppins px-4 md:px-3 lg:px-6 xl:px-10 mb-8">
        <div className="h-10 px-2 py-2 bg-orange-600 bg-opacity-10 rounded-lg inline-flex items-center gap-1.5">
          <div className="w-6 h-6 relative">
            <img src="/assets/frame.svg" alt="frame" />
          </div>
          <div className="text-orange-600 text-xs font-normal">Fill </div>
          <div className="text-orange-600 text-xs font-bold underline">this form</div>
          <div className="text-orange-600 text-xs font-normal">
            if you want to host your event at your campus.
          </div>
        </div>
      </div>

      {/* Recent Events Section */}
      <div className="mx-44 pl-2 mb-2 ">
        <span className="text-black text-base font-bold font-['Poppins']">Recent Events </span>
        <span className="text-black text-base font-medium font-['Poppins']">(17)</span>
      </div>

      {/* Cards start */}
      <div className="max-w-6xl mx-auto flex space-x-7">
        {/* First card */}
        <div className=" rounded-lg overflow-hidden shadow-lg max-w-sm bg-white border">
          <div className="relative">
            <div className="bg-neutral-200 p-4 rounded-tl-[10px] rounded-tr-[10px]">
              <img src="\assets\images\imagecard2.jpeg" alt="imagecard2" className="object-cover" />
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Event Title-1</div>
            <div className="text-black text-opacity-60 text-xs font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Nullam nec ligula nec lectus ullamcorper sodales vel eu leo.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
          <div className="flex space-5 px-5">
            <span className="bg-white rounded-md px-3 py-1 font-base border border-gray-300">Topic-1</span>
            <div className="grid grid-flow-col gap-5 pb-2 px-2"></div>
            <span className="bg-white rounded-md px-3 py-1 font-base border border-gray-300">Topic-2</span>
          </div>
          <div className="text-orange-600 text-base mx-2 px-4 py-3 font-normal font-['Poppins']">
            Explore Event &gt;
          </div>
        </div>

        {/* Second card */}
        <div className="rounded-lg overflow-hidden shadow-lg max-w-sm border">
          <div className="relative">
            <div className="bg-neutral-200 p-4 rounded-tl-[10px] rounded-tr-[10px]">
              <img src="\assets\images\imagecard2.jpeg" alt="imagecard2" className="object-cover" />
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Event Title-2</div>
            <div className="text-black text-opacity-60 text-xs font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Nullam nec ligula nec lectus ullamcorper sodales vel eu leo.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
          <div className="flex space-5 px-5">
            <span className="bg-white rounded-md px-3 py-1 font-base border border-gray-300">Topic-1</span>
            <div className="grid grid-flow-col gap-5 pb-2 px-2"></div>
            <span className="bg-white rounded-md px-3 py-1 font-base border border-gray-300">Topic-2</span>
          </div>
          <div className="text-orange-600 text-base mx-2 px-4 py-3 font-normal font-['Poppins']">
            Explore Event &gt;
          </div>
        </div>

        {/* Third card */}
        <div className="rounded-lg overflow-hidden shadow-lg max-w-sm border">
          <div className="relative">
            <div className="bg-neutral-200 p-4 rounded-tl-[10px] rounded-tr-[10px]">
              <img src="\assets\images\imagecard2.jpeg" alt="imagecard2" className="object-cover" />
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Event Title-3</div>
            <div className="text-black text-opacity-60 text-xs font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Nullam nec ligula nec lectus ullamcorper sodales vel eu leo.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
          <div className="flex space-5 px-5">
            <span className="bg-white rounded-md px-3 py-1 font-base border border-gray-300">Topic-1</span>
            <div className="grid grid-flow-col gap-5 pb-2 px-2"></div>
            <span className="bg-white rounded-md px-3 py-1 font-base border border-gray-300">Topic-2</span>
          </div>
          <div className="text-orange-600 text-base mx-2 px-5 py-3 font-normal font-['Poppins']">
            Explore Event &gt;
          </div>
        </div>
      </div>
      {/* Cards end */}

      {/* View More Button */}
      <button className="w-full text-center font-poppins px-8 md:px-5 lg:px-16 xl:px-40 mb-10 mt-8">
        <div className="w-60 h-12 px-4 py-2 bg-orange-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-xs font-semibold font-['Inter']">View More</div>
        </div>
      </button>

      {/* Footer */}
      <footer className="bg-black md:px-5 lg:px-16 xl:px-40">
        <div className="flex-start ">
          <div className='mx-1'>
            <Image src="/assets/logo2.png" alt="Logo" width={200} height={90} />
          </div>
          <div className="text-white text-xs mx-10">Copyright © 2023 All rights reserved</div>
        </div>
      </footer>
    </>
  );
}