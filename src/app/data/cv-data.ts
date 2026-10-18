export interface ContactInfo {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
}

export interface SkillGroup {
    category: string;
    items: string[];
}

export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string[];
}

export interface ProjectItem {
    name: string;
    summary: string;
    bullets: string[];
}

export interface EducationItem {
    degree: string;
    school: string;
    period: string;
}

export interface PortfolioProfile {
    name: string;
    role: string;
    headline: string;
    contact: ContactInfo;
    summary: string;
    professionalSummary: string;
    technicalSkills: string[];
    skillGroups: SkillGroup[];
    experience: ExperienceItem[];
    projects: ProjectItem[];
    education: EducationItem[];
    languages: string[];
}

export const cvProfile: PortfolioProfile = {
    name: 'Muhammad Nehad',
    role: 'Fullstack Angular/.NET Developer',
    headline: 'Software Engineer | Fullstack Angular/.NET Developer',
    contact: {
        location: 'Cairo, Egypt',
        phone: '+201149540777',
        email: 'muhammadnehad96@gmail.com',
        linkedin: 'https://www.linkedin.com/in/muhammad-nehad-baa4a6163',
    },
    summary:
        'Detail-oriented and results-driven Fullstack Angular/.NET Developer with 5+ years of experience in software delivery, integration, and modernization.',
    professionalSummary:
        'A detail-oriented and results-driven Fullstack Angular/.NET Developer with 5+ years of experience in the full software development lifecycle. Proficient in building robust APIs using ASP.NET Core and developing dynamic user interfaces with Angular. Proven ability to integrate software components, troubleshoot, debug, and deliver clean, efficient, and scalable code based on specifications.',
    technicalSkills: [
        'C#',
        'ASP.NET Core',
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'jQuery',
        'Microsoft SQL Server',
        'Entity Framework Core',
        'LINQ',
        'ADO.NET',
        'Git',
        'GitHub',
        'SignalR',
        'Problem Solving',
    ],
    skillGroups: [
        { category: 'Backend', items: ['C#', 'ASP.NET Core', 'SignalR'] },
        { category: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'] },
        { category: 'Data & ORM', items: ['Microsoft SQL Server', 'Entity Framework (EF Core)', 'LINQ', 'ADO.NET'] },
        { category: 'Workflow', items: ['Git', 'GitHub', 'Problem Solving'] },
    ],
    experience: [
        {
            title: 'Developer (.NET Developer)',
            company: 'Best Top Systems',
            period: 'April 2020 – Present',
            description: [
                'Developed and deployed clean, efficient code for new programs and systems using C# and ASP.NET Core, adhering to project specifications.',
                'Integrated various software components and third-party programs to enhance system functionality and interoperability.',
                'Actively engaged in troubleshooting, debugging, and upgrading existing software to improve performance and stability.',
                'Utilized SQL Server, LINQ, and Entity Framework Core for data management and interaction.',
                'Collaborated on testing and deployment strategies for new and existing programs.',
            ],
        },
    ],
    projects: [
        {
            name: 'ACUD Web Application',
            summary: 'Web application for ACUD (New Capital Company), enabling building developers to review, provide, and receive formal papers.',
            bullets: [
                'Built a robust backend using .NET Core Web API to handle data submission, review, and management.',
                'Delivered a responsive front end with Angular for document workflows and user interactions.',
            ],
        },
        {
            name: 'EL ADL Reservation — Ministry of Justice, Egypt',
            summary: 'Medical reservation system for judges under the Ministry of Justice, Egypt.',
            bullets: [
                'Contributed to development and enhancement of features for a medical reservation application used by judges.',
                'Developed front-end functionality using Angular and RESTful APIs with ASP.NET Core Web API.',
                'Collaborated on implementing application features and ensuring smooth communication between front-end and backend systems.',
            ],
        },
        {
            name: 'Exhibition Management System',
            summary: 'System for communication and workflow between contractors, exhibitors, and exhibition organizers.',
            bullets: [
                'Built a robust backend using ASP.NET Core Web API to support data submission, review, processing, and management.',
                'Developed the front-end application using Angular and implemented user-facing workflows.',
                'Designed and generated business reports using RDLC for sales orders and proforma invoices.',
                'Implemented functionality for managing transactions, sales orders, proforma invoices, and reporting.',
            ],
        },
        {
            name: 'RISE Application',
            summary: 'Consultancy platform connecting people with career experts, including a major technology migration.',
            bullets: [
                'Initially maintained and improved Android and iOS mobile versions using Xamarin Native.',
                'Spearheaded modernization by migrating the stack to .NET Core API, Angular portal, and Flutter mobile apps.',
                'Collaborated on the legacy .NET Framework client web application and API modernization effort.',
            ],
        },
    ],
    education: [
        {
            degree: "Bachelor's Degree, Business Information Systems",
            school: 'Helwan University',
            period: 'September 2013 – January 2018',
        },
    ],
    languages: ['Arabic (Native)', ' English (average)'],
};
