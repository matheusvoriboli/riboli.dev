export const personal = {
  name: "Matheus Riboli",
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
  {
    id: "1",
    language: "Português",
    fluency: { pt: "Nativo", en: "Native" },
    level: 5,
  },
  {
    id: "2",
    language: "Inglês",
    fluency: { pt: "Avançado / Fluente", en: "Advanced / Fluent" },
    level: 4,
  },
];

export const education = [
  {
    id: "019d3ee5-5448-70f9-a49b-af46e77417d7",
    school: "Universidade Federal de Itajubá (UNIFEI)",
    degree: {
      pt: "Bacharelado em Engenharia de Computação",
      en: "Bachelor's in Computer Engineering",
    },
    period: { pt: "Jan 2018 – Dez 2022", en: "Jan 2018 – Dec 2022" },
    location: "Itajubá, Minas Gerais",
    description: { pt: "", en: "" },
  },
  {
    id: "019d3ee7-a1e8-728f-a809-2d21d8e12dc5",
    school: "Faculdade de Tecnologia Rocketseat",
    degree: {
      pt: "Pós-Graduação em Engenharia de Software",
      en: "Postgraduate in Software Engineering",
    },
    period: { pt: "Jan 2025 – Jun 2026", en: "Jan 2025 – Jun 2026" },
    location: "EAD",
    description: {
      pt: "Frontend, Backend, Infraestrutura, IA e Produto.",
      en: "Frontend, Backend, Infrastructure, AI, and Product.",
    },
  },
];

export const experiences = [
  {
    id: "019d3ee3-8aaa-74dc-a1a5-d3b0bbb327a6",
    company: "GL Homes",
    role: {
      pt: "Engenheiro de Software Sênior",
      en: "Senior Software Engineer",
    },
    period: { pt: "Set 2022 – Atual", en: "Sep 2022 – Present" },
    location: "Sunrise, FL – USA (Remote)",
    description: {
      pt: "Estruturei um design system abrangente e biblioteca de componentes reutilizáveis para múltiplos produtos web e mobile. Implementei um assistente de IA no portal da biblioteca com MCP customizado. Atuei no desenvolvimento cross-platform com React Native, integrando APIs complexas com performance fluida em iOS e Android.",
      en: "Built a comprehensive design system and reusable component library across multiple web and mobile products. Implemented an AI assistant in the component library portal using a custom MCP. Developed cross-platform React Native apps with complex API integrations for iOS and Android.",
    },
    tags: ["React", "React Native", "TypeScript", "Design System", "Storybook", "MCP", "AI"],
  },
  {
    id: "019d3ee3-finaya-74dc-a1a5-d3b0bbb327a6",
    company: "Finaya",
    badge: { pt: "contrato", en: "contract" },
    role: {
      pt: "Engenheiro de Software Sênior",
      en: "Senior Software Engineer",
    },
    period: { pt: "Jan 2024 – Atual", en: "Jan 2024 – Present" },
    location: "Barueri (Remote)",
    description: {
      pt: "Engenharia de front-end para plataforma banking web e aplicativos móveis transacionais em arquitetura white label. Integrei IA (Claude) diretamente na esteira de CI/CD para automatizar deploys e gerar release notes dinamicamente. Gerenciei o ciclo de vida completo dos apps móveis, orquestrando distribuição contínua na App Store e Play Store.",
      en: "Frontend engineering for a banking web platform and transactional mobile apps in a white-label architecture. Integrated AI (Claude) directly into the CI/CD pipeline to automate deployments and dynamically generate release notes. Managed the full mobile app lifecycle, orchestrating continuous delivery to the App Store and Play Store.",
    },
    tags: ["React", "React Native", "TypeScript", "Banking", "CI/CD", "MobileOps", "AI"],
  },
  {
    id: "019d30e8-82f4-7027-9d23-01032ce15810",
    company: "People Interactive Brasil",
    role: {
      pt: "Desenvolvedor Frontend",
      en: "Frontend Developer",
    },
    period: { pt: "Abr 2022 – Set 2022", en: "Apr 2022 – Sep 2022" },
    location: "Rio de Janeiro (Remote)",
    description: {
      pt: "Desenvolvi nova plataforma para clientes da Energisa, entregando funcionalidades para solicitação de novas ligações — tornando acessível um processo anteriormente disponível apenas presencialmente.",
      en: "Developed a new platform for Energisa clients, delivering features for requesting new utility connections — making a previously in-person-only process accessible online.",
    },
    tags: ["React", "TypeScript", "REST API"],
  },
  {
    id: "019d30e7-a537-743c-b60c-0f3df93f70b0",
    company: "BRASS Brasil",
    role: {
      pt: "Desenvolvedor Frontend",
      en: "Frontend Developer",
    },
    period: { pt: "Out 2021 – Abr 2022", en: "Oct 2021 – Apr 2022" },
    location: "Belo Horizonte (Remote)",
    description: {
      pt: "Desenvolvi plataforma interna de gestão com visualização 3D para plantas de engenharia. Mentorei novos desenvolvedores em ReactJS e criei protótipos de alta fidelidade no Figma.",
      en: "Built an internal management platform with 3D visualization for engineering blueprints. Mentored junior developers in ReactJS and created high-fidelity Figma prototypes.",
    },
    tags: ["React", "TypeScript", "Three.js", "Figma"],
  },
  {
    id: "019d30e6-eb7e-77ec-8107-2465fdd73c83",
    company: "Grupo Artico",
    role: {
      pt: "Desenvolvedor Frontend",
      en: "Frontend Developer",
    },
    period: { pt: "Mar 2021 – Out 2021", en: "Mar 2021 – Oct 2021" },
    location: "Itajubá (Remote)",
    description: {
      pt: "Desenvolvi plataforma de comunicação entre prestadores e clientes com mensagens e videochamadas, e plataforma de autoatendimento para food service processando pedidos em tempo real.",
      en: "Built a communication platform for service providers and clients with messaging and video calls, and a self-service food service platform processing orders in real time.",
    },
    tags: ["React", "WebRTC", "REST API"],
  },
  {
    id: "019d30e5-d954-754b-a48c-96c84ecc8fab",
    company: "Solver Tecnologias",
    badge: { pt: "estágio", en: "intern" },
    role: {
      pt: "Desenvolvedor Frontend",
      en: "Frontend Developer",
    },
    period: { pt: "Jan 2021 – Mar 2021", en: "Jan 2021 – Mar 2021" },
    location: "Itajubá, MG",
    description: {
      pt: "Desenvolvi aplicação frontend para monitoramento autônomo de estruturas com emissão de alertas preventivos. Implementei soluções para análise de dados em tempo real.",
      en: "Developed a frontend application for autonomous structure monitoring with preventive alerts. Implemented real-time data analysis solutions.",
    },
    tags: ["React", "JavaScript", "REST API"],
  },
];

export const projects = [
  {
    id: 1,
    name: "vScout",
    year: "2024",
    description: {
      pt: "Plataforma gamificada de análise esportiva para futebol. O app mobile permite upload de vídeos de embaixadinhas, que são processados por visão computacional (YOLO + OpenCV) para detectar a bola, contar toques, identificar fraudes e gerar um ranking competitivo entre jogadores.",
      en: "Gamified sports analysis platform for football. The mobile app lets players upload juggling videos, which are processed by computer vision (YOLO + OpenCV) to detect the ball, count touches, flag fraud, and generate a competitive leaderboard.",
    },
    tags: ["React Native", "Expo", "React", "Vite", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "BullMQ", "Redis", "Python", "YOLO", "OpenCV", "Docker", "AWS S3"],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 2,
    name: "Wise Path",
    year: "2025",
    description: {
      pt: "Plataforma de aprendizado guiado por IA. Usuários descobrem e interagem com 'mentores' — prompts de IA curados por criadores e aprovados editorialmente — que conduzem sessões de aprendizado personalizadas via chat, com suporte a GraphQL e integração com o modelo Groq.",
      en: "AI-guided learning platform. Users discover and interact with 'mentors' — AI prompts curated by creators and editorially approved — that lead personalized learning sessions via chat, backed by GraphQL and Groq model integration.",
    },
    tags: ["React", "Vite", "TanStack Router", "TanStack Query", "Apollo", "GraphQL", "Radix UI", "Tailwind v4", "Fastify", "Drizzle ORM", "PostgreSQL", "Groq", "TypeScript"],
    github: null,
    live: null,
    featured: true,
  },
];
