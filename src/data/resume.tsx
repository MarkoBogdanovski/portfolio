import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Marko Bogdanovski",
  initials: "MB",
  url: "https://markobogdanovski.com",
  location: "Pančevo, Serbia",
  locationLink: "https://www.google.com/maps/place/belgrade",
  description:
    "Senior Software Engineer.",
  summary:
    "I specialize in building SaaS applications. My core competency lies in complete management of new project development, focusing on custom-tailored apps and services for businesses. I constantly seek new opportunities to leverage my skills and experience to help companies achieve their goals. ",
  avatarUrl: "/marko-bogdanovski.jpg",
  skills: [
    "React",
    "Svelte",
    "Nest.js",
    "Express.js",
    "RxJS",
    "Typescript",
    "PostgreSQL",
    "MySQL",
    "Oracle DB",
    "Monorepo",
    "Azure (OpenAI, AI Search, Document Intelligence, Blob Storage, Cognitive)",
    "AWS (S3 Bucket, EC2, Route 53)",
    "MongoDB",
    "Docker",
    "Laravel",
    "Tailwind"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mr.bogdanovski@gmail.com",
    tel: "#",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/markobogdanovski/",
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/markobogdanovski",
        icon: Icons.github,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/Marko Bogdanovski Resume.pdf",
        icon: Icons.file,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CHI Software",
      href: "https://www.chisw.com/",
      badges: ["SvelteKit", "WebSockets", "Ag Grid", "Monorepo", "Tailwind", "Typescript", "AWS", "DuckDB",  "GitLab"],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/chisw.png",
      start: "September 2024",
      end: "Currently",
      description:  [
        "Drafting and developing new features for our analytics platform.",
        "Developing new components (fiscal year picker for form and Ag grid integration, feature access query builder selector...)",
        "Developed workspace feature to speed up checkout times for generating reports."
      ]
    },
    {
      company: "Ledger Leopard",
      href: "https://ledgerleopard.com/",
      badges: ["NextJS", "NestJS", "RxJS", "OpenAI", "Azure AI Search", "Azure Cognitive Services", "Azure Document Intelligence", "Azure Blob Storage", "MongoDB", "Monorepo", "Typescript", "Auth0"],
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "/ledger_leopard_logo.jpeg",
      start: "August 2023",
      end: "March 2024",
      description: [
        "Conducted in-depth analysis to identify and optimize platform bottlenecks, improving overall code performance and workflow efficiency.",
        "Developed new features integrating OpenAI and Azure Services.",
        "Built Azure AI Document Intelligence workers for document processing.",
        "Created a Scraper and Parser worker service for business websites as a resource for ChatBot.",
        "Integrated User Roles and Policy management into the existing codebase.",
        "Implemented social logins using Auth0",
      ]
    },
    {
      company: "Elemental",
      badges: ["React", "NextJS", "NodeJS", "GraphQL", "Tanstack Query", "Zustand", "PostgreSQL", "JWT Auth", "Docker", "AWS EC2", "AWS S3 Storage", "Vercel"],
      href: "https://sendelemental.com",
      location: "Remote",
      title: "Frontend Lead",
      logoUrl: "/sendelemental_logo.jpeg",
      start: "Jun 2021",
      end: "Aug 2023",
      description: [
        "Managed systems with nearly 100 million campaigns, ensuring stability and scalability of services.",
        "Collaborated closely with the CTO and management to define and optimize feature release cycles.",
        "Coordinated frontend team to align them with the timeline and the product vision.",
        "Set up and integrated S3 and Lambda services for asset storage, resizing, and parsing.",
        "Interviewed and onboarded new team members alongside the CTO.",
        "Led the development of key platform features such as Journeys (Automated Workflows) and Campaigns.",
        "Collaborated with the CTO to build a platform from the ground up, managing timelines and setting strategic directions.",
        "Worked with developers from Beefree and React Flow libraries to address security risks and suggest core-level improvements for feature implementation.",
      ]
    },
    {
      company: "Momnt",
      badges: ["VueJS", "NuxtJS", "Tailwind", "Figma", "Typescript", "Gitlab CI/CD"],
      href: "https://sendelemental.com",
      location: "Remote",
      title: "Senior Frontend Developer",
      logoUrl: "/momnt.svg",
      start: "January 2020",
      end: "June 2021",
      description: [
        "Developing platform components from Figma.",
        "Developed onboarding and fraud check widgets for the clients' websites.",
      ]
    },
    {
      company: "Serbia BroadBand",
      href: "https://sbb.rs/",
      badges: ["Symfony 2", "Zend 1", "OnApp", "Javascript", "jQuery", "Oracle DB", "JWT Auth", "WebSockets"],
      location: "Belgrade, Serbia",
      title: "Software Engineer",
      logoUrl: "/sbb_serbia_broadband_logo.jpeg",
      start: "August 2016",
      end: "December 2019",
      description: [
        "Lead redesign of Hosting and Cloud Platform.",
        "Conducted thorough testing and implemented robust solutions, including 3D secure payment gateway and User microservice for cross-platform systems.",
        "Developed features for a Cloud Hosting Platform using the OnApp platform, including Remote Terminal Console, Disk Resizing, Automated OS Installation, and Server & Disk Renaming.",
        "Collaborated with network engineers and system administrators to deploy product instances for Montenegro and Bosnia & Herzegovina.",
        "Gained expertise in cross-domain session handling, ensuring secure and seamless user experiences.",
      ],
    },
  ],
  education: [
    {
      school: "Electrical Engineering High School ”Nikola Tesla”",
      href: "https://etsntesla.edu.rs/",
      degree: "High School Diploma, Multimedia",
      logoUrl: "/ets nikola tesla.png",
      start: "",
      end: "",
    },
    {
      school: "University of Belgrade, School of Electrical Engineering",
      href: "https://etsntesla.edu.rs/",
      degree: "Bachelor's degree, Information Technology",
      logoUrl: "/etf.jpeg",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Obba",
      href: "https://www.producthunt.com/products/obba-store",
      dates: "Sep 2019 - Aug 2020",
      active: false,
      description:
        "Developed multi vendor e-commerce platform.",
      technologies: [
        "Laravel",
        "NuxtJS",
        "Vuex",
        "Gitlab CI/CD",
        "EC2",
        "S3",
        "Docker",
        "PostgreSQL",
        "Tailwind",
        "Socket.io"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.producthunt.com/products/obba-store",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dwl9ar0hz/video/upload/f_webm,vc_vp9,q_auto/v1724614434/w45jzs4k2fvj0pvsesqm",
    },
    {
      title: "Glorious CMS",
      href: "https://glorious.free.nf",
      dates: "February 2016",
      active: true,
      description:
        "Developed back in 2016 for a hackaton for the university scholarship.",
      technologies: [
        "PHP",
        "jQuery",
        "Bootstrap",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://glorious.free.nf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dwl9ar0hz/video/upload/f_webm,vc_vp9,q_auto/v1724614368/rueqfc4o5jssbmfctcf4",
    },
  ]
} as const;
