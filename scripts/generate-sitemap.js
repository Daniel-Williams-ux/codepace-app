const fs = require('fs');
const path = require('path');

// Your domain
const domain = 'https://www.studira.tech';

// Static pages you want indexed
const staticPages = [
  '', // homepage
  'about',
  'programs',
  'scholarships',
  'apply',
  'faq',
  'contact',
  'pricing',
];

// Course pages
const dynamicCourses = [
  'frontend',
  'backend',
  'cloud-bootcamp',
  'ai-ml',
  'data-analysis-bootcamp',
];

// Custom pages
const customPages = ['mentorship/usa'];

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
  <changefreq>weekly</changefreq>
  <priority>${url === domain + '/' ? '1.0' : '0.8'}</priority>
</url>`
  )
  .join('\n')}
</urlset>`;

  // Write sitemap to /out for Namecheap static hosting
  const outDir = path.join(process.cwd(), 'out');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml);

  console.log('✅ Sitemap generated at /out/sitemap.xml');
};

generateSitemap();