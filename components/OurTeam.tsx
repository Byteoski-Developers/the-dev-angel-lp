import React from 'react';
import Image from "next/image";

interface creatorCards {
  name: string;
  expertise: string;
  imageSrc: string;
  altText: string;
}

const TeamMember: React.FC<creatorCards> = ({ name, expertise, imageSrc, altText }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Image
        src={imageSrc}
        alt={altText}
        height={256}
        width={256}
        className="size-64 object-cover rounded-lg p-[2px] bg-gradient-to-b from-primaryOrange to-secondaryYellow shadow-sm shadow-primaryOrange"
      />
      <div className="text-center">
        <p className="font-bold text-lg text-secondaryYellow normal-case">{name}</p>
        <p className="text-base leading-normal text-black dark:text-white font-semibold">{expertise}</p>
      </div>
    </div>
  );
};

const OurTeam: React.FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="border-t border-primaryOrange w-full"></div>
      <div className="mt-8">
        <div className="text-3xl font-bold text-center">
          &lt;Our <span className="text-primaryOrange">Team!</span>&gt;
        </div>
        <div className="capitalize mt-2 text-gray-500 text-xl text-center">
          <p>Your One Stop Destination for success</p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-8 gap-6 mt-6 mx-auto">
          <TeamMember
            name="Anubhav Gupta"
            expertise="20 years of expertise"
            imageSrc="/assets/images/members/anubhav.png"
            altText="Anubhav Gupta"
          />
          <TeamMember
            name="Gautam Singla"
            expertise="15 years of expertise"
            imageSrc="/assets/images/members/anubhav.png"
            altText="Gautam Singla"
          />
          <TeamMember
            name="Rishabh Mittal"
            expertise="5 years of expertise"
            imageSrc="/assets/images/members/anubhav.png"
            altText="Rishabh Mittal"
          />
        </div>
      </div>
      <div className="mt-8 border-b w-full border-primaryOrange"></div>
    </div>
  );
};

export default OurTeam;

