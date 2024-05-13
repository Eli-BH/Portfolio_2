import { AboutSectionItemI } from "./types";
import { AboutSectionEnum } from "./enums";
import { ExperienceCardI, ExperienceIconObjectI } from "./interfaces";

export const aboutArrs: AboutSectionItemI[] = [
  {
    title: "Full-Stack Developer",
    description: `
      I am a Full-Stack Developer with 5 years of experience in
      building web applications. I specialize in TypeScript,
      JavaScript, React, and AWS.
      `,
    icon: "/images/full-stack.png",
    section: AboutSectionEnum.Full,
  },
  {
    title: "Mobile Developer",
    description: `
      I am a Mobile Developer with 2 years of experience in
      building cross-platform apps. I specialize in React Native
      and Kotlin.
      `,
    icon: "/images/development.png",
    section: AboutSectionEnum.Mobile,
  },
  {
    title: "Photography",
    description: `
      I am a passionate photographer with a focus on nature,
      urban, and street photography.
      `,
    icon: "/images/camera.png",
    section: AboutSectionEnum.Photography,
  },
];

export const experienceIcons: ExperienceIconObjectI[] = [
  {
    title: "HTML 5",
    icon: "/images/html.png",
  },
  {
    title: "CSS 3",
    icon: "/images/css-3.png",
  },
  {
    title: "React",
    icon: "/images/structure.png",
  },
  {
    title: "Kotlin",
    icon: "/images/android.png",
  },
  {
    title: "Mongo DB",
    icon: "/images/mongo.png",
  },
  {
    title: "SQL",
    icon: "/images/sql.png",
  },
  {
    title: "Tailwind Css",
    icon: "/images/tailwind.png",
  },
  {
    title: "Bootstrap",
    icon: "/images/bootstrap.png",
  },
  {
    title: "Salesforce",
    icon: "/images/salesforce.png",
  },
];

export const experienceCards: ExperienceCardI[] = [
  {
    title: "Full-Stack Developer - FreedomCare",
    subtitle: "Oct 2021 - Apr 2024",
    list: [
      "Optimized UI and backend connectivity for the FreedomCare Plus Android app.",
      "Led development of the NextJS-based MySteps portal, growing user base by over 12,000.",
      "Directed CDPAP Connect app development, impacting 100+ caregivers.",
    ],
    image: "/images/freedomcareny_logo.jpg",
  },
  {
    title: "Technical Lead - Commit to Green",
    subtitle: "Jun 2021 - Oct 2021",
    list: [
      "Managed end-to-end development of four eco-friendly apps.",
      "Optimized UI/UX and backend designs for better user satisfaction.",
      "Provided critical updates to the CEO, aligning projects with goals.",
    ],
    image: "/images/commit_to_green_logo.jpg",
  },
  {
    title: "Software Engineer - PlateRate",
    subtitle: "Jun 2019 - Jun 2021",
    list: [
      "Architected CRM improvements for data management.",
      "Migrated app to React JS and NoSQL, reducing latency by 30%.",
      "Improved deployment cycles with Agile and DevOps practices.",
    ],
    image: "/images/platerate_logo.jpg",
  },
];
