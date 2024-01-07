import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const cardsData = [
  {
    date: "Nov 23, 2023",
    orangeredTitle: "Live Now",
    blackTitle: "TheDevangel.com is",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
  },
  {
    date: "Dec 12, 2023",
    orangeredTitle: "TheDevAngel.com",
    blackTitle: "Starting Building",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
  },
  {
    date: "Jan 1, 2024",
    orangeredTitle: "Building",
    blackTitle: "Prototype",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
  },
  {
    date: "Feb 14, 2024",
    orangeredTitle: "Ideation",
    blackTitle: "TheDevangel.com",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
  },
];

export default function about() {
  return (
    <>
      <div className="mx-28 px-2 flex flex-col items-center">
        <div className="text-4xl mt-9 mb-8 font-poppins bg-gradient-to-t from-secondaryYellow to-primaryOrange  text-transparent bg-clip-text font-semibold">
          About Us
        </div>
        <Image
          src="/assets/images/AboutUs.jpg"
          alt="about us image of the website"
          className="w-full"
          width={1200}
          height={375}
        />
        {cardsData.map((card) => (
          <div key={card.date} className="w-full relative flex flex-row">
            <div className="flex flex-col mr-1 w-1/12">
              <div className="mt-3 font-poppins text-grey font-medium text-base ">
                {card.date}
              </div>
            </div>
            <div className="flex flex-col mx-2 relative">
              <div className="mx-2 w-1 grow bg-secondaryYellow  " />
              <div className="absolute top-3">
                <Image
                  src={"/assets/images/bullet.svg"}
                  alt="bullet point"
                  width={25}
                  height={25}
                />
              </div>
            </div>
            <div className="flex flex-col w-2/3 pb-10">
              <h4 className="font-semibold mb-1 text-xl font-poppins text-black">
                {card.blackTitle}
                <span className="text-primaryOrange">
                  {" "}
                  {card.orangeredTitle}
                </span>
              </h4>
              <p className="leading-relaxed text-xs font-medium font-poppins text-darkslategray">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-t border-orangered" />
      <div className="mx-28 px-2 my-12 text-base font-medium font-poppins text-black leading-relaxed">
        <p className="text-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
          from a line in section 1.10.32.
        </p>
        <p className="text-center">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
          Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </p>
        <p className="text-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
          from a line in section 1.10.32.
        </p>
      </div>
      <Footer />
    </>
  );
}
