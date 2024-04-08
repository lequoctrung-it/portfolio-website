import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Ton Duc Thang University",
    position: "Bachelor's degree",
    description:
      "Here I built a solid foundation in the information technology industry, my major at school is computer networks and data communications.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2019 - Present",
  },
  {
    title: "INTEK Training JSC",
    position: "Starter Programming Scholarship",
    description:
        "I got a scholarship for the course with related skill sets: Unix Shell Basic, Git Basic, Python Basic. And completed a Hackathon.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Bosch Global Software Technologies Vietnam",
    position: "Front-end Developer Intern",
    description:
      "I have an internship as a Front-end developer for 6 months. I collaborated with teams and clients to gather requirements, integrated Microsoft Power BI as a third-party application, and developed software following Scrum Agile methodologies, enhancing my teamwork and communication skills while analyzing user needs.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022 - Dec 2022",
  },
  {
    title: "Bosch Global Software Technologies Vietnam",
    position: "Software Engineer",
    description:
      "I'm now a full-time software engineer. My stack includes Angular, Spring Boot, TypeScript, Java, and SQL. I'm open to freelance opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Redux",
  "Node.js",
  "Git",
  "Bootstrap",
  "Spring Boot",
  "Java",
] as const;
