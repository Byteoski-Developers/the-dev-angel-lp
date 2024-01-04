import Image from 'next/image';

export default function Events() {
  return (<>
      {/* Title */}
      <div className="text-center text-gray-600 text-2xl font-bold py-12">Events</div>

      {/* Navbar */}
      <div className="w-full text-center font-poppins px-8 md:px-10 lg:px-20 xl:px-64 text-opacity-70 font-medium text-black py-5 ">
        <p>
          The DevAngel is started for supporting students / young professionals to build their <br></br>
          products, learn technologies in all domains be it web, apps, DevOps, product <br></br>
          management, indie hacking, etc.
        </p>
      </div>
      
      {/* Orange Box */}
      <div className="mx-auto text-center font-poppins px-4 md:px-3 lg:px-6 xl:px-10 mb-8">
        <div className="h-10 px-2 py-2 bg-orange-600 bg-opacity-10 rounded-lg inline-flex items-center gap-1.5">
          <div className="w-6 h-6 relative">
            <img src="/assets/images/frame.svg" alt="frame" />
          </div>
          <div className="text-orange-600 text-xs font-normal">Fill </div>
          <div className="text-orange-600 text-xs font-bold underline">this form</div>
          <div className="text-orange-600 text-xs font-normal">
            if you want to host your event at your campus.
          </div>
        </div>
      </div>

      {/* Recent Events Section */}
      <div className="px-12 text-sm text-black font-bold mb-6">Recent Events (17)</div>

      {/* Cards start */}
      <div className="max-w-6xl mx-auto flex space-x-4">
        {/* First card */}
        <div className="rounded overflow-hidden shadow-lg max-w-sm bg-white">
        <div className="p-4">
          <img src="\assets\images\imagecard2.jpeg" alt="imagecard2" className="object-cover bg-neutral-200 rounded-tl-[10px] rounded-tr-[10px]"  />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Event Title-1</div>
            <div className="text-black text-opacity-60 text-xs font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nullam nec ligula nec
              lectus ullamcorper sodales vel eu leo.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
          <div className="flex space-5">
            <span className="bg-gray-100 rounded-full px-4 py-1 font-base">Topic-1</span>
            <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
            <span className="bg-gray-100 rounded-full px-3 py-1 font-base">Topic-2</span>
          </div>
          <div className="text-orange-600 text-base mx-2 py-3 font-normal font-['Poppins']">Explore Event </div>
        </div>
        
        {/* Second card */}
        <div className="rounded overflow-hidden shadow-lg max-w-sm">
        <div className="p-4">
        <img src="\assets\images\imagecard2.jpeg" alt="imagecard2" className="object-cover bg-neutral-200 rounded-tl-[10px] rounded-tr-[10px]"  />
        </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Event Title-2</div>
            <div className="text-black text-opacity-60 text-xs font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nullam nec ligula nec
              lectus ullamcorper sodales vel eu leo.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
          <div className="flex space-5">
            <span className="bg-gray-100 rounded-full px-4 py-1 font-base">Topic-1</span>
            <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
            <span className="bg-gray-100 rounded-full px-3 py-1 font-base">Topic-2</span>
          </div>
          <div className="text-orange-600 text-base mx-2 py-3 font-normal font-['Poppins']">Explore Event </div>
        </div>
       

        {/* Third card */}
        <div className="rounded overflow-hidden shadow-lg max-w-sm">
        <div className="p-4">
        <img src="\assets\images\imagecard2.jpeg" alt="imagecard2" className="object-cover bg-neutral-200 rounded-tl-[10px] rounded-tr-[10px]"  />
        </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Event Title-3</div>
            <div className="text-black text-opacity-60 text-xs font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nullam nec ligula nec
              lectus ullamcorper sodales vel eu leo.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
          <div className="flex space-5">
            <span className="bg-gray-100 rounded-full px-4 py-1 font-base">Topic-1</span>
            <div className="grid grid-flow-col gap-5 pb-2 px-6"></div>
            <span className="bg-gray-100 rounded-full px-3 py-1 font-base">Topic-2</span>
          </div>
          <div className="text-orange-600 text-base mx-2 py-3 font-normal font-['Poppins']">Explore Event </div>
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
      <footer>
        <div className="bg-black md:px-5 lg:px-16 xl:px-40">
          <div className="">
            <Image src="/assets/images/logo2.png" alt="Logo" width={200} height={90} />
          </div>
          <div className="text-white text-xs py-8">Copyright © 2023 All rights reserved</div>
        </div>
      </footer>
    </>);
}
