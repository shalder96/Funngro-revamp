const SITE_URL = "https://funngro-revamp.netlify.app";
const SITE_NAME = "Funngro";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Funngro connects young talent with companies through real-world opportunities and project-based work.",
};

export const seoData = {
  home: {
    title: "Funngro | Real-World Opportunities for Young Talent",

    description:
      "Funngro connects young talent with companies through real-world projects, helping young people learn, work, earn, and build valuable skills.",

    keywords:
      "Funngro, young talent, student jobs, teenage jobs, online work, project opportunities, skill development, youth opportunities",

    canonical: "/",

    structuredData: organizationSchema,
  },

  about: {
    title: "About Funngro | Empowering Young Talent",

    description:
      "Learn about Funngro, our mission, values, and vision for creating meaningful real-world opportunities that help young talent learn, work, and grow.",

    keywords:
      "About Funngro, Funngro mission, Funngro vision, young talent, youth opportunities, skill development",

    canonical: "/about",

    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Funngro",
      description:
        "Learn about Funngro, its mission, values, and vision for empowering young talent.",
      url: `${SITE_URL}/about`,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  },

  teens: {
    title: "Funngro for Teens | Learn, Work & Earn",

    description:
      "Discover real-world project opportunities with Funngro. Build practical skills, gain experience, grow your portfolio, and explore opportunities to earn.",

    keywords:
      "Funngro for teens, teen jobs, student jobs, online jobs for teens, part-time jobs, learn and earn, skill development, project work",

    canonical: "/teens",

    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Funngro for Teens",
      description:
        "Explore real-world project opportunities designed to help young people learn, work, earn, and build practical skills.",
      url: `${SITE_URL}/teens`,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  },

  companies: {
    title: "Funngro for Companies | Connect With Young Talent",

    description:
      "Connect your company with young talent through project-based opportunities. Find relevant skills for technology, design, marketing, content, research, and more.",

    keywords:
      "Funngro for companies, hire young talent, young talent platform, project-based talent, student talent, youth talent, company projects",

    canonical: "/companies",

    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Funngro for Companies",
      description:
        "Connect companies with young talent for suitable project-based opportunities.",
      url: `${SITE_URL}/companies`,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  },

  contact: {
    title: "Contact Funngro | Get in Touch",

    description:
      "Get in touch with Funngro for support, company partnerships, project opportunities, or general enquiries.",

    keywords:
      "Contact Funngro, Funngro support, Funngro contact, Funngro partnerships, Funngro enquiries",

    canonical: "/contact",

    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Funngro",
      description:
        "Contact Funngro for support, partnerships, opportunities, and general enquiries.",
      url: `${SITE_URL}/contact`,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  },
};

export default seoData;
