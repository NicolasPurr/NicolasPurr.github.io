import type { Education, Exchange, Grade, Identity, Project, TechSkill, Work } from "./interfaces";

const MIMUW_LINK = "https://usosweb.mimuw.edu.pl/kontroler.php?_action=katalog2/przedmioty/pokazPrzedmiot&prz_kod=";
const SGH_LINK = "https://usosweb.sgh.waw.pl/kontroler.php?_action=katalog2/przedmioty/pokazPrzedmiot&prz_kod=";

// --- The Data ---
export const personalInfo: Identity = {
    name: "Mikołaj Kot",
    email: "mikolaj.kot@tuta.com",
    location: "Warsaw",
    highlights: [
      "Cybersecurity enthusiast",
      "Dual-degree student",
      "Basketball official"
    ]
  };

export const professionalDescription = "\
Dual-degree Computer Science (MIMUW) and Quantitative Methods (SGH) student specialising in \
cryptography and software security. I combine a strong background in algorithms and data processing \
with high-stakes decision-making and communication skills developed as a basketball official.";


export const languages: { name: string; level: number; label: string }[] = [
    { name: "Polish", level: 6, label: "Native" },
    { name: "English", level: 6, label: "Bilingual" },
    { name: "Spanish", level: 5, label: "Advanced" },
    { name: "French", level: 4, label: "Intermediate" }
];

export const techSkills: TechSkill[] = [
    { name: "Rust", level: "Competent", focus: "Cryptology" },
    { name: "Python", level: "Advanced", focus: "Security Tooling & Automation" },
    { name: "Bash", level: "Competent", focus: "Scripting" },
    { name: "SQL", level: "Competent", focus: "Optimised database querying" },
    //{ name: "Excel VBA", level: "Expert", focus: "Data manipulation and reporting" },
    //{ name: "JavaScript", level: "Competent", focus: "Web development" },
];

export const softSkills: string[] = [
    "Leadership",
    "Conflict resolution",
    "Problem-solving",
    "Stakeholder management",
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
      description: "Cryptology, software security, and algorithmics.",
      mainGrades: [
        { name: "Cryptography I", inProgress: true, curriculumUrl: `${MIMUW_LINK}1000-2M12KI1&lang=en` },
        { name: "Information theory", score: "5!", curriculumUrl: `${MIMUW_LINK}1000-2N03TI&lang=en` },
        { name: "Introduction to Cybersecurity and Cryptography", score: 5.0, curriculumUrl: `${MIMUW_LINK}1000-2M24WCK&lang=en` },
        { name: "Applied Cryptography", score: 5.0, curriculumUrl: `${MIMUW_LINK}1000-2M25KST&lang=en` },
        { name: "Cybersecurity Operations", score: 3.5, curriculumUrl: `${MIMUW_LINK}1000-2M24OC&lang=en` },
        { name: "Web applications", score: 5.0, curriculumUrl: `${MIMUW_LINK}1000-214bWWW&lang=en` },
        { name: "Modern web applications", score: 5.0, curriculumUrl: `${MIMUW_LINK}1000-2M24WAW&lang=en` },
        { name: "Database Systems", score: "5!", curriculumUrl: `${MIMUW_LINK}1000-213bBD&lang=en` },
        { name: "Computer Networks", score: 4.5, curriculumUrl: `${MIMUW_LINK}1000-214bSIK&lang=en` },
      ],
      /*exchange: {
        institution: "EFREI",
        location: "Paris, France",
        duration: "upcoming",
        status: "upcoming",
        mainGrades: [ ]
      }*/
    },
    {
      uni: "SGH Warsaw School of Economics",
      degree: "BSc Quantitative Methods in Economics & Information Systems",
      location: "Warsaw, Poland",
      status: "ongoing",
      duration: "2023 - 2026",
      description: "Data analysis, econometrics, and information systems management.",
      mainGrades: [
        { name: "Analysis and Design of Information Systems I", score: 5.0, curriculumUrl: `${SGH_LINK}120521-D&lang=en` },
        { name: "Analysis and Design of Information Systems II", score: 5.0, curriculumUrl: `${SGH_LINK}121420-D&lang=en` },
        { name: "e-Banking", score: 5.0, curriculumUrl: `${SGH_LINK}136171-D&lang=en` },
        { name: "Survey Methods", score: 4.5, curriculumUrl: `${SGH_LINK}121560-D&lang=en` },
        { name: "Econometrics I", score: 4.5, curriculumUrl: `${SGH_LINK}120730-D` }
      ],
      exchange: {
        institution: "Nanyang Technological University",
        location: "Singapore",
        duration: "January 2026 - May 2026",
        status: "completed",
        grade: "4.42/5.0",
        mainGrades: [
            { name: "Software Security", score: "A+", },
            { name: "Computer Security", score: "A+", },
            { name: "Organisational Behaviour & Design", score: "A+", },
            { name: "IOT: Communication & Networking", score: "C", },
        ]
      }
    },
    {
      uni: "Delft University of Technology",
      degree: "BSc Computer Science and Engineering",
      location: "Delft, Netherlands",
      status: "resigned",
      duration: "2022 - 2023",
      description: "Completed foundational coursework before transferring to Poland to pursue a double degree.",
      mainGrades: [
      ],
    },
    {
      uni: "Stefan Batory High School in Warsaw",
      degree: "International Baccalaureate",
      location: "Warsaw, Poland",
      status: "completed",
      grade: "43/45",
      duration: "2019 - 2022",
      description: "Mathematics, economics, and languages.",
      mainGrades: [
        { name: "Mathematics: Analysis and Approaches HL", score: 7 },
        { name: "Economics HL", score: 7 },
        { name: "Physics HL", score: 6 },
        //{ name: "English B HL", score: 7 },
        //{ name: "Polish A: Language and Literature SL", score: 6 },
        //{ name: "French B SL", score: 7 },
        //{ name: "Extended Essay (English B)", score: "A" },
        //{ name: "Theory of Knowledge", score: "B" }
      ],
    }
  ];
  
  export const workData: Work[] = [
    {
      company: "Accenture",
      role: "SAP Security Delivery Associate",
      duration: "Aug 2024 - Apr 2025",
      status: "completed",
      description: [
        "Developed Python and VBA scripts to securely download, split, and parse client server files into Excel, enforcing strict format validation rules and building visual dashboards to track real-time project stages under team SLAs.",
        "Re-engineered core data processing logic to O(n log n), achieving a 99% reduction in processing execution time} and enabling the tool to seamlessly process security data for multinational enterprise clients.",
        "Collaborated within a globally distributed team to implement SAP security modules (GRC, IAM) and deliver compliance documentation for international business units.",
        //"Optimised core algorithmic logic for large-scale data processing tools, reducing execution time by 99% and ensuring scalability.",
        //"Automated team operational workflows via custom scripts (Python) and dynamic progress trackers (Excel), significantly reducing manual overhead.",
        //"Contributed to SAP security delivery within a globally distributed, multi-cultural team.",
      ],
      skills: ["SAP Security", "Automation", "Python"]
    },
    {
      company: "WOZKosz & Nederlandse Basketball Bond",
      role: "Basketball Official",
      duration: "Dec 2019 - Present (Season 22/23 @ NBB)",
      status: "ongoing",
      description: [
        "Served as Crew Chief for the 2023 National U-18 Men’s Final in the Netherlands, managing high-pressure game flow and official crew.",
        "Officiated international youth tournaments (Riga, Gothenburg), establishing authority and clear communication in foreign-language and high-tension environments.",
        "Analysed and translated complex FIBA regulatory documents from English to Polish for the local sports association. Led onboarding sessions for junior officials.",
      ]
    },
  ];

  export const projectsData: Project[] = [
    {
      name: "Civic Wallet Architecture",
      type: "Academic Project",
      tags: ["Rust", "Kotlin", "Cryptography", "Zero-Knowledge Proofs"],
      status: "ongoing",
      link: "https://github.com/nicolaspurr/civic-wallet",
      linkLabel: "View GitHub",
      description: [
        "Designed mobile app architecture and implemented the cryptographic pipeline to generate Groth16 zk-SNARK proofs for CBDC payments on mobile devices.",
      ]
    },
    {
      name: "Crypto Learning: Cryptopals Solutions (Rust)",
      type: "Academic Project",
      tags: ["Rust", "Cryptography", "Cryptanalysis"],
      status: "ongoing",
      link: "https://github.com/nicolaspurr/ryoc-crypto",
      linkLabel: "View GitHub",
      description: [
        "Built a custom cryptographic primitive library and CLI tool in Rust to solve Cryptopals challenges.",
        "Implemented core cryptographic structures from scratch to analyse vulnerabilities and write functional exploits."
      ]
    },
    {
      name: "Home Lab: Zero-Trust Network Architecture",
      type: "Personal Project",
      tags: ["Network Security", "Mikrotik", "Firewall Configuration"],
      status: "completed",
      description: [
        "Designed and deployed a micro-segmented (VLANs) network architecture on MikroTik hardware.",
        "Created secure SSH/TLS access paths for remote management of network devices."
      ]
    },
];