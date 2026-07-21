import type { Lang } from '@/i18n/LanguageContext'

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Habilidades',
      experience: 'Experiência',
      education: 'Formação',
      contact: 'Contato',
    },
    header: {
      cta: 'Contato',
      openMenu: 'Abrir menu',
    },
    hero: {
      eyebrow: 'Olá, eu sou',
      role: 'Desenvolvedor Fullstack',
      paragraph1:
        'Construo aplicações web completas — do banco de dados à interface. Trabalho principalmente com TypeScript, React e Node.js, com experiência prática também em Java e Spring Boot.',
      paragraph2:
        'Atualmente em busca de uma posição júnior em Londrina, modelo híbrido ou remoto.',
      ctaProjects: 'Ver projetos',
      ctaCv: 'Baixar CV',
    },
    about: {
      eyebrow: 'Sobre mim',
      title: 'Quem sou eu',
      paragraphs: [
        'Estou cursando Engenharia de Software na UniFil, com uma base técnica anterior pelo curso técnico em Informática no Senac Londrina.',
        'Fiz um estágio em desenvolvimento fullstack na Enova Educacional, onde integrei um time de 5 pessoas na construção do MVP de uma plataforma corporativa B2B — minha primeira experiência real de desenvolvimento em equipe, com code review, entregas em sprint e decisões técnicas discutidas em grupo.',
        'Hoje meu foco é o ecossistema TypeScript, mas gosto de entender o problema de ponta a ponta: da modelagem do banco até a experiência de quem usa a tela. Foi por isso que construí o OpenFeed também com um backend em Java e Spring Boot — para não depender de uma única stack para pensar em arquitetura.',
      ],
      cta: 'Conheça o OpenFeed',
    },
    projects: {
      eyebrow: 'Portfólio',
      title: 'Projetos em destaque',
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Habilidades',
    },
    experience: {
      eyebrow: 'Trajetória',
      title: 'Experiência profissional',
      role: 'Estagiário de Desenvolvimento Fullstack — Enova Educacional',
      period: 'nov/2025 - abr/2026',
      summary:
        'Integrei um time de 5 desenvolvedores na construção do MVP de uma plataforma corporativa B2B, atuando tanto no frontend quanto no backend da aplicação.',
      bullets: [
        'Entreguei cerca de 10 interfaces responsivas com Next.js e React.js, integradas a endpoints em Nest.js e PostgreSQL, garantindo fidelidade aos protótipos do Figma em diferentes dispositivos.',
        'Garanti acesso restrito aos colaboradores autorizados ao implementar autenticação corporativa em duas camadas, integrando Supabase Auth à validação cruzada em PostgreSQL local.',
        'Apoiei a tomada de decisão dos clientes ao transformar milhares de registros do PostgreSQL em gráficos interativos, desenvolvendo um dashboard analítico com Recharts.',
      ],
    },
    education: {
      eyebrow: 'Estudos',
      title: 'Formação acadêmica',
      items: [
        {
          course: 'Engenharia de Software',
          institution: 'UniFil (Centro Universitário Filadélfia)',
          status: 'Em andamento',
          period: 'set/2024 - jul/2028',
        },
        {
          course: 'Técnico em Informática',
          institution: 'Senac Londrina',
          status: 'Concluído',
          period: 'ago/2022 - jul/2024',
        },
      ],
    },
    contact: {
      eyebrow: 'Vamos conversar',
      title: 'Contato',
      paragraph1:
        'Estou disponível para posições júnior em Londrina, modelo híbrido ou remoto, e também aberto a projetos freelance.',
      paragraph2: 'Se meu perfil fizer sentido para uma vaga ou um projeto, vamos conversar.',
      ctaEmail: 'Enviar e-mail',
    },
    footer: {
      text: 'Desenvolvido por Fernando com React, Tailwind CSS e deploy na Vercel. © 2026',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    header: {
      cta: 'Contact',
      openMenu: 'Open menu',
    },
    hero: {
      eyebrow: "Hi, I'm",
      role: 'Fullstack Developer',
      paragraph1:
        'I build complete web applications — from the database to the interface. I work mainly with TypeScript, React and Node.js, with hands-on experience in Java and Spring Boot as well.',
      paragraph2: 'Currently looking for a junior position in Londrina, hybrid or remote.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
    },
    about: {
      eyebrow: 'About me',
      title: 'Who I am',
      paragraphs: [
        "I'm studying Software Engineering at UniFil, with a prior technical foundation from the Information Technology program at Senac Londrina.",
        'I did a fullstack development internship at Enova Educacional, where I joined a team of 5 people building the MVP of a B2B corporate platform — my first real experience of team development, with code review, sprint deliveries and technical decisions discussed as a group.',
        "Today my focus is the TypeScript ecosystem, but I like understanding the problem end-to-end: from database modeling to the experience of whoever uses the screen. That's why I also built OpenFeed with a Java and Spring Boot backend — so I wouldn't depend on a single stack to think about architecture.",
      ],
      cta: 'Check out OpenFeed',
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Featured projects',
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Skills',
    },
    experience: {
      eyebrow: 'Journey',
      title: 'Professional experience',
      role: 'Fullstack Development Intern — Enova Educacional',
      period: 'Nov/2025 - Apr/2026',
      summary:
        'I joined a team of 5 developers building the MVP of a B2B corporate platform, working on both the frontend and backend of the application.',
      bullets: [
        'Delivered around 10 responsive interfaces with Next.js and React.js, integrated with Nest.js and PostgreSQL endpoints, ensuring fidelity to Figma prototypes across devices.',
        'Secured access for authorized staff by implementing two-layer corporate authentication, integrating Supabase Auth with cross-validation in a local PostgreSQL database.',
        'Supported client decision-making by turning thousands of PostgreSQL records into interactive charts, building an analytics dashboard with Recharts.',
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic background',
      items: [
        {
          course: 'Software Engineering',
          institution: 'UniFil (Centro Universitário Filadélfia)',
          status: 'In progress',
          period: 'Sep/2024 - Jul/2028',
        },
        {
          course: 'Information Technology (Technical)',
          institution: 'Senac Londrina',
          status: 'Completed',
          period: 'Aug/2022 - Jul/2024',
        },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: 'Contact',
      paragraph1:
        "I'm available for junior positions in Londrina, hybrid or remote, and also open to freelance projects.",
      paragraph2: "If my profile makes sense for a role or a project, let's talk.",
      ctaEmail: 'Send email',
    },
    footer: {
      text: 'Built by Fernando with React, Tailwind CSS and deployed on Vercel. © 2026',
    },
  },
} satisfies Record<Lang, unknown>

export type Translations = typeof translations.pt
