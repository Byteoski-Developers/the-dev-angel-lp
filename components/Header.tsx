'use client'

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import {link} from "@/app/components/types";


export default function Header() {


  return (
    <>
    <nav className="my-2 mx-30 bg-white flex justify-between items-center">
      <Image src={"/assets/images/Logo.svg"} alt="Logo" width={98} height={40} />
      <ul className="lg:flex md:flex flex-row items-center justify-center gap-5 text-left text-sm text-darkslategray font-poppins hidden ">
        {link.map((link) => (
          <li key={link.link}>
            <Link
              href={`/${link.link}`}
              className=" hover:text-orangered-100 hover:underline hover:underline-orangered-100 hover:underline-offset-8 hover:underline-ease-in-out "
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="relative hidden lg:inline-block md:inline-block rounded-lg bg-orangered-100 h-[30px] w-[82px] py-2">
        <div className="text-xs font-inter font-semibold text-white">
          Training
        </div>
      </button>
      <div className="lg:hidden md:hidden">
			<button className="navbar-burger flex items-center text-orangered-100">
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
    </nav>
    <div className="lg:hidden md:hidden">
    <MobileMenu/>
    </div>
    </>
  );
}
