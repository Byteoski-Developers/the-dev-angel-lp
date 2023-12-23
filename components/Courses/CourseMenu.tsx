export default function CourseMenu() {
  return (
    <div className="bg-gradient-to-r from-primaryOrange p-[2px] to-secondaryYellow rounded-lg">
      <div className="md:text-base w-full bg-white text-sm flex px-6 py-4 overflow-x-scroll rounded-md md:overflow-hidden">
        <span className="border-r md:pr-5 pr-3 md:mr-4 mr-2 border-black cursor-pointer hover:text-gray-500 ">
          Fontend
        </span>
        <span className="border-r md:pr-5 pr-3 md:mr-4 mr-2 border-black cursor-pointer hover:text-gray-500 ">
          Backend
        </span>
        <span className="border-r md:pr-5 pr-3 md:mr-4 mr-2 border-black cursor-pointer hover:text-gray-500 ">
          Database
        </span>
        <span className="border-r text-primaryOrange font-bold md:pr-5 pr-3 md:mr-4 mr-2 border-black cursor-pointer  ">
          FullStack
        </span>
        <span className="md:pr-5 pr-3 md:mr-4 mr-2 cursor-pointer hover:text-gray-500 ">
          UI/UX
        </span>
      </div>
    </div>
  );
}

