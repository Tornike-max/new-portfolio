import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import imaginify from "@/public/imaginify.png";
import wildOasis from "@/public/wildOasis.png";
import zoomClone from "@/public/zoomclone.png";
import dashboard from "@/public/dashboard.png";
import photoapp from "@/public/photoapp.png";
import instagramClone from "@/public/instagramClone.png";
import graph from "@/public/graph.png";
import ozBank from "@/public/ozBank.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    id: 1,
    title: "Academy Of Digital Industries",
    location: "Tbilisi, Georgia",
    description:
      "I graduated from the academy, where I learned HTML, CSS, JavaScript and React.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    id: 2,
    title: "Digital Institute",
    location: "Tbilisi, Georgia",
    description:
      "I worked as a Teaching Assistant at a digital institute, Where i guided novice developers through assignments, ensuring their understanding and providing constructive feedback. ",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    id: 3,
    title: "The Ultimate React Course 2024: React, Redux & More",
    location: "...",
    description:
      "I took the React course on Udemy, from which I gained quite solid knowledge. I learned Redux, Tailwind, Styled Components and more.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    id: 4,
    title: "Skillwill",
    location: "Tbilisi, Georgia",
    description:
      "I took a course in Skillville where I learned Python, Django and SQL. During the course, we worked on a real project.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Imaginify",
    description:
      "Introducing a dynamic web application built using Next.js 14, Tailwind CSS, Shadcn UI, Cloudinary AI, Clerk, Stripe, and MongoDB. This innovative platform empowers users to effortlessly edit images, remove backgrounds or objects, and obtain custom-sized images like 3:4 or 9:16 aspect ratios, all in one seamless interface.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Mongo DB", "Clerk"],
    imageUrl: imaginify,
  },
  {
    title: "Zoom Clone",
    description:
      "Integrating Next.js, Clerk, Stream, and Tailwind CSS enables the creation of a Zoom clone application, offering modern web functionalities such as advanced user authentication, real-time chat, and responsive UI design.",
    tags: ["React", "Next.js", "Clerk", "Stream", "Tailwind Css"],
    imageUrl: zoomClone,
  },
  {
    title: "Photo app",
    description:
      "Explore and manipulate stunning images with this React-based photo app powered by the Unsplash API. Search for a wide range of images and perform various actions with ease, all enhanced by React Query for seamless data fetching. Tailwind CSS ensures a sleek and responsive user interface, making image discovery and interaction a delightful experience.",
    tags: ["React", "TypeScript", "React Query", "Tailwind"],
    imageUrl: photoapp,
  },
  {
    title: "Oz-Bank",
    description:
      "Check out my banking app built with React and Appwrite! It's got Material-UI for a clean interface and Recharts for cool charts. You can send money, check currency rates, apply for loans, and more.",
    tags: ["React", "Shadcn", "Appwrite", "Tailwind", "React Query"],
    imageUrl: ozBank,
  },
  {
    title: "Graph",
    description:
      "Welcome to Graph, the ultimate platform for photographers, videographers, video editors, and creatives alike. Discover exciting job opportunities, showcase your portfolio, and connect with a thriving community of professionals. With a sleek interface and powered by cutting-edge technologies like React, Appwrite, Tailwind CSS, and more.",
    tags: ["React", "Next UI", "Appwrite", "Tailwind", "React Query"],
    imageUrl: graph,
  },
  {
    title: "Dashboard",
    description:
      "My dashboard project, built using React and a combination of UI libraries including Material UI, Ant Design, and Next UI, showcases a seamless integration of diverse design elements. With features like a dynamic Kanban board, the project offers an intuitive and visually appealing interface for managing tasks efficiently.",
    tags: ["React", "Material UI", "Ant Design", "Tailwind", "React Query"],
    imageUrl: dashboard,
  },
  {
    title: "SnapGram",
    description:
      "Introducing my Instagram clone application, a dynamic platform built entirely with React and powered by Appwrite. This immersive clone brings to life the essence of Instagram, allowing users to engage with posts via liking, unliking, following, and unfollowing functionalities. Experience infinite scroll for seamless browsing through a stream of captivating content. With a focus on user interaction, this project embodies the core features of Instagram, offering a familiar yet innovative social media experience.",
    tags: ["React", "Appwrite", "Shadcn UI", "Tailwind", "React Query"],
    imageUrl: instagramClone,
  },
  {
    title: "Wild Oasis",
    description:
      "The Wild OasisApp. My app is built with the latest technologies to ensure a smooth and enjoyable user experience. Backend: I rely on the Supabase platform to handle the data and logic behind the scenes. Frontend: For my user-friendly and responsive frontend, I turn to the power of React, React Query, and React Router DOM. Styled Components provide a sleek and modern design, while React Hook Form simplifies data input.",
    tags: ["React", "Appwrite", "Styled Components", "Tailwind", "React Query"],
    imageUrl: wildOasis,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Tailwind",
  "Styled Components",
  "Git",
  "PHP",
  "MySQL",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
