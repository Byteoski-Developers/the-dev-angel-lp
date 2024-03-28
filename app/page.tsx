// import ProductBuilt from "@/components/ProductBuilt";
import Hero from "@/components/Hero/Hero";
// import Skills from "@/components/Skills";
import Whydevangel from "@/components/Whydevangel";
import { Marque } from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer";
// import Contact from "./contact-us/page";
import ContactUs from "@/components/ContactUs";
import HiringPartners from "@/components/HiringPartners";
import OurCourses from "@/components/OurCourses";
import OurTeams from "@/components/OurTeams";
import OurClientReviews from "@/components/OurClientReviews";
// import OurTeam from "@/components/OurTeam";
// import ProductBuilt from "@/components/HiringPartners";
// import RightPosition from "@/components/RightPosition";

export default function landingPage() {
  return (
    <>
      <Hero />
      <Marque />
      <Whydevangel />
      <OurClientReviews />
      {/* <OurTeam/> */}
      <OurTeams />
      <OurCourses />
      <HiringPartners />
      <ContactUs />
      <Footer />
    </>
  );
}
