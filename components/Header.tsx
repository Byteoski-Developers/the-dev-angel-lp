import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/components/types";
const links: navLinks = [
  {
    title: "Home",
    link: ""
  },
  {
    title: "About",
    link: "About"
  },
  {
    title: "Contact Us",
    link: "contact-us",
  },
  {
    title: "Events",
    link: "Events"
  },
];

export default function Header() {
  return (
    <nav className="lg:my-2 lg:mx-30  bg-white flex justify-between items-center">
      <Image src={"/assets/images/Logo.svg"} alt="Logo" width={127} height={52} />
      <ul className="relative w-[262px] h-[21px] flex flex-row items-start justify-start gap-[18px] text-left text-sm text-darkslategray font-poppins">
        {links.map((link) => (
          <li key={link.link}>
            <Link
              href={`/${link.link}`}
              className="relative hover:text-orangered-100 font-poppins hover:underline hover:underline-orangered-100 hover:underline-offset-8 hover:underline-ease-in-out "
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="relative rounded-lg bg-orangered-100 h-[30px] w-[82px] py-2 px-4">
        <div className="relative text-[12px] font-inter font-semibold text-white">
          Training
        </div>
      </button>
    </nav>
  );
}
