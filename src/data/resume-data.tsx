import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Luis Ignacio Collantes",
  initials: "LC",
  location: "Santiago RM, Chile, GMT-3",
  locationLink:
    "https://www.google.com/maps/place/Santiago,+Regi%C3%B3n+Metropolitana,+Chile",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "Fullstack developer with 5+ years of experience involved in the whole development lifecycle using the Javascript ecosystem. In my experience, I’ve worked extensively in both frontend and backend, but also desktop and mobile apps. I’m very passionate about startups, and my skills are mainly focused on high-speed product creation and iteration.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/30051417?s=400&u=d9b467d2c99a192ea0fcc2d49da1a672b72922d0&v=4",
  personalWebsiteUrl: "https://luisignacio.cc",
  contact: {
    email: "luisignacioccp@gmail.com",
    tel: "+56935351405",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/luisignaciocc",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luisignaciocc/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/luisignaciocc",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Los Ándes",
      degree: "Bachelor's Degree in Engineering",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "500 Global",
      link: "https://500.co/",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      start: "2022",
      end: "Present",
      description:
        "500 Global is a venture capital firm with more than $2.7 billion¹ in assets under management that invests in founders building fast-growing technology companies. As a product team member, I’m responsible for building and maintaining the 500 FounderHub, a platform that provides tools and support to our portfolio companies as they grow their startup. In my role, I am responsible for developing and maintaining the platform's front-end and back-end, participating in code reviews, and helping to define user stories. I was the first member of the team and had the opportunity to make some critical architectural decisions, as well as  the tools used to build the MVP platform. Now I work closely with a team of +5 with different roles to shape the direction of the platform and contribute to its growth as it becomes an essential resource for 500 Global's portfolio companies.",
    },
    {
      company: "Aukko",
      link: "https://www.aukko.cl/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2020",
      end: "2022",
      description:
        "Business intelligence company dedicated to government public auctions analysis. Working in a technical team of two people improving and maintaining the existing codebase, from the data collection phase to the client visualization phase.",
    },
    {
      company: "Youtouch",
      link: "https://youtouch.cl/",
      badges: [],
      title: "Full Stack Developer",
      start: "2019",
      end: "2020",
      description:
        "Development agency, working mainly on healthcare-related projects with solid use of real-time communication technologies.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js/Nest.js",
    "Python",
    "Docker",
  ],
  projects: [
    {
      title: "CEGIR Dashboard",
      techStack: ["React", "TypeScript", "Next.js", "Tailwind", "OpenLayers"],
      description:
        "pplication developed in collaboration with the Catholic University of Chile with the purpose of, from a single operational point, monitoring, collecting, analyzing, and sharing information between institutions and from and to the public.",
      link: {
        label: "Press note",
        href: "https://puertoie.com/lanzamos-el-centro-de-gestion-integrada-regional-cegir/",
      },
    },
    {
      title: "Rehabilitación Postcovid",
      techStack: ["React", "TypeScript", "Next.js", "MaterialUI", "Loopback4"],
      description:
        "Web application promoted by Teleton and created to aid in the recovery of people who have had covid-19. It has been used by over 10,000 people, mainly from Chile (82,24%).",
      link: {
        label: "Press note",
        href: "https://www.teleton.cl/noticias/guia-virtual-de-rehabilitacion-para-pacientes-recuperados-de-covid-19/",
      },
    },
    {
      title: "Pokedex",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description:
        "A pokédex built with Next.js. It uses the PokéAPI to fetch data and display it in a beautiful way.",
      link: {
        label: "pokedex",
        href: "https://pokedex.luisignacio.cc/",
      },
    },
  ],
} as const;
