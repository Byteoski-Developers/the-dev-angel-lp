import Image from "next/image";

export default function ContactCTA() {
  return (
    <div className="my-12 bg-gradient from-primaryOrange to-secondaryYellow rounded-lg p-[1px]">
      <div className="flex md:flex-row flex-col gap-6 bg-white rounded-md p-8">
        <div className="md:w-[700px] w-full h-64 border border-gray-300 mb-6 ">
          <textarea
            id="message"
            name="message"
            rows={2}
            className="block w-full  h-64 px-5 py-3 leading-6 placeholder-gray-900 dark:bg-gray-800 dark:placeholder-gray-400 border-b-4 shadow-none outline-none z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-slate-50 rounded-sm"
            defaultValue={""}
            placeholder="Message"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          <div className=" text-5xl font-bold text-start">
            Got a <span className="text-primaryOrange">Question?</span>
            <p className="text-base font-normal leading-normal">
              Chat with our Experts
            </p>
          </div>
          <button className="bg-primaryOrange font-semibold rounded-lg shadow-xl cursor-pointer flex items-center justify-center gap-2 text-white px-5 py-2 border-[#ff5622aa] hover:border-[#ff5622aa] hover:bg-[#ff562294] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[#FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
            <Image
              src="/assets/Icons/Conversation.svg"
              width={24}
              height={24}
              alt="converstation"
            />
            Let's Chat
          </button>
        </div>
      </div>
    </div>
  );
}
