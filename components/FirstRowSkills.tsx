import React from "react";
import "tailwindcss/tailwind.css";

const skills = [
  "Coding",
  "Java",
  "C++",
  "Node Js",
  "Tailwind Css",
  "Github",
  "Mobile Development",
  "Full Stack Developer",
  "Software Engineer",
];

const FirstRowSkills = () => {
  return (
    <div className="mt-10 bg-white-100 flex items-center justify-center gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-orange-100 p-1 rounded-lg text-orange-500 font-thin text-center"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default FirstRowSkills;
