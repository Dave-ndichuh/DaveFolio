import styles from "./Portfolio.module.css";
import Image from "next/image";

const projects = [
  { 
    id: 1, 
    title: "ShiftsGarden", 
    category: "SaaS Application", 
    description: "A modern shift management and employee scheduling platform built with Next.js, Tailwind CSS, and Firebase.",
    img: "/assets/img/portfolio/shifts_garden.png" 
  },
  { 
    id: 2, 
    title: "BriteSpot", 
    category: "Enterprise App", 
    description: "A robust microservices-based application featuring a Next.js frontend, NestJS backend, and Dockerized Turborepo setup.",
    img: "/assets/img/portfolio/brite_spot.png" 
  },
  { 
    id: 3, 
    title: "AutoHub POS", 
    category: "E-Commerce / POS", 
    description: "A comprehensive inventory and point-of-sale management system tailored specifically for auto spare parts.",
    img: "/assets/img/portfolio/autohub_pos.png" 
  },
  { 
    id: 4, 
    title: "EfyRun", 
    category: "Full-Stack App", 
    description: "A high-performance full-stack web application with decoupled frontend and backend architectures.",
    img: "/assets/img/portfolio/efyrun.png" 
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className="neon-text">Portfolio</h2>
          <p>A curated selection of my recent full-stack projects and SaaS applications.</p>
        </div>

        <div className={styles.grid}>
          {projects.map(project => (
            <div key={project.id} className={styles.portfolioItem}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className={styles.image} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <h3>{project.title}</h3>
                    <span>{project.category}</span>
                    <p className={styles.projectDesc}>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
