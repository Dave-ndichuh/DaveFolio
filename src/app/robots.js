export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://machariandichu.vercel.app/sitemap.xml",
  };
}
