import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="w-full mx-auto text-center font-poppins px-10 md:px-5 lg:px-16 xl:px-40">
      <h2 className="text-3xl py-2 lg:py-4 font-bold ">
        {"<"} Skills <span className="text-orangered">to Learn</span> {">"}
      </h2>
      <h3 className="text-base md:text-xl leading-9 font-medium text-gray-600">
        Your One Stop Destination for Success
      </h3>

      <div className="mx-36 py-16 flex gap-10 ">
        <div>
          <Image
            src={"/assets/skills/image1.png"}
            width={39}
            height={28}
            alt="coding"
            className="inline"
          />
          <span className="px-2 font-bold">Coding</span>
        </div>
        <div>
          <Image
            src={"/assets/skills/image 2.png"}
            width={39}
            height={28}
            alt="backend"
            className="inline"
          />
          <span className="px-2 font-bold">Backend</span>
        </div>
        <div>
          <Image
            src={"/assets/skills/image1.png"}
            width={39}
            height={28}
            alt="coding"
            className="inline"
          />
          <span className="px-2 font-bold">Coding</span>
        </div>
        <div>
          <Image
            src={"/assets/skills/image 2.png"}
            width={39}
            height={28}
            alt="backend"
            className="inline"
          />
          <span className="px-2 font-bold">Backend</span>
        </div>
        <div>
          <Image
            src={"/assets/skills/image1.png"}
            width={39}
            height={28}
            alt="coding"
            className="inline"
          />
          <span className="px-2 font-bold">Coding</span>
        </div>
      </div>
      <div className="mx-36 flex justify-center gap-10 ">
        <div>
          <Image
            src={"/assets/skills/image1.png"}
            width={39}
            height={28}
            alt="coding"
            className="inline"
          />
          <span className="px-2 font-bold">Coding</span>
        </div>
        <div>
          <Image
            src={"/assets/skills/image 2.png"}
            width={39}
            height={28}
            alt="backend"
            className="inline"
          />
          <span className="px-2 font-bold">Backend</span>
        </div>
        
        
      </div>

    </div>
  );
};

export default Skills;
