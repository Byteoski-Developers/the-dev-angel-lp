const AboutUs=()=>{
    return(<>
        <div className="text-center font-poppins px-10 md:px-4 lg:px-12 xl:px-40">
            <h2 className="text-black h-12 w-full font-bold text-3xl leading-12 py-10 lg:py-12" >&lt; About Us &gt;</h2>
            <h3 className="text-gray-600 w-full font-medium text-base h-9 md:text-xl leading-9 ">Your One Stop <span className="text-orangered ">Destination for Success</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:py-5">
            <div className="font-poppins md:text-left md:col-span-1 md:py-7 lg:py-14 ">
                <h4 className="text-black w-full font-semibold text-xl md:text-2xl py-2" >Explore <span className="text-orangered">Our Course :</span></h4>
                <p className="text-black text-base font-normal leading-6 py-3 lg:py-5">Unlock your potential with our diverse range of courses designed to meet your learning needs. Whether you're a beginner or an expert looking to enhance your skills, our carefully curated selection offers something for everyone. Dive into a world of knowledge and opportunity with:</p>
            </div>
            <div className="md:col-span-1 text-center">
                <img src="" alt="" />
            </div>
        </div>
        </>

    )
}
export default AboutUs