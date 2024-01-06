import Image from "next/image";

export default function ContactCTA() {
  return (
    <div className="my-12 bg-gradient from-primaryOrange to-secondaryYellow rounded-lg p-[1px]">
      <div className="flex md:flex-row flex-col gap-6 bg-white rounded-md p-8">
        <div className="md:w-[700px] w-full h-64 border border-gray-300 mb-6"></div>
        <div className="flex flex-col justify-center items-start gap-6">
          <div className=" text-5xl font-bold text-start">
            Got a <span className="text-primaryOrange">Question?</span>
            <p className="text-base font-normal leading-normal">
              Chat with our Experts
            </p>
          </div>
          <div className="bg-primaryOrange font-semibold rounded-lg shadow-xl cursor-pointer flex items-center justify-center gap-2 text-white px-5 py-2">
            <Image
              src="/assets/Icons/Conversation.svg"
              width={24}
              height={24}
              alt="converstation"
            />
            {`Let's Chat`}
          </div>
        </div>
      </div>
    </div>
  );
}
