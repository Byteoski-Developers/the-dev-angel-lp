import Course from "@/components/Course";
import Hero from "@/components/Hero/Hero";
import { Marque} from "@/components/Marquee/Marquee";
export default function landingPage() {
  return (
    <>
      
        <Hero />
        <div className="max-h-full pb-40">
          <Marque />
          
        
      </div>
      <Course />
    </>
  );
}
