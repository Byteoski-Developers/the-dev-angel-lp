export type navlink = {
  link: string;
  title: string;
};

export type navLinks = navlink[];
export const links: navLinks = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "Courses",
    link: "courses",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Contact Us",
    link: "contact-us",
  },
  {
    title: "Events",
    link: "events",
  },
];
