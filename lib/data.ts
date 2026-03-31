export const personal = {
  name: "Matheus Riboli",
  role: "Software Developer",
  tagline: "Crafting interfaces that feel inevitable.",
  location: "Brasil",
  email: "matheus@riboli.dev", // TODO: update
  github: "https://github.com/matheusriboli", // TODO: update
  linkedin: "https://linkedin.com/in/matheusriboli", // TODO: update
  available: true,
};

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
    "HTML5",
    "CSS3 / Sass",
  ],
  growing: [
    "Node.js",
    "REST APIs",
    "PostgreSQL",
    "Prisma",
  ],
  tools: [
    "Git",
    "Figma",
    "VS Code",
    "Vercel",
  ],
};

export const experiences = [
  {
    id: 1,
    company: "Empresa Atual", // TODO: update
    role: "Frontend Developer",
    period: "2023 — Presente",
    description:
      "Desenvolvimento de interfaces modernas com React e Next.js. Responsável pela arquitetura de componentes, performance e experiência do usuário em produtos com alta escala.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Empresa Anterior", // TODO: update
    role: "Frontend Developer Jr.",
    period: "2021 — 2023",
    description:
      "Criação e manutenção de biblioteca de componentes reutilizáveis. Integração com APIs REST e colaboração próxima com times de design e produto.",
    tags: ["React", "JavaScript", "CSS", "REST API"],
  },
  {
    id: 3,
    company: "Freelance",
    role: "Frontend Developer",
    period: "2020 — 2021",
    description:
      "Desenvolvimento de landing pages e sites institucionais para pequenas e médias empresas. Foco em conversão e performance.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Project Alpha",
    year: "2024",
    description:
      "Aplicação full-stack para gestão de tarefas com interface minimalista, autenticação e sincronização em tempo real.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "#", // TODO: update
    live: "#", // TODO: update
    featured: true,
  },
  {
    id: 2,
    name: "Design System",
    year: "2024",
    description:
      "Biblioteca de componentes React com Storybook, Tailwind e suporte a temas claro e escuro. Mais de 40 componentes documentados.",
    tags: ["React", "TypeScript", "Storybook", "Tailwind"],
    github: "#", // TODO: update
    live: null,
    featured: true,
  },
  {
    id: 3,
    name: "Dashboard Analytics",
    year: "2023",
    description:
      "Dashboard de métricas em tempo real com gráficos interativos, filtros dinâmicos e exportação de relatórios.",
    tags: ["Next.js", "Recharts", "TypeScript", "REST API"],
    github: "#", // TODO: update
    live: "#", // TODO: update
    featured: false,
  },
  {
    id: 4,
    name: "E-commerce UI",
    year: "2023",
    description:
      "Interface de loja virtual com carrinho, favoritos e fluxo de checkout. Animações com Framer Motion.",
    tags: ["React", "Framer Motion", "Tailwind", "Zustand"],
    github: "#", // TODO: update
    live: "#", // TODO: update
    featured: false,
  },
];
