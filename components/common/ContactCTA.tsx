export default function ContactCTA() {
  return (
    <div className="my-12 bg-gradient from-primaryOrange to-secondaryYellow rounded-lg p-[1px]">
      <div className="flex md:flex-row flex-col gap-6 bg-white rounded-md p-8">
        <div className="md:w-[700px] w-full h-64 border border-gray-300 mb-6"></div>
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="text-heading font-heading text-start">
            Got a <span className="text-primaryOrange">Question?</span>
            <p className="text-xl font-normal leading-normal">Chat with our Experts</p>
          </div>
          <div className="bg-primaryOrange font-semibold rounded-lg shadow-xl cursor-pointer flex items-center justify-center gap-2 text-white px-5 py-2">
            <svg
              className="size-6 mr-2"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.59375 8.53834C1.59375 9.67167 2.38921 10.6591 3.51121 10.8241C4.26771 10.9353 5.03271 11.0218 5.80479 11.082C6.13487 11.1082 6.43733 11.281 6.6215 11.5573L8.5 14.375L10.3785 11.5573C10.5627 11.281 10.8651 11.1082 11.1952 11.0827C11.9673 11.0218 12.7323 10.9353 13.4888 10.8241C14.6108 10.6591 15.4062 9.67238 15.4062 8.53763V4.27488C15.4062 3.14013 14.6108 2.15342 13.4888 1.98838C11.8369 1.74592 10.1696 1.62448 8.5 1.625C6.80567 1.625 5.13967 1.74896 3.51121 1.98838C2.38921 2.15342 1.59375 3.14084 1.59375 4.27488V8.53763V8.53834Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {`Let's Chat`}
          </div>
        </div>
      </div>
    </div>
  );
}
