import { GetServerSideProps } from "next";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://dejibimbola.com";
  const currentDate = new Date().toISOString().split("T")[0];

  const pages = [
    {
      url: "/",
      priority: "1.0",
      changefreq: "weekly",
    },
    {
      url: "/about",
      priority: "0.9",
      changefreq: "monthly",
    },
    {
      url: "/projects",
      priority: "0.9",
      changefreq: "monthly",
    },
    {
      url: "/problem-solving",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      url: "/resume",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      url: "/contact",
      priority: "0.7",
      changefreq: "monthly",
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate",
  );
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
