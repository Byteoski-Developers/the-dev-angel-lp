"use client";
import FullStackCourses from "@/app/courses/fullstack/page";
import { usePathname } from "next/navigation";

const MenuItems = [
  // { label: "Frontend", url: "/courses/frontend" },
  // { label: "Backend", url: "/courses/backend" },
  // { label: "Database", url: "/courses/database" },
  { label: "FullStack", url: "/courses/fullstack" },
  // { label: "UI/UX", url: "/courses/uiux" },
];

export default function CourseMenu() {
  const pathname = usePathname();
  return (
    <>
      <p>Select Course*</p>
      <div className="bg-gradient-to-r from-primaryOrange p-[2px] to-secondaryYellow rounded-lg">
        <div className="md:text-base w-full bg-white text-sm flex flex-wrap px-6 py-4 md:gap-0 gap-2 rounded-md md:overflow-hidden">
          {MenuItems.map((menuItem, index) => (
            <a key={index} href={menuItem.url}>
              <span
                // className={`border-r ${
                //   menuItem.url === pathname
                //     ? "text-primaryOrange font-bold"
                //     : ""
                // } md:pr-5 pr-2 md:mr-4 mr-2 border-black cursor-pointer`}
                className="text-primaryOrange font-bold"
              >
                {menuItem.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
