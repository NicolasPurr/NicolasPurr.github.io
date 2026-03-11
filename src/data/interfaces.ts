
  export interface Identity {
    name: string;
    email: string;
    location: string;
    highlights: string[];
  }

  export interface TechSkill {
    name: string;
    level: "Proficient" | "Advanced" | "Familiar" | "Competent"; 
    focus: string;
  }

  export interface Grade {
    name: string;
    score?: string | number;
    inProgress?: boolean;
    curriculumUrl?: string;
  }
  
  export interface Exchange {
    status: "ongoing" | "completed" | "upcoming";
    institution: string;
    location: string;
    duration: string;
    mainGrades: Grade[];
  }
  
  export interface Education {
    status: "ongoing" | "completed" | "upcoming" | "resigned";
    uni: string;
    degree: string;
    location: string;
    duration: string;
    description: string;
    mainGrades: Grade[]; // Required for active/completed
    exchange?: Exchange;
  };
  
  export interface Work {
    status: "ongoing" | "completed";
    company: string;
    role: string;
    duration: string;
    description: string[];
    skills?: string[];
  }