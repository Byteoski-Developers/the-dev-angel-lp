export default function CreatorMenu() {
  return (
    <div className="bg-gradient-to-r mt-8 w-fit justify-center items-center mx-auto flex from-primaryOrange p-[2px] to-secondaryYellow rounded-lg">
      <div className="md:text-base w-fit  bg-white text-sm flex pl-12 pr-14 place-items-center py-4 overflow-x-scroll rounded-md md:overflow-hidden">
        <span className="border-r text-primaryOrange font-bold md:pr-5 pr-3 md:mr-4 mr-2 border-black cursor-pointer">
          Creator
        </span>
        <span className="border-r md:pr-5 pr-3 md:mr-4 mr-2 border-black cursor-pointer hover:text-gray-500 ">
          Review
        </span>
        <span className="cursor-pointer hover:text-gray-500 ">Members</span>
      </div>
    </div>
  );
}
