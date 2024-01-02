import React from "react";

const Skills = () => {
  const data = [
    {
      imageUrl: "/assets/skills/image1.png",
      name: "Coding",
    },
    {
      imageUrl: "/assets/skills/image2.png",
      name: "Backend",
    },
    {
      imageUrl: "/assets/skills/image1.png",
      name: "Coding",
    },
    {
      imageUrl: "/assets/skills/image2.png",
      name: "Backend",
    },
    {
      imageUrl: "/assets/skills/image1.png",
      name: "Coding",
    },
    {
      imageUrl: "/assets/skills/image1.png",
      name: "Coding",
    },
    {
      imageUrl: "/assets/skills/image2.png",
      name: "Backend",
    },
  ];
  return (
    <div className="w-full mx-auto text-center font-poppins px-10 md:px-5 lg:px-16 xl:px-40">
      <h2 className="text-3xl py-2 lg:py-4 font-bold ">
        {"<"} Skills <span className="text-primaryOrange">to Learn</span> {">"}
      </h2>
      <h3 className="text-base md:text-xl leading-9 font-medium text-gray-600">
        Your One Stop Destination for Success
      </h3>

      <div className="mx-36 py-16 flex flex-wrap justify-center gap-10 ">
        {data.map((Skills, idx) => {
          return (
            <div key={idx}>
              <img
                src={Skills.imageUrl}
                width={39}
                height={28}
                className="inline"
              />
              <span className="px-2 font-bold">{Skills.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
