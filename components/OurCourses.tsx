export default function OurCourses() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100 ">
        <div className="container mx-auto space-y-16 px-4 py-16  lg:px-8 lg:py-16 xl:max-w-7xl 
        
        bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[rgba(255,193,7,0.22)]  via-[rgba(255,193,7,0.02)] to-white">
          {/* Heading */}
          <div className="text-center ">
            {/* <div className="mb-1 text-sm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-500">
              We reply in 24hrs
            </div> */}
            <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
              &lt;Our<span className="text-primaryOrange"> Courses </span> &gt;
            </h2>
            <h3 className="mx-auto text-xl font-medium leading-relaxed text-[#B5B5B5] lg:w-2/3 dark:text-gray-300">
              Your One Stop Destination for Success
            </h3>
          </div>

          {/* END Heading */}

          {/* Cards start */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-3 gap-8 sm:grid-cols-1 justify-center ">
            {/* First card */}
            <div className="rounded overflow-hidden shadow-lg max-w-sm  border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white">
              <img src="\assets\images\uiux.png" alt="UI Ux ImageCard" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">UI/UX</div>
                <ul className="list-disc list-inside">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  in saepe odio tempora perspiciatis mollitia sit quo explicabo?
                  Optio recusandae alias porro cumque enim tenetur nihil? Quia
                  quis incidunt veritatis! */}

                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-[#FFC107] text-lg font line-through">
                    $200
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#FF5722] text-lg font-extrabold py-1 px-4 rounded-md border-2 ">
                      $99
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#FF5722] hover:bg-[#ff5622b9] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 mt-4"
                >
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

            {/* Second card */}
            <div className="rounded overflow-hidden shadow-lg max-w-sm border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white">
              <img src="\assets\images\Coding.png" alt="Coding ImageCard" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Coding</div>

                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  in saepe odio tempora perspiciatis mollitia sit quo explicabo?
                  Optio recusandae alias porro cumque enim tenetur nihil? Quia
                  quis incidunt veritatis! */}
                <ul className="list-disc list-inside">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>

                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-[#FFC107] text-lg font line-through">
                    $500
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#FF5722] text-lg font-extrabold py-1 px-4 rounded-md border-2 ">
                      $249
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#FF5722] hover:bg-[#ff5622b9] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 mt-4"
                >
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

            {/* Third card */}
            <div className="rounded overflow-hidden shadow-lg max-w-sm border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white">
              <img src="\assets\images\frontend.png" alt="Frontend ImageCard" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Frontend</div>

                <ul className="list-disc list-inside">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>

                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-[#FFC107] text-lg font line-through">
                    $300
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#FF5722] text-lg font-extrabold py-1 px-4 rounded-md border-2 ">
                      $149
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#FF5722] hover:bg-[#ff5622b9] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 mt-4"
                >
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

            {/* Fourth Card */}
            <div className="rounded overflow-hidden shadow-lg max-w-sm border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white">
              <img
                src="\assets\images\superbackend.png"
                alt="SuperBackend ImageCard"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Super Backend</div>

                <ul className="list-disc list-inside">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>

                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-[#FFC107] text-lg font line-through">
                    $999
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#FF5722] text-lg font-extrabold py-1 px-4 rounded-md border-2 ">
                      $499
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#FF5722] hover:bg-[#ff5622b9] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 mt-4"
                >
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

            {/* Fifth Card */}
            <div className="rounded overflow-hidden shadow-lg max-w-sm border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white">
              <img src="\assets\images\database.png" alt="Database Imagecard" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">DataBase</div>

                <ul className="list-disc list-inside">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>

                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-[#FFC107] text-lg font line-through">
                    $800
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#FF5722] text-lg font-extrabold py-1 px-4 rounded-md border-2 ">
                      $399
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#FF5722] hover:bg-[#ff5622b9] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 mt-4"
                >
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

            {/* Sixth Card */}
            <div className="rounded overflow-hidden shadow-lg max-w-sm border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white">
              <img
                src="\assets\images\product manager.png"
                alt="Product ManagerImagecard"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Product Manager</div>

                <ul className="list-disc list-inside">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>

                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-[#FFC107] text-lg font line-through">
                    $1800
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#FF5722] text-lg font-extrabold py-1 px-4 rounded-md border-2 ">
                      $999
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#FF5722] hover:bg-[#ff5622b9] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 mt-4"
                >
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cards end */}

          {/* Explore More Button Start*/}
          <div className="flex justify-center  z-20 transition-all duration-300 ease-in-out hover:scale-105">
            <button
              type="submit"
              className="inline-flex w-9/11 items-center justify-center space-x-2 rounded-lg border border-[black] bg-[black] px-8 py-4 focus:bg-[black] font-semibold leading-6 text-white hover:border-black-500 hover:bg-[#FF5722] hover:text-white focus:ring  focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90"
            >
              {/* <svg
                    className="hi-mini hi-paper-airplane inline-block size-5 opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    >
                    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                  </svg> */}
              <span>Explore More Courses &gt;</span>
            </button>
          </div>
          {/* Explore More Button end*/}
        </div>
      </div>

      <div className=" border-b w-full border-primaryOrange"></div>
    </>
  );
}
