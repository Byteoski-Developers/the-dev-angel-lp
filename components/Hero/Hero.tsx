import {Marque1, Marque2} from "../Marquee/Marquee";

export default function Hero() {
    return (
      <>
        {/* Hero Section: Subtle Gradient Box */}
        <div className="relative overflow-hidden  bg-white items-center min-h-screen justify-center dark:bg-gray-900 dark:text-gray-100">
         
  
          {/* Hero Content */}
          <div className="container relative items-center lg:mx-30 px-4 py-10 bg-white text-center lg:px-8 xl:max-w-7xl dark:from-pink-950">
            <div className="inline-flex px-4 py-1 mb-7 text-xs font-poppins rounded-xl text-orangered-100 bg-orangered-300 object-cover leading-5 ">
            #1 BEST YOUNG SOFTWARE BUILDER HOUSE
            </div>
            <h1 className="mx-auto mb-4 text-8xl text-black font-bold font-poppins xs:text-4xl sm:text-4xl md:text-5xl xl:text-8xl dark:text-white">
              <span className="p-5 line-clamp-1">Let’s Build Together</span>{" "}

              <span className="p-5 text-orangered-100 dark:text-orangered-100">New SAAS</span>{" "}
              
            </h1>
            <h2 className="mx-auto text-xl font-medium leading-relaxed text-gray-600 lg:w-3/4 xl:w-3/4 dark:text-gray-300">
            The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.
            </h2>
            <div className="py-10">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-orangered-100 bg-orangered-100 px-8 py-3 font-semibold leading-6 text-white shadow-lg transition ease-in-out hover:-translate-y-1 delay-10 hover:scale-110 focus-ring focus:ring-orangered-100 focus:ring-opacity-50 active:border-orangered-100 active:bg-orangered-100 active:ring dark:shadow-pink-950 dark:focus:ring-pink-400 dark:focus:ring-opacity-90"
              >
                <span>Start a new Project</span>
                
              </a>
            </div>
            
          </div>
          {/* Marquee */}
          <div>
          <Marque1 />
          <Marque2 />
          </div>
          {/* END Hero Content */}
        </div>
        
        {/* END Hero Section: Subtle Gradient Box */}
      </>
    );
  }
  