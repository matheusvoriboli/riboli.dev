export const translations = {
  pt: {
    available: "Disponível",
    role: "Engenheiro Frontend Sênior",
    tagline: "Criando interfaces que parecem inevitáveis.",
    scroll: "Scroll",
    repoLabel: "Repositório",
    liveLabel: "Ver projeto ao vivo",
    nav: {
      skills: "Skills",
      experience: "Experiência",
      education: "Formação",
      projects: "Projetos",
      contact: "Contato",
    },
    skills: {
      title: "Skills",
      about:
        "Frontend engineer com foco em React e Next.js, apaixonado por criar interfaces que são ao mesmo tempo belas e performáticas. Expandindo para o ecossistema full-stack.",
      col1: "Frontend & Mobile",
      col2: "Arquitetura & IA",
      col3: "Ferramentas & DevOps",
    },
    experience: {
      title: "Experiência",
    },
    education: {
      title: "Formação",
      languages: "Idiomas",
    },
    projects: {
      title: "Projetos",
    },
    contact: {
      title: "Contato",
      cta1: "Vamos construir",
      cta2: "algo juntos",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  en: {
    available: "Available",
    role: "Senior Frontend Engineer",
    tagline: "Crafting interfaces that feel inevitable.",
    scroll: "Scroll",
    repoLabel: "Repository",
    liveLabel: "View live project",
    nav: {
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    skills: {
      title: "Skills",
      about:
        "Frontend engineer focused on React and Next.js, passionate about building interfaces that are both beautiful and performant. Expanding into the full-stack ecosystem.",
      col1: "Frontend & Mobile",
      col2: "Architecture & AI",
      col3: "Tools & DevOps",
    },
    experience: {
      title: "Experience",
    },
    education: {
      title: "Education",
      languages: "Languages",
    },
    projects: {
      title: "Projects",
    },
    contact: {
      title: "Contact",
      cta1: "Let's build",
      cta2: "something together",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
} as const;

export type Translations = typeof translations;
