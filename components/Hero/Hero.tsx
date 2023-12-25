

export default function Hero() {
    return (
      <>
        {/* Hero Section: Subtle Gradient Box */}
        <div className="relative overflow-hidden min-screen-full bg-white max-h-screen ">
         
  
          {/* Hero Content */}
          <div className="justify-center items-center text-center mx-30 py-10 bg-white  ">
            <div className="inline-flex px-4 py-1 mb-7 text-xs font-poppins rounded-xl text-orangered-100 bg-orangered-300 object-cover leading-5 ">
            #1 BEST YOUNG SOFTWARE BUILDER HOUSE
            </div>
            <h2 className="flex flex-col items-center mb-5 text-black font-bold font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ">
              <span className="flex p-5 line-clamp-1">Let’s Build Together</span>

              <span className="flex p-2 text-orangered-100 ">New SAAS</span>
              
            </h2>
            <h2 className="mx-auto text-xl font-medium leading-relaxed text-gray-600 lg:w-3/4 xl:w-3/4 ">
            The DevAngel is started for supporting students / young Professionals to build their products, learn technology in all domains be it web, apps, devOps, product management, indie Hacking etc.
            </h2>
            <div className="py-10">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-orangered-100 bg-orangered-100 px-8 py-3 font-semibold leading-6 text-white shadow-lg transition ease-in-out hover:-translate-y-1 delay-10 hover:scale-110 focus-ring focus:ring-orangered-100 focus:ring-opacity-50 active:border-orangered-100 active:bg-orangered-100 active:ring "
              >
                <span>Start a new Project</span>
                
              </a>
            </div>
            
          </div>
          {/* Marquee */}
          
          {/* END Hero Content */}
        </div>
        
        {/* END Hero Section: Subtle Gradient Box */}
      </>
    );
  }
  