import Image from "next/image";
import Link from "next/link";
const links = ["Home", "About", "Contact Us", "Events"];
export default function Header() {
  return (
    <nav className="my-2 mx-20 bg-white flex justify-between items-center ">
      <Image
        src={"/assets/images/Logo.svg"}
        alt="Logo"
        width={127}
        height={52}
      />
      <ul className="relative w-[262px] h-[21px] flex flex-row items-start justify-start gap-[18px] text-left text-sm text-darkslategray font-poppins">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={link.toLowerCase().replace(/\s+/g, "-")}
              className="relative hover:text-orangered font-poppins"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <button className="relative rounded-lg bg-orangered h-[30px] w-[82px] py-2 px-4">
        <div className="relative text-[12px] font-inter font-semibold text-white">
          Training
        </div>
      </button>
    </nav>
  );
}
