import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiOutlineSchedule,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Go, PHP, RDB, NoSQL, Docker, AWS, Terraform etc </b>",
  },
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Build a beautiful and scalable SPA using <b>TypeScript, Vue.js</b>   and <b>React.js</b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "Develop robust API using <b>REST</b>  & <b>Graphql</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver on <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Product management",
    about:
      "Proficient in contributing to the maximization of <b>product strategy and value</b>",
  },
  {
    Icon: AiOutlineSchedule,
    title: "Project management",
    about:
      "Expert in project planning, coordination, stakeholder communication, and project success.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Go",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "PHP",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "RDB",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "NoSQL",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Terraform",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Testing",
    level: "40",
  },
];

export const skills: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Software engineering",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Project management",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Defining product vision and strategy",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Understanding user needs",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Prioritizing product features",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "New business development",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "UI/UX design",
    level: "60",
  },
];

export const projects: IProject[] = [
  {
    name: "Syncfusion dashboard",
    description:
      "This application is designed as a dashboard that provides users with a comprehensive overview of their business operations.",
    image_path: "/images/syncfusion.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/syncfusion_dashboard",
    category: ["react"],
    key_techs: ["React", "Syncfusion", "TailwindCSS"],
  },
];
