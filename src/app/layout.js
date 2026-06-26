import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://machariandichu.vercel.app"),
  title: {
    default: "David Macharia | Web Developer",
    template: "%s | David Macharia",
  },
  description: "Personal portfolio of David Macharia, showcasing modern web development, data analytics, and AI applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "David Macharia | Web Developer",
    description: "Personal portfolio of David Macharia, showcasing modern web development, data analytics, and AI applications.",
    url: "https://machariandichu.vercel.app",
    siteName: "David Macharia Portfolio",
    images: [
      {
        url: "/assets/img/profile-img.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Macharia | Web Developer",
    description: "Personal portfolio of David Macharia, showcasing modern web development, data analytics, and AI applications.",
    images: ["/assets/img/profile-img.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Macharia",
    jobTitle: "Full-Stack Web Developer",
    url: "https://machariandichu.vercel.app",
    sameAs: [
      "https://github.com/dave-ndichu",
      "https://www.linkedin.com/in/macharia-davis-493a731b7"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
