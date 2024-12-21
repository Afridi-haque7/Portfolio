import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  nextsvg,
  python,
  reactjs,
  redux,
  tailwind,
  nextjs,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  university,
  guidance,
  instagram,
  github,
  linkedin,
  projectLogo1,
  projectLogo2,
  projectLogo3,
  projectLogo4,
  projectLogo5,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "nextjs",
    icon: nextsvg,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
];
const educations = [
  {
    title: "B.E. in CSE",
    institute_name: "Chandigarh University",
    icon: university,
    iconBg: "#383E56",
    date: "Aug 2020 - June 2024",
    marks: "7.91 CGPA out of 10",
  },
  {
    title: "10+2 Boards (WBCHSE)",
    institute_name: "Guidance Academy",
    icon: guidance,
    iconBg: "#383E56",
    date: "March 2018 - March 2020",
    marks: "93% marks in Science Stream",
  },
  {
    title: "10 Boards (WBBSE)",
    institute_name: "Guidance Academy",
    icon: guidance,
    iconBg: "#383E56",
    date: "Jan 2017 - Feb 2018",
    marks: "93% marks, Zonal Rank 1",
  },
];
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    title: "AutoCapGen Pro - Automatic Captions Generator",
    desc: "Autocapgen Pro is a dynamic platform that revolutionizes video captioning. Designed to simplify the upload, transcription, and download process for caption-less videos, the system leverages Next.js and AWS S3 to deliver lightning-fast results—reducing video processing time by 28%.",
    subdesc:
      "Beyond efficiency, the platform offers a polished, user-centric interface crafted with Tailwind CSS. It empowers users to edit transcriptions effortlessly, customize text attributes, and synchronize captions with timestamps.",
    href: "https://autocapgenpro-deploy.vercel.app",
    texture: "/textures/project/project1.mp4",
    logo: projectLogo1,
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: nextjs,
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: tailwind,
      },
      {
        id: 3,
        name: "JavaScript",
        path: javascript,
      },
      {
        id: 4,
        name: "AWS",
        path: mongodb,
      },
    ],
  },
  {
    title: "LiveDoc - Real-Time Google Docs Clone",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "www.example.com",
    texture: "/textures/project/project2.mp4",
    logo: projectLogo2,
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: nextjs,
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: tailwind,
      },
      {
        id: 3,
        name: "JavaScript",
        path: javascript,
      },
      {
        id: 4,
        name: "AWS",
        path: mongodb,
      },
    ],
  },
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "www.example.com",
    texture: "/textures/project/project3.mp4",
    logo: projectLogo3,
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: nextjs,
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: tailwind,
      },
      {
        id: 3,
        name: "JavaScript",
        path: javascript,
      },
      {
        id: 4,
        name: "AWS",
        path: mongodb,
      },
    ],
  },
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "www.example.com",
    texture: "/textures/project/project4.mp4",
    logo: projectLogo4,
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: nextjs,
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: tailwind,
      },
      {
        id: 3,
        name: "JavaScript",
        path: javascript,
      },
      {
        id: 4,
        name: "AWS",
        path: mongodb,
      },
    ],
  },
  {
    title: "Imaginify - AI Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://www.example.com",
    texture: "/textures/project/project5.mp4",
    logo: projectLogo5,
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: nextjs,
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: tailwind,
      },
      {
        id: 3,
        name: "JavaScript",
        path: javascript,
      },
      {
        id: 4,
        name: "AWS",
        path: mongodb,
      },
    ],
  },
];

const socials = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/afridi-haque-851924203/",
  },
  {
    name: "Github",
    icon: github,
    link: "https://github.com/Afridi-haque7",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/afridi_hq07/",
  },
];


export { socials, services, technologies, experiences, educations, projects };
