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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M21.645 7.80754C21.655 8.01004 21.6588 8.21504 21.6588 8.41754C21.6588 14.655 16.9125 21.845 8.23375 21.845C5.5675 21.845 3.08875 21.0638 1 19.7238C2.23547 19.8732 3.48827 19.7777 4.6868 19.4426C5.88532 19.1076 7.00608 18.5397 7.985 17.7713C7.00052 17.7527 6.04647 17.4269 5.25622 16.8395C4.46598 16.2521 3.87905 15.4324 3.5775 14.495C4.28508 14.6274 5.0133 14.5996 5.70875 14.4138C4.64077 14.1972 3.6805 13.6181 2.99068 12.7745C2.30087 11.9309 1.92393 10.8748 1.92375 9.78504V9.72629C2.579 10.0908 3.31183 10.2935 4.06125 10.3175C3.06109 9.65076 2.3531 8.62743 2.08177 7.45642C1.81045 6.2854 1.99625 5.05497 2.60125 4.01629C3.78599 5.47436 5.26419 6.66691 6.93985 7.51648C8.6155 8.36604 10.4511 8.85362 12.3275 8.94754C12.2463 8.59456 12.2056 8.23348 12.2063 7.87129C12.2063 7.25183 12.3283 6.63845 12.5654 6.06617C12.8025 5.49388 13.15 4.97391 13.588 4.53595C14.0261 4.09799 14.5462 3.75062 15.1185 3.51368C15.6909 3.27674 16.3043 3.15487 16.9237 3.15504C17.5693 3.15398 18.2082 3.28559 18.8008 3.54168C19.3935 3.79777 19.9271 4.1729 20.3687 4.64379C21.4252 4.43466 22.4383 4.04748 23.365 3.49879C23.0126 4.59154 22.2752 5.51906 21.29 6.10879C22.2253 5.9979 23.1388 5.74763 24 5.36629C23.3673 6.31433 22.5697 7.14118 21.645 7.80754Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M8.12501 2.08325H16.875C20.2083 2.08325 22.9167 4.79159 22.9167 8.12492V16.8749C22.9167 18.4773 22.2801 20.014 21.1471 21.147C20.0141 22.2801 18.4774 22.9166 16.875 22.9166H8.12501C4.79168 22.9166 2.08334 20.2083 2.08334 16.8749V8.12492C2.08334 6.52257 2.71987 4.98585 3.85291 3.85282C4.98594 2.71978 6.52266 2.08325 8.12501 2.08325ZM7.91668 4.16659C6.92211 4.16659 5.96829 4.56167 5.26503 5.26493C4.56176 5.9682 4.16668 6.92202 4.16668 7.91658V17.0833C4.16668 19.1562 5.84376 20.8333 7.91668 20.8333H17.0833C18.0779 20.8333 19.0317 20.4382 19.735 19.7349C20.4383 19.0316 20.8333 18.0778 20.8333 17.0833V7.91658C20.8333 5.84367 19.1563 4.16659 17.0833 4.16659H7.91668ZM17.9688 5.72909C18.3141 5.72909 18.6453 5.86627 18.8895 6.11046C19.1337 6.35464 19.2708 6.68583 19.2708 7.03117C19.2708 7.3765 19.1337 7.70769 18.8895 7.95188C18.6453 8.19607 18.3141 8.33325 17.9688 8.33325C17.6234 8.33325 17.2922 8.19607 17.048 7.95188C16.8039 7.70769 16.6667 7.3765 16.6667 7.03117C16.6667 6.68583 16.8039 6.35464 17.048 6.11046C17.2922 5.86627 17.6234 5.72909 17.9688 5.72909ZM12.5 7.29158C13.8813 7.29158 15.2061 7.84032 16.1829 8.81707C17.1596 9.79382 17.7083 11.1186 17.7083 12.4999C17.7083 13.8813 17.1596 15.206 16.1829 16.1828C15.2061 17.1595 13.8813 17.7083 12.5 17.7083C11.1187 17.7083 9.79391 17.1595 8.81716 16.1828C7.84041 15.206 7.29168 13.8813 7.29168 12.4999C7.29168 11.1186 7.84041 9.79382 8.81716 8.81707C9.79391 7.84032 11.1187 7.29158 12.5 7.29158ZM12.5 9.37492C11.6712 9.37492 10.8764 9.70416 10.2903 10.2902C9.70425 10.8763 9.37501 11.6711 9.37501 12.4999C9.37501 13.3287 9.70425 14.1236 10.2903 14.7096C10.8764 15.2957 11.6712 15.6249 12.5 15.6249C13.3288 15.6249 14.1237 15.2957 14.7097 14.7096C15.2958 14.1236 15.625 13.3287 15.625 12.4999C15.625 11.6711 15.2958 10.8763 14.7097 10.2902C14.1237 9.70416 13.3288 9.37492 12.5 9.37492Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2425_1125)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5 0.996582C5.98692 0.996582 0.705475 6.27685 0.705475 12.7911C0.705475 18.0024 4.08497 22.4233 8.7713 23.9831C9.36055 24.0925 9.57696 23.7272 9.57696 23.4157C9.57696 23.1345 9.56602 22.2054 9.56094 21.2198C6.27969 21.9333 5.58731 19.8282 5.58731 19.8282C5.05079 18.4649 4.27774 18.1024 4.27774 18.1024C3.20743 17.3704 4.3584 17.3856 4.3584 17.3856C5.54258 17.4687 6.16641 18.6011 6.16641 18.6011C7.21837 20.4038 8.92559 19.8827 9.59864 19.5815C9.7045 18.8192 10.0102 18.2987 10.3475 18.0042C7.72774 17.7064 4.97364 16.6948 4.97364 12.1755C4.97364 10.8878 5.43458 9.83565 6.18907 9.00947C6.06641 8.7126 5.6627 7.51299 6.30313 5.88838C6.30313 5.88838 7.29337 5.57139 9.54727 7.09736C10.4883 6.83584 11.4975 6.70439 12.5 6.6999C13.502 6.70439 14.5117 6.83545 15.4545 7.09697C17.7057 5.571 18.6947 5.88799 18.6947 5.88799C19.3367 7.5124 18.933 8.71221 18.8106 9.00908C19.5668 9.83525 20.0244 10.8874 20.0244 12.1751C20.0244 16.7052 17.2652 17.7024 14.6389 17.9946C15.0621 18.3606 15.4391 19.0786 15.4391 20.1788C15.4391 21.7569 15.4254 23.0271 15.4254 23.4155C15.4254 23.7294 15.6379 24.0972 16.2356 23.9813C20.9191 22.42 24.2947 18.0005 24.2947 12.7911C24.2945 6.27725 19.0137 0.996582 12.5 0.996582Z"
                          fill="#181616"
                        />
                        <path
                          d="M5.17265 17.9309C5.14668 17.9895 5.05449 18.007 4.9705 17.967C4.88457 17.9287 4.83671 17.8488 4.86445 17.79C4.88984 17.7295 4.98222 17.7129 5.06757 17.7533C5.15351 17.7918 5.20234 17.8725 5.17246 17.9311L5.17265 17.9309ZM5.65039 18.4639C5.59433 18.516 5.48437 18.4918 5.40976 18.4092C5.33242 18.3271 5.31796 18.2172 5.37519 18.1643C5.43339 18.1123 5.54003 18.1369 5.61738 18.2189C5.69433 18.3021 5.70957 18.4111 5.65058 18.4641L5.65039 18.4639ZM6.11562 19.143C6.04335 19.1934 5.925 19.1463 5.85195 19.0414C5.77968 18.9363 5.77968 18.8103 5.8539 18.7602C5.92675 18.7098 6.04335 18.7553 6.11757 18.8592C6.18945 18.9656 6.18945 19.0918 6.11562 19.143ZM6.75254 19.7994C6.68808 19.8707 6.55019 19.8516 6.44941 19.7545C6.34648 19.6594 6.31777 19.524 6.38242 19.4529C6.44804 19.3814 6.58652 19.4014 6.68789 19.4978C6.79082 19.5928 6.82187 19.7283 6.75293 19.7992L6.75254 19.7994ZM7.63144 20.1805C7.60273 20.2728 7.47031 20.3148 7.33652 20.2754C7.20312 20.235 7.11582 20.127 7.14316 20.0336C7.1705 19.9404 7.3039 19.8969 7.43847 19.9389C7.57187 19.9791 7.65918 20.0865 7.63144 20.1805ZM8.59687 20.251C8.60019 20.3482 8.48691 20.4287 8.34687 20.4307C8.20566 20.434 8.0914 20.3551 8.09003 20.2594C8.09003 20.1611 8.20097 20.0816 8.34199 20.0789C8.48203 20.0764 8.59707 20.1545 8.59707 20.2508L8.59687 20.251ZM9.49492 20.0982C9.51171 20.193 9.41425 20.2904 9.275 20.3164C9.13828 20.3418 9.01132 20.2828 8.99375 20.1889C8.97695 20.0916 9.07617 19.9941 9.21289 19.9689C9.35234 19.9449 9.47734 20.002 9.49492 20.0982Z"
                          fill="#181616"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2425_1125">
                          <rect width="25" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2425_1129)">
                        <path
                          d="M12.5 0.5C5.8725 0.5 0.5 5.8725 0.5 12.5C0.5 19.1275 5.8725 24.5 12.5 24.5C19.1275 24.5 24.5 19.1275 24.5 12.5C24.5 5.8725 19.1275 0.5 12.5 0.5ZM9.5625 17.4738H7.1325V9.65375H9.5625V17.4738ZM8.3325 8.69375C7.565 8.69375 7.06875 8.15 7.06875 7.4775C7.06875 6.79125 7.58 6.26375 8.36375 6.26375C9.1475 6.26375 9.6275 6.79125 9.6425 7.4775C9.6425 8.15 9.1475 8.69375 8.3325 8.69375ZM18.4375 17.4738H16.0075V13.14C16.0075 12.1313 15.655 11.4462 14.7763 11.4462C14.105 11.4462 13.7063 11.91 13.53 12.3563C13.465 12.515 13.4488 12.74 13.4488 12.9638V17.4725H11.0175V12.1475C11.0175 11.1713 10.9862 10.355 10.9537 9.6525H13.065L13.1763 10.7388H13.225C13.545 10.2288 14.3288 9.47625 15.64 9.47625C17.2388 9.47625 18.4375 10.5475 18.4375 12.85V17.4738Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2425_1129">
                          <rect width="25" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
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
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.288"
                >
                  {" "}
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#FF5722"
                    stroke-width="1.392"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></circle>{" "}
                  <path
                    d="M17 12H7M17 12L13 8M17 12L13 16"
                    stroke="#FF5722"
                    stroke-width="1.392"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#FF5722"
                    stroke-width="1.44"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></circle>{" "}
                  <path
                    d="M17 12H7M17 12L13 8M17 12L13 16"
                    stroke="#FF5722"
                    stroke-width="1.44"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
          {/* Arrow Div End  */}
        </div>
      </div>
    </>
  );
}
