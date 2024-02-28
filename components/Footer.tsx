import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="bg-[#5A5A63] md:px-5 lg:px-16 xl:px-40 mt-0 justify-center">
        <div className="ms-0">
          <Image
            src="/assets/images/Logo.svg"
            alt="Logo"
            width={127}
            height={52}
          />
        </div>
        <div className="flex flex-row">
          <div className="text-[#fff] font-poppins text-l mt-6 flex-initial w-9/12">
            #1 BEST YOUNG SOFTWARE BUILDER HOUSE
          </div>

          <div className=" text-sm mt-6 flex-auto">
            <Twitter />
          </div>
          <div className=" text-sm mt-6 flex-auto ">
            <Instagram />
          </div>
          <div className=" text-sm mt-6 flex-auto ">
          <img src={"/Github.svg"} alt="My SVG" />
          </div>
          <div className=" text-sm mt-6 flex-auto pr-0 ">
          <img src={"/LinkedIn.svg"} alt="My SVG" />
          </div>
        </div>
        <hr className="mt-10 bg-[#fff] w" />

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          <div className="text-white py-8 mx-15 font-poppins text-sm ">
            <h6 className="mb-6">TheDevAngel.com</h6>
            <p>Address</p>
            <p>Mobile Number</p>
            <p>Support : 24/7</p>
            <p>Gmail: hello@thedevangel.com </p>
            {/* <p>Link</p> */}
          </div>
          <div className="text-white text-sm py-8 mx-15 font-poppins">
            <h6 className="mb-6">Quick Links</h6>
            <p>Why Chose Us</p>
            <p>Careers</p>
            <p>thedevangel</p>
            <p>Free Courses</p>
            {/* <p>Link</p> */}
          </div>
        </div>

        <div className="text-white text-xs py-8 font-poppins flex-row-reverse">
          Copyright &copy; 2023 All rights reserved
        </div>
      </div>
    </footer>
  );
}
