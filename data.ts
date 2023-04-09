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
  {
    name: "Twitter app",
    description:
      "This is a Twitter clone application that enables you to tweet, reply, and engage with other users, utilizing TypeScript, React, and Firebase. Additionally, the application includes Google account authentication to ensure secure access to your account.",
    image_path: "/images/twitter-app.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/firebase-react-ts-twitter-app",
    category: ["typescript", "react"],
    key_techs: ["TypeScript", "React.js", "firebase", "HTML", "CSS"],
  },
  {
    name: "Video api with jwt & swagger",
    description:
      "This is an example API created with Go, featuring JWT authentication for enhanced security and Swagger for simplified documentation.",
    image_path: "/images/video-api-jwt-swagger.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/video-api-jwt-swagger",
    category: ["go"],
    key_techs: ["Go", "Docker", "Swagger", "JWT"],
  },
  {
    name: "Fire Extinguisher Rental",
    description:
      "This is one of the craziest apps in the world but a user-friendly application designed to help you purchase fire extinguishers with ease.",
    image_path: "/images/fire-extinguisher-rental.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/fire-extinguisher-rental",
    category: ["vue"],
    key_techs: ["Vue.js", "Nuxt.js", "JavaScript"],
  },
  {
    name: "Shuya Life Web",
    description:
      "This website serves as a platform to showcase an individual or business's collection of work and accomplishments. It offers a visually appealing and organized presentation of projects, products, or services, demonstrating the creator's skills, experience, and capabilities. ",
    image_path: "/images/shuya-life-web.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/shuya-life-web",
    category: ["react", "typescript"],
    key_techs: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    name: "Dad Jokes",
    description:
      "This is a Dad Joke application developed using Nuxt.js and Vue.js, providing you with a hilarious collection of Dad Jokes to brighten up your day.",
    image_path: "/images/dadjokes-nuxt.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/dadjokes-nuxt",
    category: ["vue"],
    key_techs: ["Vue.js", "Nuxt.js", "JavaScript"],
  },
  {
    name: "Dictionary cli",
    description:
      "This is a CLI-based application where you can add a word, its definition, and category to a database.",
    image_path: "/images/dictionary-cli.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/dictionary-cli",
    category: ["go"],
    key_techs: ["Go", "cobra", "promptui", "sqlite"],
  },
  {
    name: "Golang scraper",
    description:
      "This application is designed to perform web scraping operations using Go. With its powerful scraping capabilities, the application allows you to efficiently extract relevant data from websites, which can be used for various purposes such as data analysis and research.",
    image_path: "/images/golang-scraper.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/golang-scraper",
    category: ["go"],
    key_techs: ["Go", "gocolly"],
  },
  {
    name: "PDF generator",
    description:
      "This application enables you to easily generate PDF documents by inputting information into customizable templates. With its flexible features and intuitive design, the application allows you to create professional-looking PDFs tailored to your specific needs and requirements, making the document creation process quick and effortless.",
    image_path: "/images/pdf-gen.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/pdf-gen",
    category: ["go"],
    key_techs: ["Go", "Maroto"],
  },
  {
    name: "Reaction timer",
    description:
      "This is a game that tests your reaction time by measuring how quickly you can respond after a timer starts.",
    image_path: "/images/reaction-timer.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/vue-reaction-timer",
    category: ["vue"],
    key_techs: ["Vue.js", "HTML", "Javascript"],
  },
  {
    name: "Project kanban board",
    description:
      "This is a user-friendly Kanban board application designed for efficient management of your development tasks through intuitive manipulation.",
    image_path: "/images/project-kanban-board.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/project-kanban-board",
    category: ["typescript"],
    key_techs: ["TypeScript", "HTML", "CSS"],
  },
  {
    name: "TODO app",
    description:
      "This is a straightforward To-Do list application developed using React.js and TypeScript.",
    image_path: "/images/todo-app.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/react-ts-todoapp",
    category: ["typescript", "react"],
    key_techs: ["TypeScript", "React.js", "HTML", "CSS"],
  },
  {
    name: "Quick website",
    description:
      "This is a powerful application that enables you to quickly build a website using HUGO, a popular open-source static site generator. With its intuitive interface and customizable features, the application streamlines the website-building process, making it easy for users to create professional-looking sites in a matter of minutes.",
    image_path: "/images/quick-website.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/quick-website",
    category: ["others"],
    key_techs: ["HTML", "Scss", "HUGO", "TailwindCSS"],
  },
  {
    name: "Matrix",
    description:
      "This is an application that allows you to experience the iconic Matrix screen effect, as seen in the movie.",
    image_path: "/images/matrix.png",
    deployed_url: "/",
    github_url: "https://github.com/shylabo/matrix",
    category: ["others"],
    key_techs: ["HTML", "JavaScript"],
  },
];
