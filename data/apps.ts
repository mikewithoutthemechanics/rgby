export type AppCategory = "ai" | "real-estate" | "payments" | "social" | "internal" | "creative" | "3d";

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  repo: string;
  status: "live" | "wip" | "beta" | "down";
  accent: string;           // CSS accent color
  tags: string[];
  icon: string;             // emoji icon
  category: AppCategory;
  featured?: boolean;
}

export const apps: App[] = [
  {
    id: "whatsapp-crm",
    name: "WhatsApp CRM SA",
    tagline: "Lead gen + AI automation for SA businesses",
    description:
      "Full WhatsApp CRM for South African small businesses: contacts, conversations, campaigns, AI reply generation, dashboards, OpenWA REST API integration. Production-ready.",
    url: "https://whatsapp-1blvuo6mn-michael-s-projects-1c4584cf.vercel.app",
    repo: "mikewithoutthemechanics/whatsapp-crm",
    status: "live",
    accent: "#10B981",
    tags: ["CRM", "AI", "WhatsApp", "Lead Gen", "Groq"],
    icon: "💬",
    category: "ai",
    featured: true,
  },
  {
    id: "ethereal-library",
    name: "Ethereal Library",
    tagline: "3D candlelit library — browse books by candlelight",
    description:
      "An interactive Three.js 3D library. Four books (Our Story, Our Adventures, Letters to You, The Promise) you can pick up and read in a candlelit room. Built for a date.",
    url: "https://ethereal-library.vercel.app",
    repo: "mikewithoutthemechanics/ethereal-library",
    status: "down",
    accent: "#F59E0B",
    tags: ["Three.js", "GSAP", "3D", "Romantic", "WebGL"],
    icon: "🕯️",
    category: "3d",
  },
  {
    id: "ethereal-valentine",
    name: "Ethereal Glass Valentine",
    tagline: "Glass-envelope love letter in 3D",
    description:
      "A romantic 3D experience: digitally break glass to reveal a handwritten letter and photo gallery inside the envelope. Post-processing bloom and film grain.",
    url: "https://ethereal-glass-valentine.vercel.app",
    repo: "mikewithoutthemechanics/ethereal-glass-valentine",
    status: "live",
    accent: "#EC4899",
    tags: ["Three.js", "Romantic", "3D", "GSAP", "Glass"],
    icon: "💌",
    category: "3d",
  },
  {
    id: "tape-stream",
    name: "TapeStream",
    tagline: "VHS 3D archive browser for your agent services",
    description:
      "Immersive 1990s VHS aesthetic — 3D floating tapes on curved CRT monitor. Navigate service databases like a retro blockbuster. GSAP + Three.js + Barba.js.",
    url: "https://tape-stream.vercel.app",
    repo: "mikewithoutthemechanics/tape-stream",
    status: "live",
    accent: "#EF4444",
    tags: ["Three.js", "VHS", "Retro", "Archive", "GSAP"],
    icon: "📼",
    category: "creative",
  },
  {
    id: "eezepaid",
    name: "eezePaid",
    tagline: "Digital currency + virtual cards for SA",
    description:
      "Modern SA fintech: eRand digital currency, virtual cards, Apple Pay integration. Full payment stack for South African consumers and merchants.",
    url: "https://eezepaid.vercel.app",
    repo: "mikewithoutthemechanics/eezepaid",
    status: "live",
    accent: "#6366F1",
    tags: ["Fintech", "Payments", "Cards", "Apple Pay", "SA"],
    icon: "💳",
    category: "payments",
    featured: true,
  },
  {
    id: "review-radar",
    name: "Review Radar",
    tagline: "AI-powered review management for local businesses",
    description:
      "Automate review monitoring, sentiment analysis, and response generation. Know every review instantly and reply with AI assistance.",
    url: "https://review-radar-ten.vercel.app",
    repo: "mikewithoutthemechanics/review-radar",
    status: "live",
    accent: "#F97316",
    tags: ["Reviews", "AI", "Reputation", "SA", "SaaS"],
    icon: "📡",
    category: "ai",
  },
  {
    id: "changeguard",
    name: "ChangeGuard",
    tagline: "Change Order Manager for SA construction contractors",
    description:
      "AI-powered change order management built specifically for South African construction contractors. Track variations, approvals, and cost deviations.",
    url: "#",
    repo: "mikewithoutthemechanics/changeguard",
    status: "wip",
    accent: "#F97316",
    tags: ["Construction", "AI", "Change Orders", "SA", "ConTech"],
    icon: "🔨",
    category: "ai",
  },
  {
    id: "bridge-ai-os",
    name: "THE BRIDGE AI OS",
    tagline: "The operating system for AI-native teams",
    description:
      "In-development: a full AI-native OS for creative and engineering teams. Agents, workflows, and context — one workspace.",
    url: "#",
    repo: "mikewithoutthemechanics/bridge-ai-os",
    status: "wip",
    accent: "#8B5CF6",
    tags: ["AI OS", "Agents", "Workflows", "In Development"],
    icon: "🌉",
    category: "ai",
  },
  {
    id: "agentcy",
    name: "Agentcy",
    tagline: "Custom software, AI & integrations — Cape Town",
    description:
      "Agentcy builds custom software, AI agents, integrations, and automated workflows for businesses. Cape Town studio working globally.",
    url: "https://www.agentcy.africa",
    repo: "mikewithoutthemechanics/Agentcy",
    status: "beta",
    accent: "#06B6D4",
    tags: ["Agency", "AI", "Software", "Integrations"],
    icon: "🏢",
    category: "internal",
  },
  {
    id: "proagent",
    name: "ProAgent",
    tagline: "AI automation for South African businesses",
    description:
      "Automated lead-gen scrapers from Yellow Pages SA + Google Maps, social auto-poster, and portfolio landing pages. R500–R800/month service tiers.",
    url: "#",
    repo: "mikewithoutthemechanics/proagent-portfolio",
    status: "beta",
    accent: "#3B82F6",
    tags: ["Lead Gen", "Social", "Automation", "SA", "SaaS"],
    icon: "🚀",
    category: "ai",
  },
  {
    id: "propagent",
    name: "PropAgent",
    tagline: "AI real-estate agent for SA property",
    description:
      "Full-stack real estate automation: listings, lead capture, tour scheduling. Built for South African property professionals with Groq AI integrations.",
    url: "#",
    repo: "mikewithoutthemechanics/PropAgent",
    status: "beta",
    accent: "#14B8A6",
    tags: ["PropTech", "Real Estate", "AI", "SA", "Supabase"],
    icon: "🏠",
    category: "real-estate",
  },
  {
    id: "seasoul",
    name: "Seasoul",
    tagline: "Mental health & therapy for yacht crew",
    description:
      "3D animated wellness webapp — yacht crew mental health platform. GSAP + Three.js + Framer Motion for a cinematic therapeutic experience.",
    url: "#",
    repo: "mikewithoutthemechanics/seasoul-wellness",
    status: "beta",
    accent: "#0EA5E9",
    tags: ["3D", "GSAP", "Mental Health", "Wellness", "Animation"],
    icon: "🧘",
    category: "3d",
  },
  {
    id: "loop",
    name: "Loop",
    tagline: "Inertial scroll & scrollytelling dashboard",
    description:
      "Agent-based inertial scroll platform adapted from a communication architecture. Deep interaction design with Lenis + ScrollTrigger.",
    url: "#",
    repo: "mikewithoutthemechanics/Loop",
    status: "beta",
    accent: "#A78BFA",
    tags: ["Scroll", "Agents", "Lenis", "Dashboard"],
    icon: "🔄",
    category: "internal",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    tagline: "Personal projects & experiments",
    description:
      "Aggregated personal portfolio of MikeWithoutTheMechanics — creative experiments, open-source projects, and shipping stories.",
    url: "#",
    repo: "mikewithoutthemechanics/portfolio",
    status: "beta",
    accent: "#64748B",
    tags: ["Portfolio", "Design", "Web"],
    icon: "🎨",
    category: "creative",
  },
  {
    id: "website",
    name: "Website",
    tagline: "mikewithoutthemechanics main site",
    description:
      "Personal homepage and project index for Mohammad Mukaddam.",
    url: "#",
    repo: "mikewithoutthemechanics/Website",
    status: "beta",
    accent: "#94A3B8",
    tags: ["Personal", "Hub"],
    icon: "🌐",
    category: "internal",
  },
  {
    id: "candi-training",
    name: "Candie's Training Wheels",
    tagline: "UI/UX and app fundamentals for Candi on Her Way",
    description:
      "Interactive training app teaching UI/UX and app development fundamentals — a design + code bootcamp companion for beginner creatives.",
    url: "#",
    repo: "mikewithoutthemechanics/candistrainingwheels",
    status: "beta",
    accent: "#F472B6",
    tags: ["Education", "UI/UX", "Training"],
    icon: "🌟",
    category: "creative",
  },
];

export const categories: { id: AppCategory; label: string; emoji: string }[] = [
  { id: "ai",          label: "AI & Automation",   emoji: "🤖" },
  { id: "real-estate", label: "Real Estate",        emoji: "🏠" },
  { id: "payments",    label: "Payments & Fintech", emoji: "💳" },
  { id: "social",      label: "Social & Content",   emoji: "📱" },
  { id: "internal",    label: "Internal",            emoji: "⚙️" },
  { id: "creative",    label: "Creative",            emoji: "🎨" },
  { id: "3d",          label: "3D & Immersive",      emoji: "🕹️" },
];
