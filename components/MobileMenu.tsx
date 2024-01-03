"use client";

import Image from "next/image";
import { useEffect } from "react";
import { links } from "@/app/components/types";
import Link from "next/link";
export default function MobileMenu() {
  useEffect(() => {
    // Burger menus
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    const toggleMenu = () => {
      for (let j = 0; j < menu.length; j++) {
        menu[j].classList.toggle("hidden");
      }
    };

    if (burger.length && menu.length) {
      burger.forEach((b) => {
        b.addEventListener("click", toggleMenu);
      });
    }

    if (close.length) {
      close.forEach((c) => {
        c.addEventListener("click", toggleMenu);
      });
    }

    if (backdrop.length) {
      backdrop.forEach((b) => {
        b.addEventListener("click", toggleMenu);
      });
    }

    return () => {
      // Cleanup event listeners
      if (burger.length && menu.length) {
        burger.forEach((b) => {
          b.removeEventListener("click", toggleMenu);
        });
      }

      if (close.length) {
        close.forEach((c) => {
          c.removeEventListener("click", toggleMenu);
        });
      }

      if (backdrop.length) {
        backdrop.forEach((b) => {
          b.removeEventListener("click", toggleMenu);
        });
      }
    };
  }, []);
  return (
    <div className="navbar-menu relative z-50 hidden">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <Image
            className="mr-auto"
            src={"/assets/images/Logo.svg"}
            alt="Logo"
            width={98}
            height={40}
          />
          <button className="navbar-close  border-2 p-1 border-orangered-300 rounded-md shadow transition ease-in-out hover:-translate-y-1 delay-10 hover:scale-110 active:ring active:ring-orangered-100">
            <Image
              src={"/assets/images/close.svg"}
              alt="close button"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div>
          <ul className="">
            {links.map((link) => (
              <li key={link.link}>
                <Link href={`/${link.link}`} className=" my-1">
                  <div className="my-3 mx-3 px-3 py-4 rounded-md text-sm text-gray-500 font-medium font-poppins hover:text-orangered-100 hover:bg-orangered-300">
                    {link.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className=" px-4 py-3 my-5 text-xs text-center font-semibold leading-none text-white bg-orangered-100  rounded-xl">
          Training
        </button>
      </nav>
    </div>
  );
}
