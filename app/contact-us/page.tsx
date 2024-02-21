import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <div className="h-full w-full relative">
        <img
          className="h-full w-full"
          src="/assets/images/Contact_us.png"
          alt="Phone Image"
        />
        <div className="absolute bottom-0 px-4 py-3 w-[30%] ml-10 mb-36 sm:invisible md:invisible ">
          <h1 className="text-white font-semibold text-4xl sm:text-sm ">
            {" "}
            Contact Us{" "}
          </h1>
          <p className="text-gray-200">
            Get in Touch with us leet us help you with any questions or
            inquiries you may have
          </p>
        </div>
      </div>
      <div className="container mx-auto space-y-16 px-4 py-16  lg:px-8 lg:py-16 xl:max-w-7xl">
        <ContactUs />
      </div>

      <Footer />
    </>
  );
}
