export const personal = {
  name: "Matheus Riboli",
  role: "Engenheiro Frontend Sênior",
  tagline: "Crafting interfaces that feel inevitable.",
  location: "Ribeirão Preto, SP",
  email: "matheusvor@gmail.com",
  github: "https://github.com/matheusriboli",
  linkedin: "https://linkedin.com/in/matheusriboli",
  available: true,
};

export const skills = {
  frontend: [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Redux",
    "Zustand",
    "React Query",
    "Styled Components",
    "Tailwind CSS",
    "SASS",
    "Storybook",
  ],
  growing: [
    "Design System",
    "Arquitetura de Software",
    "Web Performance",
    "Acessibilidade",
    "Clean Code",
    "SOLID",
    "MCP para LLMs",
    "GitHub Copilot",
    "Cursor AI",
  ],
  tools: [
    "Git",
    "Github Actions",
    "Jest",
    "Cypress",
    "Vite",
    "Webpack",
    "Docker",
    "AWS",
    "Metodologias Ágeis",
  ],
};

export const languages = [
  { id: "1", language: "Português", fluency: "Nativo", level: 5 },
  { id: "2", language: "Inglês", fluency: "Avançado / Fluente", level: 4 },
];

export const education = [
  {
    id: "019d3ee5-5448-70f9-a49b-af46e77417d7",
    school: "Universidade Federal de Itajubá (UNIFEI)",
    degree: "Bacharelado em Engenharia de Computação",
    area: "Engenharia de Computação",
    period: "Jan 2018 – Dez 2022",
    location: "Itajubá, Minas Gerais",
    description: "",
  },
  {
    id: "019d3ee7-a1e8-728f-a809-2d21d8e12dc5",
    school: "Faculdade de Tecnologia Rocketseat",
    degree: "Pós-Graduação em Engenharia de Software",
    area: "Engenharia de Software",
    period: "Jan 2025 – Jun 2026",
    location: "EAD",
    description: "Frontend, Backend, Infraestrutura, IA e Produto.",
  },
];

export const experiences = [
  {
    id: "019d3ee3-8aaa-74dc-a1a5-d3b0bbb327a6",
    company: "GL Homes",
    role: "Engenheiro de Software Sênior",
    period: "Set 2022 – Atual",
    location: "Sunrise, FL – EUA (Remoto)",
    description:
      "Estruturei um design system abrangente e biblioteca de componentes reutilizáveis para múltiplos produtos web e mobile. Implementei um assistente de IA no portal da biblioteca com MCP customizado. Atuei no desenvolvimento cross-platform com React Native, integrando APIs complexas com performance fluida em iOS e Android.",
    tags: ["React", "React Native", "TypeScript", "Design System", "Storybook", "MCP", "AI"],
  },
  {
    id: "019d30e8-82f4-7027-9d23-01032ce15810",
    company: "People Interactive Brasil",
    role: "Desenvolvedor Frontend",
    period: "Abr 2022 – Set 2022",
    location: "Rio de Janeiro (Remoto)",
    description:
      "Desenvolvi nova plataforma para clientes da Energisa, entregando funcionalidades para solicitação de novas ligações — tornando acessível um processo anteriormente disponível apenas presencialmente.",
    tags: ["React", "TypeScript", "REST API"],
  },
  {
    id: "019d30e7-a537-743c-b60c-0f3df93f70b0",
    company: "BRASS Brasil",
    role: "Desenvolvedor Frontend",
    period: "Out 2021 – Abr 2022",
    location: "Belo Horizonte (Remoto)",
    description:
      "Desenvolvi plataforma interna de gestão com visualização 3D para plantas de engenharia. Mentorei novos desenvolvedores em ReactJS e criei protótipos de alta fidelidade no Figma.",
    tags: ["React", "TypeScript", "Three.js", "Figma"],
  },
  {
    id: "019d30e6-eb7e-77ec-8107-2465fdd73c83",
    company: "Grupo Artico",
    role: "Desenvolvedor Frontend",
    period: "Mar 2021 – Out 2021",
    location: "Itajubá (Remoto)",
    description:
      "Desenvolvi plataforma de comunicação entre prestadores e clientes com mensagens e videochamadas, e plataforma de autoatendimento para food service processando pedidos em tempo real.",
    tags: ["React", "WebRTC", "REST API"],
  },
  {
    id: "019d30e5-d954-754b-a48c-96c84ecc8fab",
    company: "Solver Tecnologias",
    role: "Desenvolvedor Frontend (Estágio)",
    period: "Jan 2021 – Mar 2021",
    location: "Itajubá, MG",
    description:
      "Desenvolvi aplicação frontend para monitoramento autônomo de estruturas com emissão de alertas preventivos. Implementei soluções para análise de dados em tempo real.",
    tags: ["React", "JavaScript", "REST API"],
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
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    name: "Design System",
    year: "2024",
    description:
      "Biblioteca de componentes React com Storybook, Tailwind e suporte a temas claro e escuro. Mais de 40 componentes documentados.",
    tags: ["React", "TypeScript", "Storybook", "Tailwind"],
    github: "#",
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
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    name: "E-commerce UI",
    year: "2023",
    description:
      "Interface de loja virtual com carrinho, favoritos e fluxo de checkout. Animações com Framer Motion.",
    tags: ["React", "Framer Motion", "Tailwind", "Zustand"],
    github: "#",
    live: "#",
    featured: false,
  },
];
