import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { projects } from "@/data/projects";
import styles from "./PortfolioDetails.module.css";

// Generate static params for all slugs at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description || `Read about my work on ${project.title}.`,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description || `Read about my work on ${project.title}.`,
      images: [
        {
          url: project.img,
          width: 1200,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description || `Read about my work on ${project.title}.`,
      images: [project.img],
    },
  };
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description || project.longDescription?.split('\\n')[0],
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    url: `https://machariandichu.vercel.app/portfolio/${project.slug}`,
    author: {
      "@type": "Person",
      name: "David Macharia"
    }
  };

  return (
    <main className={styles.detailsPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation Header */}
      <nav className={styles.navHeader}>
        <div className={styles.container}>
          <Link href="/#portfolio" className={styles.backBtn}>
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <article className={styles.container}>
        {/* Project Header */}
        <header className={styles.projectHeader}>
          <h1 className="neon-text">{project.title}</h1>
          <p className={styles.category}>{project.category}</p>
        </header>

        {/* Hero Image */}
        <div className={`glass-card ${styles.heroImageContainer}`}>
          <Image
            src={project.img}
            alt={project.title}
            width={1200}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          {/* Main Description */}
          <section className={styles.mainContent}>
            <div className={`glass ${styles.contentBox}`}>
              <h2>Project Overview</h2>
              <div className={styles.longDescription}>
                {project.longDescription.split('\\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Sidebar Meta Info */}
          <div className={styles.sidebar}>
            <div className={`glass ${styles.metaBox}`}>
              <h3>Project Details</h3>
              
              <ul className={styles.metaList}>
                <li>
                  <div className={styles.metaIcon}><User size={18} /></div>
                  <div className={styles.metaInfo}>
                    <strong>Client</strong>
                    <span>{project.client}</span>
                  </div>
                </li>
                <li>
                  <div className={styles.metaIcon}><Calendar size={18} /></div>
                  <div className={styles.metaInfo}>
                    <strong>Date</strong>
                    <span>{project.date}</span>
                  </div>
                </li>
                <li>
                  <div className={styles.metaIcon}><Tag size={18} /></div>
                  <div className={styles.metaInfo}>
                    <strong>Category</strong>
                    <span>{project.category}</span>
                  </div>
                </li>
              </ul>

              <div className={styles.techStack}>
                <strong>Technologies Used</strong>
                <div className={styles.tags}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>

              <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
                <span>Visit Project</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
