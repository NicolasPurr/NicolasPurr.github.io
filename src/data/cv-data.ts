import type { Education, Work, Exchange, Grade, Identity, TechSkill } from "./interfaces";

const MIMUW_LINK = "https://usosweb.mimuw.edu.pl/kontroler.php?_action=katalog2/przedmioty/pokazPrzedmiot&prz_kod=";
const SGH_LINK = "https://usosweb.sgh.waw.pl/kontroler.php?_action=katalog2/przedmioty/pokazPrzedmiot&prz_kod=";

// --- The Data ---
export const personalInfo: Identity = {
    name: "Mikołaj Kot",
    email: "mikolaj.kot@tuta.com",
    location: "Singapore -> Warsaw -> Paris",
    highlights: [
      "Cybersecurity enthusiast",
      "Dual-degree student",
      "Basketball official"
    ]
  };

export const professionalDescription = "\
Dual-degree Computer Science & Quantitative Methods student bridging technical rigour with business acumen. \
Experience in IT security and automation at Accenture, where I re-engineered legacy tools into \
high-performance solutions. Multi-national basketball official with a proven record of high-stakes \
decision-making. Focused on software security and cryptology.\
";

export const languages: { name: string; level: number; label: string }[] = [
    { name: "Polish", level: 6, label: "Native" },
    { name: "English", level: 6, label: "Bilingual" },
    { name: "Spanish", level: 5, label: "Advanced" },
    { name: "French", level: 4, label: "Intermediate" }
];

export const techSkills: TechSkill[] = [
    { name: "Python", level: "Advanced", focus: "Security Tooling & Automation" },
    { name: "Rust", level: "Competent", focus: "Cryptology" },
    { name: "Excel VBA", level: "Advanced", focus: "Data manipulation and reporting" },
    { name: "Bash", level: "Competent", focus: "Scripting" },
    //{ name: "SQL", level: "Competent", focus: "Optimised database querying" },
    //{ name: "JavaScript", level: "Competent", focus: "Web development" },
];

export const softSkills: string[] = [
    "Communication",
    "Leadership",
    "Analytical thinking",
    "Problem-solving",
    "Adaptability"
];

export const passions: string[] = [
    "Cybersecurity",
    "Privacy",
    "Basketball",
    "Poetry",
    "Red Hot Chili Peppers"
];

export const academicData: Education[] = [
    {
      uni: "University of Warsaw (MIMUW)",
      degree: "BSc Computer Science",
      location: "Warsaw, Poland",
      status: "ongoing",
      duration: "2023 - 2027",
      description: "Algorithmics, cryptology, and software security.",
      mainGrades: [
        { name: "Cryptography I", inProgress: true, curriculumUrl: `${MIMUW_LINK}1000-2M24KI1` },
        { name: "Cybersecurity Operations", inProgress: true, curriculumUrl: `${MIMUW_LINK}1000-2M24OC` },
        { name: "Information theory", inProgress: true, curriculumUrl: `${MIMUW_LINK}1000-2N03TI` },
        { name: "Introduction to Cybersecurity and Cryptography", score: 5.0, curriculumUrl: `${MIMUW_LINK}1000-2M24WCK` },
        { name: "Applied Cryptography", score: 5.0, curriculumUrl: `${MIMUW_LINK}1000-2M25KST` },
        { name: "Web applications", score: 5.0, curriculumUrl: `${MIMUW_LINK}1000-214bWWW` },
        { name: "Modern web applications", score: 5.0, curriculumUrl: `${MIMUW_LINK}1000-2M24WAW` },
        { name: "Database Systems", score: "5!", curriculumUrl: `${MIMUW_LINK}1000-213bBD` },
        { name: "Computer Networks", score: 4.5, curriculumUrl: `${MIMUW_LINK}1000-214bSIK` }
      ],
      exchange: {
        institution: "EFREI",
        location: "Paris, France",
        duration: "upcoming",
        status: "upcoming",
        mainGrades: [ ]
      }
    },
    {
      uni: "SGH Warsaw School of Economics",
      degree: "BSc Quantitative Methods in Economics & Information Systems",
      location: "Warsaw, Poland",
      status: "ongoing",
      duration: "2023 - 2026",
      description: "Data analysis, econometrics, and information systems management.",
      mainGrades: [
        { name: "Analysis and Design of Information Systems I", score: 5.0, curriculumUrl: `${SGH_LINK}120521-D` },
        { name: "Analysis and Design of Information Systems II", score: 5.0, curriculumUrl: `${SGH_LINK}121420-D` },
        { name: "e-Banking", score: 5.0, curriculumUrl: `${SGH_LINK}136171-D` },
        { name: "Survey Methods", score: 4.5, curriculumUrl: `${SGH_LINK}121560-D` },
        { name: "Econometrics I", score: 4.5, curriculumUrl: `${SGH_LINK}120730-D` }
      ],
      exchange: {
        institution: "Nanyang Technological University",
        location: "Singapore",
        duration: "January 2026 - May 2026",
        status: "ongoing",
        mainGrades: [
            { name: "Software Security", inProgress: true },
            { name: "Computer Security", inProgress: true },
            { name: "IOT: Communication & Networking", inProgress: true },
            { name: "Creative Writing: Poetry", inProgress: true },
            { name: "Organisational Behaviour & Design", inProgress: true }
        ]
      }
    },
    {
      uni: "Delft University of Technology",
      degree: "BSc Computer Science and Engineering",
      location: "Delft, Netherlands",
      status: "resigned",
      duration: "2022 - 2023",
      description: "Despite having decided to abandon my studies at TU Delft, I look back on my stay in the Netherlands as a period of intellectual and emotional growth.",
      mainGrades: [
      ],
    }
  ];
  
  export const workData: Work[] = [
    {
      company: "WOZKosz & Nederlandse Basketball Bond",
      role: "Basketball Official",
      duration: "Dec 2019 - Present (Season 22/23 @ NBB)",
      status: "ongoing",
      description: [ 
        "Collaborated with diverse officiating crews across international youth tournaments (Riga, Gothenburg), adapting to various communication styles and establishing authority in foreign-language environments.",
        "Managed game flow and conflict resolution in competitive environments.",
        "Translated rule changes from English to Polish for local referees.",
        "Led training sessions for junior officials."
      ]
    },
    {
      company: "Accenture",
      role: "SAP Security Delivery Associate",
      duration: "Aug 2024 - Apr 2025",
      status: "completed",
      description: [
        "Worked within a globally distributed, culturally diverse team.",
        "Identified critical inefficiencies in an internal team tool. Inspected and re-engineered the algorithmic logic (Excel VBA), transforming it into an optimised, maintainable, and scalable solution.",
        "Automated team operational workflows via custom scripts (Python) and dynamic progress trackers (Excel), significantly reducing manual overhead.",
      ],
      skills: ["SAP Security", "Automation", "Python"]
    },
  ];