import {
  Users,
  Building2,
  Wallet,
  UserPlus,
  Search,
  Laptop,
  BadgeIndianRupee,
  Award,
  Code2,
  PenTool,
  Palette,
  Camera,
  Video,
  Megaphone,
  BrainCircuit,
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
  Rocket,
  Clock3,
  BadgeCheck,
  UserRoundPlus,
  SearchCheck,
  WalletCards,
} from "lucide-react";

export const heroStats = [
  {
    id: 1,
    number: "50K+",
    label: "Teen Users",
    icon: Users,
  },
  {
    id: 2,
    number: "1000+",
    label: "Companies",
    icon: Building2,
  },
  {
    id: 3,
    number: "₹5Cr+",
    label: "Paid to Teens",
    icon: Wallet,
  },
];

export const whyChooseData = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    title: "Real Company Projects",
    description:
      "Work with real startups and businesses instead of dummy assignments.",
  },
  {
    id: 2,
    icon: Wallet,
    title: "Earn While Learning",
    description:
      "Get rewarded for your skills while building practical experience.",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Practical Learning",
    description:
      "Apply your knowledge to real-world projects that strengthen your portfolio.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Verified Companies",
    description:
      "Collaborate with trusted companies in a secure working environment.",
  },
  {
    id: 5,
    icon: Users,
    title: "Build Your Network",
    description:
      "Connect with mentors, founders, and professionals from various industries.",
  },
  {
    id: 6,
    icon: Rocket,
    title: "Career Growth",
    description:
      "Gain valuable experience that gives you an edge in future opportunities.",
  },
  {
    id: 7,
    icon: Clock3,
    title: "Flexible Schedule",
    description:
      "Complete projects according to your availability without affecting studies.",
  },
  {
    id: 8,
    icon: BadgeCheck,
    title: "Certificates & Recognition",
    description:
      "Earn certificates and showcase verified achievements on your profile.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Who can join Funngro?",
    answer:
      "Students aged 14–19 can join Funngro and work on real projects from companies.",
  },
  {
    id: 2,
    question: "How do I get paid?",
    answer:
      "Payments are securely processed after your project is approved by the company.",
  },
  {
    id: 3,
    question: "Do I need prior experience?",
    answer:
      "No. Many beginner-friendly projects help you build skills while earning.",
  },
  {
    id: 4,
    question: "Is Funngro free to use?",
    answer:
      "Yes. Creating an account and applying for projects is completely free for students.",
  },
];

export const projects = [
  {
    id: 1,
    company: "Google",
    title: "Social Media Content Creator",
    stipend: "₹8,000",
    duration: "2 Weeks",
    level: "Beginner",
    category: "Marketing",
    applicants: 126,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    company: "Adobe",
    title: "UI/UX Design Challenge",
    stipend: "₹12,000",
    duration: "3 Weeks",
    level: "Intermediate",
    category: "Design",
    applicants: 84,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    company: "Amazon",
    title: "Frontend Development",
    stipend: "₹15,000",
    duration: "1 Month",
    level: "Advanced",
    category: "Development",
    applicants: 67,
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 4,
    company: "Infosys",
    title: "AI Research Assistant",
    stipend: "₹10,000",
    duration: "4 Weeks",
    level: "Intermediate",
    category: "AI",
    applicants: 143,
    color: "from-emerald-500 to-teal-500",
  },
];

export const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Home", href: "/" },
      { name: "For Teens", href: "/teen" },
      { name: "For Companies", href: "/company" },
      { name: "About", href: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Projects", href: "#" },
      { name: "Blog", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up in less than a minute and build your student profile.",
  },
  {
    id: 2,
    icon: Search,
    title: "Discover Projects",
    description:
      "Browse exciting paid projects from startups and leading companies.",
  },
  {
    id: 3,
    icon: Laptop,
    title: "Complete the Work",
    description:
      "Collaborate with companies, submit your work, and receive feedback.",
  },
  {
    id: 4,
    icon: Wallet,
    title: "Earn & Grow",
    description:
      "Get paid securely while building your professional portfolio.",
  },
];

export const stats = [
  {
    id: 1,
    icon: Users,
    number: 50000,
    suffix: "+",
    title: "Students Joined",
    description: "Building careers through real company projects.",
  },
  {
    id: 2,
    icon: Building2,
    number: 1200,
    suffix: "+",
    title: "Partner Companies",
    description: "Trusted by startups and leading enterprises.",
  },
  {
    id: 3,
    icon: BadgeIndianRupee,
    number: 5,
    prefix: "₹",
    suffix: "Cr+",
    title: "Paid to Teens",
    description: "Secure and verified payments to students.",
  },
  {
    id: 4,
    icon: Award,
    number: 98,
    suffix: "%",
    title: "Project Success",
    description: "Projects completed successfully by students.",
  },
];

export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "For Teens",
    path: "/teen",
  },
  {
    title: "For Companies",
    path: "/company",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: Code2,
    title: "Web Development",
    projects: 245,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: PenTool,
    title: "Content Writing",
    projects: 186,
    color: "from-orange-500 to-pink-500",
  },
  {
    id: 3,
    icon: Palette,
    title: "Graphic Design",
    projects: 154,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 4,
    icon: Camera,
    title: "Photography",
    projects: 82,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    icon: Video,
    title: "Video Editing",
    projects: 116,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 6,
    icon: Megaphone,
    title: "Digital Marketing",
    projects: 201,
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 7,
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    projects: 64,
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    id: 8,
    icon: BarChart3,
    title: "Data Analysis",
    projects: 73,
    color: "from-slate-600 to-slate-900",
  },
];

export const stories = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Graphic Designer",
    company: "Adobe",
    earnings: "₹18,500",
    image: "https://i.pravatar.cc/300?img=11",
    rating: 5,
    story:
      "Funngro helped me land my first paid design project. Today I have a professional portfolio and real client experience.",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Content Writer",
    company: "Google",
    earnings: "₹24,000",
    image: "https://i.pravatar.cc/300?img=5",
    rating: 5,
    story:
      "I started with zero experience. Within three months I completed multiple writing projects and earned while studying.",
  },
  {
    id: 3,
    name: "Rahul Das",
    role: "Frontend Developer",
    company: "Amazon",
    earnings: "₹31,000",
    image: "https://i.pravatar.cc/300?img=8",
    rating: 5,
    story:
      "The projects gave me practical experience that helped me build confidence before college internships.",
  },
];

export const howItWorksData = [
  {
    id: 1,
    step: "01",

    title: "Create Profile",

    description:
      "Build your profile, verify your skills, and let companies discover your talent.",

    icon: UserRoundPlus,

    accent: "emerald",

    duration: "2 mins",

    cta: "Create Profile",

    orbit: "small",

    angle: 315,
  },

  {
    id: 2,
    step: "02",

    title: "Explore Projects",

    description:
      "Browse exciting projects from startups and leading brands across India.",

    icon: SearchCheck,

    accent: "cyan",

    duration: "5 mins",

    cta: "Explore",

    orbit: "medium",

    angle: 35,
  },

  {
    id: 3,
    step: "03",

    title: "Complete Work",

    description:
      "Collaborate with companies, submit quality work, and receive valuable feedback.",

    icon: BriefcaseBusiness,

    accent: "violet",

    duration: "Flexible",

    cta: "Start Working",

    orbit: "large",

    angle: 155,
  },

  {
    id: 4,
    step: "04",

    title: "Get Paid",

    description:
      "Receive secure payments, certificates, and unlock even better opportunities.",

    icon: WalletCards,

    accent: "amber",

    duration: "Instant",

    cta: "Start Earning",

    orbit: "medium",

    angle: 225,
  },
];
