import {
  FaTelegram,
  FaYoutube,
  FaDiscord,
  FaSkype,
  FaGoogle,
  FaMailBulk,
  FaMailchimp
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "JavaScript",
    image: "https://techstack-generator.vercel.app/js-icon.svg",
    width: 80,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "https://techstack-generator.vercel.app/ts-icon.svg",
    width: 80,
    height: 65,
  },
  {
    skill_name: "Python",
    image: "https://techstack-generator.vercel.app/python-icon.svg",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Django",
    image: "https://techstack-generator.vercel.app/django-icon.svg",
    width: 65,
    height: 80,
  },

  {
    skill_name: "React",
    image: "https://techstack-generator.vercel.app/react-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "https://techstack-generator.vercel.app/redux-icon.svg",
    width: 67,
    height: 80,
  },
  {
    skill_name: "C#",
    image: "https://techstack-generator.vercel.app/csharp-icon.svg",
    width: 70,
    height: 85,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 55,
    height: 80,
  },
  {
    skill_name: "Gatsby",
    image: "https://techstack-generator.vercel.app/gatsby-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 55,
    height: 80,
  },

  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 60,
    height: 70,
  },

] as const;


export const FRONTEND_SKILL = [

  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Storybook",
    image: "https://techstack-generator.vercel.app/storybook-icon.svg",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Sass",
    image: "https://techstack-generator.vercel.app/sass-icon.svg",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 75,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 56,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "https://techstack-generator.vercel.app/github-icon.svg",
    width: 80,
    height: 60,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 40,
    height: 50,
  },
  {
    skill_name: "Prettier",
    image: "https://techstack-generator.vercel.app/prettier-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "ESLint",
    image: "https://techstack-generator.vercel.app/eslint-icon.svg",
    width: 65,
    height: 80,
  }

] as const;

export const BACKEND_SKILL = [

  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 50,
    height: 55,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 60,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "https://techstack-generator.vercel.app/mysql-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 65,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 65,
    height: 80,
  },
  {
    skill_name: "REST API",
    image: "https://techstack-generator.vercel.app/restapi-icon.svg",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "AWS",
    image: "https://techstack-generator.vercel.app/aws-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Nginx",
    image: "https://techstack-generator.vercel.app/nginx-icon.svg",
    width: 75,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 55,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 60,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Docker",
    image: "https://techstack-generator.vercel.app/docker-icon.svg",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "Vantor Company Website",
    description:
      'Designed and delivered full-stack, cloud-based services that integrated AI inference, large-scale sensor fusion, and geospatial data processing to support real-time spatial intelligence workflows.',
    image: "/projects/1.png",
    link: "https://vantor.com/",
  },
  {
    title: "Independence Pet Group (IPG) illustrations",
    description:
      'This project delivered 750+ playful AI-generated images for internal merchandise in under 12 hours. It used text-to-image tools and custom prompts to produce on-brand artwork quickly.',
    image: "/projects/2.png",
    link: "https://www.superside.com/blog/how-ipg-created-a-bank-of-ai-enhanced-illustrations-in-12h",
  },
  {
    title: "Quantum Research International",
    description:
      'Developed secure Python and Django backend services with REST APIs to support defense mission tools, improving system performance and enabling reliable operational dashboards.',
    image: "/projects/3.png",
    link: "https://www.quantum-intl.com/about.html",
  },
] as const;

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const SOCIALS = [
  {
    name: "Gmail",
    icon: SiGmail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=zane.mclean.521@outlook.com",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/zane-mc",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/zane-mclean-7813773a5",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "Gmail",
        icon: SiGmail,
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=zane.mclean.521@outlook.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/zane-mc",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/zane-mclean-7813773a5",
      },
    ],
  },
  // {
  //   title: "Social Media",
  //   data: [
  //     {
  //       name: "Telegram",
  //       icon: FaTelegram,
  //       link: "https://t.me/superdev",
  //     },
  //     {
  //       name: "Discord",
  //       icon: FaDiscord,
  //       link: "https://discord.gg/gnfMx4uY",
  //     },
  //     {
  //       name: "Skype",
  //       icon: FaSkype,
  //       link: "https://join.skype.com/invite/pTDpQyK9lx5a",
  //     },
  //     // {
  //     //   name: "Linkedin",
  //     //   icon: RxLinkedinLogo,
  //     //   link: "https://linkedin.com",
  //     // },
  //   ],
  // },
  // {
  //   title: "About",
  //   data: [
  //     {
  //       name: "Become Sponsor",
  //       icon: null,
  //       link: "https://youtube.com",
  //     },
  //     {
  //       name: "Learning about me",
  //       icon: null,
  //       link: "https://example.com",
  //     },
  //     {
  //       name: "Contact Me",
  //       icon: null,
  //       link: "mailto:hiwebdev0026@gmail.com",
  //     },
  //   ],
  // },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/zane-mc/Portfolio",
};
