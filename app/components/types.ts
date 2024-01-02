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
    title: "About",
    link: "About",
  },
  {
    title: "Contact Us",
    link: "contact-us",
  },
  {
    title: "Events",
    link: "Events",
  },
];
