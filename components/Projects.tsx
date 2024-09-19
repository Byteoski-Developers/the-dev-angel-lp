import Link from "next/link";
export default function Projects() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100 ">
        <div
          className="container mx-auto space-y-16 px-4 py-16  lg:px-8 lg:py-16 xl:max-w-7xl 
        
        bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[rgba(255,193,7,0.22)]  via-[rgba(255,193,7,0.02)] to-white"
        >
          {/* Heading */}
          <div className="text-center ">
            {/* <div className="mb-1 text-sm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-500">
              We reply in 24hrs
            </div> */}
            <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
              &lt; Explore{" "}
              <span className="text-primaryOrange">Our Projects </span> &gt;
            </h2>
          </div>

          {/* END Heading */}

          {/* Cards start */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-3 gap-8 sm:grid-cols-1 justify-center ">
            {/* First card */}
            <div className="rounded overflow-hidden shadow-lg max-w-sm  border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white">
              <img src="\assets\images\gurbani.webp" alt="Gurbani ImageCard" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">My Gurubani AI</div>
                <div className="list-disc list-inside h-16">
                  <p>A spiritual journey with Guru Granth Sahab</p>
                </div>

                <Link href="https://mygurbani.org/" passHref>
                  <p className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#FF5722] hover:bg-[#ff5622b9] hover:text-white focus:ring focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 mt-4">
                    <span>Visit Site &gt;</span>
                  </p>
                </Link>
              </div>
            </div>
            {/* Second card */}
            <div className="rounded overflow-hidden shadow-lg max-w-sm  border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white">
              <img src="\assets\images\tootler.svg" alt="Gurbani ImageCard" className="h-28 mx-auto"/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Tootler</div>
                <div className="list-disc list-inside h-16">
                  <p>Revolutionize Your Application Process with AI-Driven SOPs</p>
                </div>

                <Link href="https://tootler.ai/" passHref>
                  <p className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#FF5722] hover:bg-[#ff5622b9] hover:text-white focus:ring focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 mt-4">
                    <span>Visit Site &gt;</span>
                  </p>
                </Link>
              </div>
            </div>
            {/* Third card */}
            <div className="rounded overflow-hidden shadow-lg max-w-sm  border-b-[6px] z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white">
              <img src="\assets\images\devstarter.png" alt="Gurbani ImageCard" className="h-28"/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Dev Starter</div>
                <div className="list-disc list-inside h-16">
                  <p>Empower enterprise solutions with our Next.js & Django SaaS Boilerplate.</p>
                </div>

                <Link href="https://thedevstarter.com/" passHref>
                  <p className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-[#FF5722] bg-[#FF5722] px-8 py-2 focus:bg-[#FF5722] font-semibold leading-6 text-white hover:border-[#FF5722] hover:bg-[#ff5622b9] hover:text-white focus:ring focus:ring-opacity-50 active:bg-[#FF5722] active:border-[FF5722] dark:focus:ring-[#FF5722] dark:focus:ring-opacity-90 mt-4">
                    <span>Visit Site &gt;</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
