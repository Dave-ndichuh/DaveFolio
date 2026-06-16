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

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.detailsPage}>
      {/* Navigation Header */}
      <div className={styles.navHeader}>
        <div className={styles.container}>
          <Link href="/#portfolio" className={styles.backBtn}>
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        {/* Project Header */}
        <div className={styles.projectHeader}>
          <h1 className="neon-text">{project.title}</h1>
          <p className={styles.category}>{project.category}</p>
        </div>

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
          <div className={styles.mainContent}>
            <div className={`glass ${styles.contentBox}`}>
              <h2>Project Overview</h2>
              <div className={styles.longDescription}>
                {project.longDescription.split('\\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

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
      </div>
    </main>
  );
}
