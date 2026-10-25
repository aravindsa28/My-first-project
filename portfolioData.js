// Personal Portfolio Data & Configuration for Aravind S A
// Easily update any field here without touching the core UI components.

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface SkillItem {
  name: string;
  category: 'programming' | 'web';
  status: 'Learning' | 'Familiar with';
  description: string;
  iconName: string;
  highlightColor: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  institutionNote?: string;
  degree: string;
  period: string;
  status: string;
  subjectsOrInterests: string[];
  isEditablePlaceholder?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  tags: string[];
  githubUrl: string;
  liveDemoUrl: string;
  previewType: 'interactive' | 'image';
  completedFeatures: string[];
  plannedFeatures: string[];
}

export interface PortfolioConfig {
  identity: {
    name: string;
    monogram: string;
    role: string;
    badge: string;
    heroHeadline: string;
    heroSubheadline: string;
    bioShort: string;
    aboutHeadline: string;
    aboutParagraph: string;
    location: string;
  };
  socials: SocialLinks;
  aboutCards: Array<{
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    tag: string;
  }>;
  skills: SkillItem[];
  education: EducationItem[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioConfig = {
  identity: {
    name: "Aravind S A",
    monogram: "ASA",
    role: "Student & Aspiring Developer",
    badge: "COLLEGE STUDENT · ASPIRING DEVELOPER",
    heroHeadline: "Hi, I'm Aravind S A.",
    heroSubheadline: "Learning to code. Building with purpose.",
    bioShort:
      "A college student passionate about computer programming and web development. Currently deepening knowledge in Python, C, C++, and modern frontend technologies.",
    aboutHeadline: "A little about me.",
    aboutParagraph:
      "I am a college student actively developing my core programming and web development skills. Driven by curiosity and a desire to build purposeful software, I spend my time understanding computer science fundamentals, writing clean code, and creating responsive web interfaces.",
    location: "India",
  },

  socials: {
    github: "https://github.com/aravindsa28",
    linkedin: "https://www.linkedin.com/in/aravind-s-a-705a92446",
    email: "aravind@example.com",
  },

  aboutCards: [
    {
      title: "Current Focus",
      subtitle: "Programming Fundamentals",
      description:
        "Building a solid mental model in memory management, object-oriented concepts, and algorithms through C, C++, and Python.",
      icon: "Terminal",
      tag: "Foundation",
    },
    {
      title: "Technical Interests",
      subtitle: "Software & Web Technologies",
      description:
        "Exploring how modern client-side architectures work, responsive UI design systems, and efficient backend logic.",
      icon: "Layers",
      tag: "Exploration",
    },
    {
      title: "Personal Goal",
      subtitle: "Continuous Growth & Projects",
      description:
        "Continuously expanding my coding repertoire by shipping real projects, writing maintainable code, and preparing for future developer roles.",
      icon: "Target",
      tag: "Vision",
    },
  ],

  skills: [
    // Programming Languages
    {
      name: "Python",
      category: "programming",
      status: "Learning",
      description: "Writing scripts, understanding OOP principles, data structures, and problem-solving.",
      iconName: "FileCode2",
      highlightColor: "#38BDF8", // sky blue
    },
    {
      name: "C",
      category: "programming",
      status: "Learning",
      description: "Pointers, memory layout, control structures, and procedural programming basics.",
      iconName: "Cpu",
      highlightColor: "#818CF8", // indigo
    },
    {
      name: "C++",
      category: "programming",
      status: "Learning",
      description: "Classes, standard template library (STL), data structures, and performance concepts.",
      iconName: "Boxes",
      highlightColor: "#A78BFA", // violet
    },
    // Web Development
    {
      name: "HTML5",
      category: "web",
      status: "Familiar with",
      description: "Semantic document structure, accessibility standards, meta elements, and SEO markup.",
      iconName: "Layout",
      highlightColor: "#FB923C", // orange
    },
    {
      name: "CSS3",
      category: "web",
      status: "Familiar with",
      description: "Flexbox, CSS Grid, custom properties, responsive queries, and keyframe animations.",
      iconName: "Palette",
      highlightColor: "#60A5FA", // blue
    },
  ],

  education: [
    {
      id: "college-degree",
      institution: "Vel Tech Multi Tech",
      degree: "B.E. in Electronics and Communication Engineering (ECE)",
      period: "Present",
      status: "Ongoing",
      subjectsOrInterests: [
        "Programming in C/C++",
        "Python Programming",
        "Web Technologies",
        "Computer Fundamentals & Embedded Logic",
      ],
      isEditablePlaceholder: false,
    },
  ],

  projects: [
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      subtitle: "Cinematic dark developer showcase",
      description:
        "A responsive personal portfolio website engineered with clean typography, dynamic ambient lighting, interactive showcase elements, and accessible structure.",
      status: "In Progress",
      tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Responsive Design"],
      githubUrl: "#", // Update with your repository URL
      liveDemoUrl: "#", // Update with your deployment link
      previewType: "interactive",
      completedFeatures: [
        "Dark cinematic visual identity with fine noise & gradient mesh",
        "Responsive navigation with mobile drawer and active scroll spy",
        "Interactive technology cards grouped by language and web domains",
        "Structured education and customizable developer identity layout",
        "Functional interactive contact workflow with copy-to-clipboard",
      ],
      plannedFeatures: [
        "Blog & technical writing notes section",
        "Interactive code playground snippets",
        "Dynamic GitHub repository status integration",
      ],
    },
  ],
};
