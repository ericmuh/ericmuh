export type PortfolioProject = {
  id: string;
  name: string;
  category: string;
  icon: "briefcase" | "book" | "route" | "activity" | "network" | "store" | "sprout" | "globe";
  description: string;
  stack: string[];
  scope: string[];
  note?: string;
  source?: string;
};

export const selectedProjects: PortfolioProject[] = [
  {
    id: "kaazi",
    name: "Kaazi",
    category: "SERVICE MARKETPLACE · MOBILE + API",
    icon: "briefcase",
    description: "A connected service platform with separate apps for workers and employers, taking a job from request and assignment through progress, completion, and feedback.",
    stack: ["React Native", "Expo", "Django REST"],
    scope: ["Employer booking and worker assignment flows", "Worker profiles, document records, and training progress", "Job states, ratings, and earnings records"],
    note: "Worker app, employer app, and API presented as one platform."
  },
  {
    id: "scoris-library",
    name: "Scoris Digital Library",
    category: "EDUCATION · DIGITAL READING",
    icon: "book",
    description: "A digital library connecting student reading with librarian administration. A local catalog and cloud synchronization bring books, PDF reading, and student management into one portal.",
    stack: ["React", "PHP", "PostgreSQL", "PDF"],
    scope: ["Student and librarian interfaces", "Book categories, catalog management, and PDF reading", "Local catalog fallback and cloud synchronization"],
    note: "The local catalog remains available while cloud catalog data synchronizes."
  },
  {
    id: "fleet-operations",
    name: "Fleet & Driver Operations",
    category: "OPERATIONS · ROLE-BASED WORKFLOWS",
    icon: "route",
    description: "An operations workspace for drivers, shift leaders, and administrators, bringing driver logs, shift oversight, vehicle management, and reporting into distinct role-based interfaces.",
    stack: ["React", "TypeScript", "Django"],
    scope: ["Driver dashboards, log history, and personal records", "Shift leader status and reporting screens", "Administration for drivers, vehicles, analytics, and settings"],
    note: "Role-specific views connect daily driver activity with shift oversight."
  },
  {
    id: "tradeops",
    name: "TradeOps",
    category: "FINANCIAL SOFTWARE · WEB + MOBILE",
    icon: "activity",
    description: "A trading operations workspace for accounts, bots, strategies, trade records, and notifications, with a web console, companion mobile app, and a Python API.",
    stack: ["React", "React Native", "FastAPI", "WebSockets"],
    scope: ["Account, bot, strategy, and trade-detail workflows", "Notifications and real-time API connections", "Domain models, migrations, and licensing interfaces"],
    note: "Web console, mobile client, and API grouped as one development project."
  },
  {
    id: "nonprofit-operations",
    name: "Nonprofit Operations Platform",
    category: "ENTERPRISE SYSTEMS · PROGRAM DELIVERY",
    icon: "network",
    description: "A management platform spanning programs, project work plans, operational records, and staff workflows—connecting the work of an organization beyond a single dashboard.",
    stack: ["React", "TypeScript", "Django"],
    scope: ["Programs, projects, milestones, supplies, and travel records", "Donor, vendor, location, and publication management", "Staff records, leave, timesheets, and performance workflows"],
    note: "Connects program delivery with the administrative workflows that support it."
  },
  {
    id: "marketplace-api",
    name: "Marketplace Commerce API",
    category: "BACKEND ENGINEERING · COMMERCE",
    icon: "store",
    description: "A multi-domain marketplace backend covering buyer and vendor accounts, listings, orders, payments, reviews, and messaging, with API boundaries for the commerce lifecycle.",
    stack: ["Django REST", "Python", "Payments", "Webhooks"],
    scope: ["Account roles, listings, order, and review models", "Payment transactions, wallet records, and gateway webhook handling", "Chat and account-security modules"],
    note: "Separate account, listing, ordering, payment, and messaging domains."
  },
  {
    id: "smart-crop-calendar",
    name: "Smart Crop Calendar",
    category: "AGRICULTURE · WEATHER & CROP PLANNING",
    icon: "sprout",
    description: "An agricultural planning prototype bringing crop, season, soil, and weather information together across a web dashboard, Django API, and Android application.",
    stack: ["React", "Django", "Kotlin"],
    scope: ["Web views for crops, months, seasons, and sunshine", "API models for crop, soil, and weather information", "Android farm and profile screens"],
    note: "Hackathon / early-stage prototype. The sensor network described in the roadmap is not presented as deployed.",
    source: "https://github.com/ericmuh/smart-crop-calander"
  }
];

export const webProjects: PortfolioProject[] = [
  {
    id: "terrain-advocates",
    name: "Terrain Advocates",
    category: "PROFESSIONAL SERVICES · WEB EXPERIENCE",
    icon: "globe",
    description: "A law-firm website with dedicated practice-area, team, about, and contact routes, supported by reusable interface components and page-specific search metadata.",
    stack: ["React Router", "TypeScript", "Tailwind CSS"],
    scope: ["Practice areas, team profiles, FAQs, and contact presentation", "Responsive component-based pages and structured search metadata"]
  },
  {
    id: "people-sync",
    name: "People Sync Solutions",
    category: "HR CONSULTING · WEB EXPERIENCE",
    icon: "globe",
    description: "A focused HR consulting website that turns service information into a clear, responsive business presence, with service sections, enquiry paths, and restrained reveal interactions.",
    stack: ["HTML", "CSS", "JavaScript"],
    scope: ["Service presentation and organizational positioning", "Responsive layouts and enquiry navigation"]
  }
];
