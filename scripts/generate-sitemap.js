const fs = require("fs");
const path = require("path");

const domain = "https://www.studira.tech";

const staticPages = [
  "", // homepage
  "about",
  "programs",
  "scholarships",
  "apply",
  "faq",
  "contact",
  "pricing",
];

const dynamicCourses = [
  "frontend",
  "backend",
  "cloud-bootcamp",
  "ai-ml",
  "data-analysis-bootcamp",
];

// ✅ Add U.S. mentorship landing page
const customPages = ["mentorship/usa"];

const generateSitemap = () => {
  const urls = [
    ...staticPages.map((p) => `${domain}/${p}`),
    ...dynamicCourses.map((c) => `${domain}/courses/${c}`),
    ...customPages.map((p) => `${domain}/${p}`),
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${url}</loc>
</url>`
  )
  .join("\n")}
</urlset>`;

  const outDir = path.join(__dirname, "../public");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemapXml);
  console.log("✅ Sitemap generated at /public/sitemap.xml");
};

generateSitemap();