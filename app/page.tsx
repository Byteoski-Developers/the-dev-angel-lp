// import ProductBuilt from "@/components/ProductBuilt";
import Hero from "@/components/Hero/Hero";
// import Skills from "@/components/Skills";
import Whydevangel from "@/components/Whydevangel";
import { Marque } from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer";
// import Contact from "./contact-us/page";
import Contact_us from "@/components/Contact_us";
import HiringPartners from "@/components/HiringPartners";
import OurCourses from "@/components/OurCourses";
import OurTeams from "@/components/OurTeams";
import OurClientReviews from "@/components/OurClientReviews";


export default function landingPage() {
  return (
    <>
      <Hero />
      <Marque />
      <Whydevangel />
      <OurClientReviews/>
      <OurTeams />
      <OurCourses/>
      <HiringPartners/>
      <Contact_us/>
      <Footer/>
    </>
  );
}
