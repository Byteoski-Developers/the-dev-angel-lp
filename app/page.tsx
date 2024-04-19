import Hero from "@/components/Hero/Hero";
import Whydevangel from "@/components/Whydevangel";
import { Marque } from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
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
      <OurClientReviews />
      <OurTeams />
      <OurCourses />
      <HiringPartners />
      <ContactUs />
      <Footer />
    </>
  );
}
