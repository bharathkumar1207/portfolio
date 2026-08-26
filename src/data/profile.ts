const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: "Bharath Kumar Taddi",
  role: "Associate Product Engineer",
  company: "ThreatSense AI",
  companyKind: "cybersecurity startup",
  since: "June 2025",
  tagline: "Product engineer turning security and compliance problems into shipped software.",
  bio: [
    "I'm an Associate Product Engineer at ThreatSense AI, a cybersecurity startup, since June 2025. I started as a Junior Cybersecurity Analyst building a C++ endpoint agent, then moved into full-stack development — Node.js, TypeScript, React, Tailwind CSS — and grew into cloud infrastructure, technical leadership, and the product decisions behind what I was building.",
    "I care about taking a problem from a rough idea to something real people rely on: an agent that runs quietly in the background, a dashboard an admin trusts at a glance, infrastructure that stays up. That range — code, cloud, and the product thinking in between — is what I bring to a team.",
  ],
} as const

export interface Milestone {
  date: string
  tag: string
  title: string
  description: string
  illustration: string
}

export const milestones: Milestone[] = [
  {
    date: "Jun 2025",
    tag: "Cybersecurity",
    title: "Junior Cybersecurity Analyst",
    description:
      "Joined ThreatSense AI as a Junior Cybersecurity Analyst and started building an endpoint agent in C++ that runs silently on a device and enforces policy set by an organization.",
    illustration: asset("timeline/cybersecurity.svg"),
  },
  {
    date: "2025",
    tag: "Full-stack development",
    title: "Dashboard development",
    description:
      "Moved into full-stack development — Node.js, TypeScript, React, Tailwind CSS — building admin dashboards that give teams visibility into systems running elsewhere.",
    illustration: asset("timeline/dashboard.svg"),
  },
  {
    date: "2025",
    tag: "Cloud infrastructure",
    title: "AWS deployment & technical leadership",
    description:
      "Deployed and managed production services on AWS, containerized with Docker and shipped through CI/CD on Git. Stepped into a technical lead role — Associate Product Engineer — assigning and reviewing work for a small team.",
    illustration: asset("timeline/cloud.svg"),
  },
  {
    date: "2025",
    tag: "Browser security",
    title: "Browser extension development",
    description:
      "Built browser extensions for endpoint-layer security, and learned to publish across Chrome and Edge — each with its own submission and review process.",
    illustration: asset("timeline/extension.svg"),
  },
  {
    date: "2025",
    tag: "Compliance engineering",
    title: "Compliance-driven product design",
    description:
      "Started applying data-protection regulation — including frameworks like India's DPDPA — to product requirements.",
    illustration: asset("timeline/compliance.svg"),
  },
  {
    date: "Ongoing",
    tag: "Systems programming",
    title: "macOS agent development",
    description: "Extended endpoint agent development to macOS, alongside the existing agent.",
    illustration: asset("timeline/laptop.svg"),
  },
]

export interface Expertise {
  title: string
  description: string
  pattern: "flow" | "grid" | "layers" | "shield"
  highlights: string[]
  stack: string[]
}

export const expertise: Expertise[] = [
  {
    title: "Product Engineering",
    description:
      "Full-stack development with Node.js, TypeScript, React, and Tailwind CSS — from interfaces to the systems behind them.",
    pattern: "layers",
    highlights: [
      "Build backend APIs and frontend interfaces end-to-end.",
      "Build admin dashboards that give teams visibility into systems running elsewhere.",
      "Comfortable owning a feature from a rough idea through to something shipped.",
    ],
    stack: ["Node.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "Cloud Infrastructure",
    description:
      "AWS deployment and architecture, containerization, and CI/CD — built for production traffic.",
    pattern: "grid",
    highlights: [
      "Provision and manage AWS compute, storage, and networking — EC2, ECS, S3, CloudFront, RDS, EBS, EFS.",
      "Containerize services with Docker and ship through CI/CD pipelines.",
      "Work with Git-flow across a team's release process.",
    ],
    stack: ["AWS", "Docker", "CI/CD", "Git-flow"],
  },
  {
    title: "Security Systems",
    description:
      "Low-level endpoint agents and browser-layer security, integrated with the systems that monitor them.",
    pattern: "flow",
    highlights: [
      "Build low-level agents in C++ that run silently on an endpoint and enforce policy set by an organization.",
      "Build browser extensions for endpoint-layer security.",
      "Integrate security tooling with dashboards and EDR systems.",
    ],
    stack: ["C++", "Browser extension APIs", "EDR integration"],
  },
  {
    title: "Compliance Engineering",
    description: "Translating regulatory requirements into concrete product and dashboard features.",
    pattern: "shield",
    highlights: [
      "Exposure to translating data-protection regulation into product requirements.",
      "Familiar with compliance frameworks such as India's DPDPA.",
      "Comfortable working at the intersection of legal requirements and product design.",
    ],
    stack: ["Compliance engineering", "Product design"],
  },
]

export interface Skill {
  name: string
  level: number
}

export const skills: Skill[] = [
  { name: "Node.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "React", level: 88 },
  { name: "Tailwind CSS", level: 85 },
  { name: "AWS (EC2 / ECS / S3 / RDS)", level: 78 },
  { name: "Docker & CI/CD", level: 78 },
  { name: "Git", level: 85 },
  { name: "C++", level: 65 },
]

export const contact = {
  email: "bharathkumar04081@gmail.com",
  linkedin: "https://www.linkedin.com/in/bharath-taddi-81a3632ba",
} as const
