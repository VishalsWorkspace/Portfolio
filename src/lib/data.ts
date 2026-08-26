export const profile = {
  name: "Vishal Singh",
  role: "AI / GenAI Engineer",
  location: "Bengaluru, India",
  email: "vishal.aisys@gmail.com",
  tagline: "I build AI systems that ship, not just notebooks.",
  summary:
    "Computer Science graduate focused on applied GenAI — multi-agent systems, retrieval-augmented generation, and edge computer vision. Over the past year I've shipped a multi-agent AI discovery engine, a local-first RAG assistant, and a real-time computer vision pipeline for autonomous UAVs. I work across the stack: Python for AI/ML, LangChain and Llama/Mistral for reasoning, YOLOv8 and ROS2 for perception, and Next.js for the interfaces that put it all in front of people.",
  resumeUrl: "/resume.pdf",
} as const;

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/VishalsWorkspace",
    icon: "Github",
    handle: "VishalsWorkspace",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-singh-genai",
    icon: "Linkedin",
    handle: "vishal-singh-genai",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/ClenchingV",
    icon: "Twitter",
    handle: "@ClenchingV",
  },
  {
    label: "Dev.to",
    href: "https://dev.to/vishalsworkspace",
    icon: "FileCode2",
    handle: "vishalsworkspace",
  },
  {
    label: "Hugging Face",
    href: "https://huggingface.co/Vishalsworkspace",
    icon: "Sparkles",
    handle: "Vishalsworkspace",
  },
  {
    label: "Email",
    href: "mailto:vishal.aisys@gmail.com",
    icon: "Mail",
    handle: "vishal.aisys@gmail.com",
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "Live" | "Shipped" | "Exhibited";
  featured?: boolean;
  video?: string;
  images: string[];
  links: { label: string; href: string }[];
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "ai-tool-hunter",
    title: "AI Tool Hunter",
    tagline: "Autonomous multi-agent AI discovery engine",
    description:
      "A production multi-agent platform that autonomously discovers, validates, categorizes, and continuously updates a database of AI tools. A live search agent (Tavily + Llama 3.3-70B) scans the web for tools not yet in the database and cross-references pricing and feature data with an LLM before any write — a hallucination-proof pipeline with zero stale entries. The dataset is exposed as both a public Hugging Face dataset and an MCP server, so it's usable by end users in a browser and by AI agents/IDEs directly.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "Llama 3.3-70B",
      "Groq",
      "Tavily API",
      "GitHub Actions",
      "MCP",
    ],
    status: "Live",
    featured: true,
    video: "/projects/ai-tool-hunter-demo.mp4",
    images: [
      "/projects/ai-tool-hunter-1.png",
      "/projects/ai-tool-hunter-2.png",
      "/projects/ai-tool-hunter-3.png",
      "/projects/ai-tool-hunter-4.png",
    ],
    links: [
      { label: "Live Site", href: "https://ai-tool-hunter-eight.vercel.app/" },
      {
        label: "GitHub",
        href: "https://github.com/VishalsWorkspace/AI-TOOL-HUNTER",
      },
      {
        label: "HF Dataset",
        href: "https://huggingface.co/datasets/Vishalsworkspace/AI-Tools-Corpus-2026",
      },
    ],
    metrics: [
      { label: "Pipeline", value: "Fully autonomous" },
      { label: "Refresh", value: "Daily cron" },
      { label: "Integration", value: "MCP server" },
    ],
  },
  {
    slug: "aidf-drone-framework",
    title: "Autonomous Defence Drone Agent",
    tagline: "Real-time UAV surveillance & threat intelligence",
    description:
      "An autonomous UAV surveillance pipeline built on AirSim and Gazebo, integrating computer vision, multi-object tracking, threat classification, and decision intelligence for real-time reconnaissance. YOLOv8 was fine-tuned on custom defence datasets and wired into a modular perception → tracking → threat-classification → alert pipeline, with a live Streamlit command dashboard for telemetry, threat history, and mission logs. Selected for the KSCST State-Level Project Exhibition 2026.",
    stack: [
      "Python",
      "ROS2",
      "YOLOv8",
      "PyTorch",
      "AirSim",
      "OpenCV",
      "Streamlit",
      "CUDA",
    ],
    status: "Exhibited",
    images: [
      "/projects/drone-1.png",
      "/projects/drone-2.png",
      "/projects/drone-3.png",
      "/projects/drone-4.png",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/VishalsWorkspace/aidf-drone-framework",
      },
    ],
    metrics: [
      { label: "Inference", value: "15–25 FPS" },
      { label: "Recognition", value: "KSCST 2026" },
      { label: "Pipeline", value: "4-stage perception" },
    ],
  },
  {
    slug: "llm-pdf-research-assistant",
    title: "LLM PDF Research Assistant",
    tagline: "Local-first RAG, evolved into a cloud deployment",
    description:
      "A Retrieval-Augmented Generation system for querying PDFs in natural language. Started as a local-first, privacy-focused prototype running entirely offline on Ollama, FAISS, and quantised Mistral models for sub-second, zero-cloud-dependency document queries — then evolved into a cloud-deployed architecture (Flask on Render, Groq Llama 3.3, Google embeddings) for public accessibility.",
    stack: [
      "LangChain",
      "FAISS",
      "Ollama",
      "Mistral",
      "Sentence Transformers",
      "Flask",
      "Groq API",
    ],
    status: "Live",
    images: ["/projects/pdf-research-assistant.png"],
    links: [
      {
        label: "Live Site",
        href: "https://llm-pdf-research-assistant.netlify.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/VishalsWorkspace/LLM_Research_Assistant_2.0",
      },
    ],
    metrics: [
      { label: "Retrieval", value: "FAISS vector search" },
      { label: "Latency", value: "Sub-second local" },
      { label: "Phases", value: "Local → Cloud" },
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  detail?: string;
  fileUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    year: "2025",
    detail: "100% in Data Cloud integration — autonomous AI agents & enterprise automation",
    fileUrl: "/certs/agentforce-specialist-cert.pdf",
  },
  {
    title: "Prompt Tuning for NLP",
    issuer: "Hugging Face",
    year: "2025",
    detail: "Fine-tuning transformer models for NLP applications",
  },
  {
    title: "Generative AI Fundamentals & Prompt Engineering",
    issuer: "IBM SkillsBuild",
    year: "2024",
  },
  {
    title: "Business Analytics Certification",
    issuer: "Qlik",
    year: "2025",
    fileUrl: "/certs/qlik-ba-cert.pdf",
  },
];

export const achievements = [
  {
    title: "KSCST State-Level Project Exhibition 2026",
    detail: "Selected for the autonomous UAV surveillance project (AIDF)",
    fileUrl: "/certs/kscst-cert.jpeg",
  },
];

export const writing = [
  {
    label: "Technical blog",
    platform: "Dev.to",
    href: "https://dev.to/vishalsworkspace",
    description: "Write-ups on GenAI systems, RAG architectures, and agent design.",
    icon: "FileCode2",
  },
  {
    label: "Datasets & models",
    platform: "Hugging Face",
    href: "https://huggingface.co/Vishalsworkspace",
    description: "Open-source datasets, including the AI Tools Corpus.",
    icon: "Sparkles",
  },
];

export const focusAreas = [
  {
    title: "Multi-Agent Systems",
    description:
      "Autonomous agent pipelines that discover, verify, and act on real-world data with LLM-based cross-checks.",
    icon: "Bot",
  },
  {
    title: "Local & Cloud RAG",
    description:
      "Retrieval-augmented generation, from quantised local inference to low-latency cloud vector search.",
    icon: "Database",
  },
  {
    title: "Edge Computer Vision",
    description:
      "Fine-tuned YOLOv8 perception pipelines running real-time object tracking and threat classification.",
    icon: "ScanEye",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
] as const;
