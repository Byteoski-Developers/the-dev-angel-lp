import Course from "@/components/Course";
import ProductBuilt from "@/components/ProductBuilt";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills";
import Whydevangel from "@/components/Whydevangel";
import OurTeam from "@/components/OurTeam";
import { Marque } from "@/components/Marquee/Marquee";

export default function landingPage() {
  return (
    <>
      <Hero />
      <Marque />
      <Whydevangel />
      <OurTeam />
      <Course />
      <ProductBuilt />

      <Skills />
    </>
  );
}
