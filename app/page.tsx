import Course from "@/components/Course";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills";
import Whydevangel from "@/components/Whydevangel";
import { Marque } from "@/components/Marquee/Marquee";

export default function landingPage() {
  return (
    <>
      <Hero />
      <Marque />
      <Whydevangel />
      <Course />
      <Skills />
    </>
  );
}
