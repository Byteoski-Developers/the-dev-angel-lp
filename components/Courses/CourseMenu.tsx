const MenuItems = [
  { label: "Fontend", url: "/courses/fullstack" },
  { label: "Backend", url: "/courses/fullstack" },
  { label: "Database", url: "/courses/fullstack" },
  { label: "FullStack", url: "/courses/fullstack" },
  { label: "UI/UX", url: "/courses/fullstack" },
];

export default function CourseMenu() {
  return (
    <div className="bg-gradient-to-r from-primaryOrange p-[2px] to-secondaryYellow rounded-lg">
      <div className="md:text-base w-full bg-white text-sm flex flex-wrap  px-6 py-4 md:gap-0 gap-2  rounded-md md:overflow-hidden">
        {MenuItems.map((menuItem, index) => (
          <a
            key={index}
            href={menuItem.url}
            className="text-black hover:text-gray-500"
          >
            <span
              className={`border-r ${
                index === MenuItems.length - 1
                  ? "text-primaryOrange font-bold"
                  : ""
              } md:pr-5 pr-2 md:mr-4 mr-2 border-black cursor-pointer`}
            >
              {menuItem.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
