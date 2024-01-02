import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="bg-black md:px-5 lg:px-16 xl:px-40">
        <div className="mx-15">
          <Image
            src="/assets/images/Logo.svg"
            alt="Logo"
            width={127}
            height={52}
          />
        </div>
        <div className="text-white text-xs py-8 mx-15">
          Copyright &copy; 2023 All rights reserved
        </div>
      </div>
    </footer>
  );
}
