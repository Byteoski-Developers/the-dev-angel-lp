export interface ICurriculumData {
  id: number;
  title: string;
  bubbleText: string;
  description: string;
  topicsList: string[];
}

export const curriculumData: ICurriculumData[] = [
  {
    id: 0,
    title: "Fundamentals",
    bubbleText: "Week 1-3",
    description:
      "This module lays the groundwork for understanding the SAAS industry and its technologies, guiding students through fundamental concepts and industry practices.",
    topicsList: [
      "Understanding Tech and SAAS",
      "Introduction to SAAS and Indie Hacking",
      "Introduction to Software Development",
      "How to think and plan a product",
      "Software release cycles",
      "Distribution via Web/Native apps/embedded platforms",
      "Git and Github"
    ],
  },
  {
    id: 1,
    title: "Frontend Development",
    bubbleText: "Week 4-6",
    description:
      "This module focuses on frontend development essentials, teaching students the key skills needed to build user interfaces effectively.",
    topicsList: [
      "Introduction to Frontend Development",
     " UX and why does it matter",
    "  Tailwind and basics of React/Next.js",
     " Building hands-on components",
      "Chrome Dev Tools, Error handling",
      "UI State management",
      "Understanding React Hooks",
     " Libraries to manage the state"
    ],
  },
  // {
  //   id: 2,
  //   title: "Data Structures",
  //   bubbleText: "Week 7-9",
  //   description:
  //     "This module helps you take your first steps towards becoming a successful coder. You will be introduced to computer programming as you learn about programming languages, how computer programs work, and how to build programming logic using Pseudocode.",
  //   topicsList: [
  //     "Introduction to Programming",
  //     "Syntax and Pseudocode",
  //     "Introduction to Programming",
  //     "Introduction to Fullstack Development",
  //     "Linux Essentials",
  //   ],
  // },
  {
    id: 2,
    title: "Backend Development",
    bubbleText: "Week 7-9",
    description:
      "This module introduces students to backend development concepts and practices, preparing them to build robust server-side systems.",
    topicsList: [
      "Why do we need Backend",
      "Communication Between UI and Servers",
      "API's and Strategies to communicate with UI",
      "DataBase Design, Schema Design",
      "Structural Migrations amd Data Migrations",
      "Common Backend Interview Scenarios",
      "Rate Limiters, Authentications and Payment Gateways",
    ],
  },
  {
    id: 3,
    title: "Testing & Deployment",
    bubbleText: "Week 10-11",
    description:
      "This module covers essential testing and deployment strategies, equipping students with the skills to ensure the reliability and scalability of their applications",
    topicsList: [
      "Automated testing strategies",
      "Deployment Strategies",
      "Performance Testing",
      "Infrastructure as a Code for Deployments",
      "Deployment Automation Tools",
    ],
  },
  {
    id: 4,
    title: "Level Up Your Skills",
    bubbleText: "Week 12-13",
    description:
      "This module focuses on enhancing students' networking, marketing, and promotional skills, empowering them to succeed as independent developers",
    topicsList: [
      "Advanced Networking Techniques for scaling applications",
      "User Feedback Collection and Analysis",
      "Building Community around SAAS product",
      "Advanced Analytics for SAAS products",
      "Interview Preparation",
    ],
  },
];
