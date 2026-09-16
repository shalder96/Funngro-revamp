import { useEffect } from "react";

const SITE_URL = "https://funngro-revamp.netlify.app";

export default function SEO({
  title = "Funngro | Real-World Opportunities for Young Talent",
  description = "Funngro connects young talent with companies through real-world projects, helping young people learn, work, earn, and build valuable skills.",
  keywords = "Funngro, young talent, teenagers, student jobs, online work, project opportunities, skill development, youth opportunities",
  canonical = "/",
  image = "/og-image.png",
  type = "website",
  noIndex = false,
  structuredData,
}) {
  useEffect(() => {
    document.title = title;

    const canonicalUrl = `${SITE_URL}${canonical}`;

    const fullImageUrl = image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`;

    const setMeta = (attribute, key, content) => {
      if (!content) return;

      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setLink = (rel, href) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    // Basic SEO
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    // Canonical
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", fullImageUrl);
    setMeta("property", "og:site_name", "Funngro");

    // Twitter / X
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", fullImageUrl);

    // Structured data
    const existingSchema = document.head.querySelector(
      'script[data-seo-schema="true"]',
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    if (structuredData) {
      const schemaScript = document.createElement("script");

      schemaScript.type = "application/ld+json";
      schemaScript.setAttribute("data-seo-schema", "true");
      schemaScript.textContent = JSON.stringify(structuredData);

      document.head.appendChild(schemaScript);
    }

    return () => {
      const schema = document.head.querySelector(
        'script[data-seo-schema="true"]',
      );

      if (schema) {
        schema.remove();
      }
    };
  }, [
    title,
    description,
    keywords,
    canonical,
    image,
    type,
    noIndex,
    structuredData,
  ]);

  return null;
}
