import styles from "./Portfolio.module.css";
import Image from "next/image";

const projects = [
  { id: 1, title: "Productivity App", category: "App", img: "/assets/img/portfolio/app-1.jpg" },
  { id: 2, title: "Customer Database", category: "Database", img: "/assets/img/portfolio/product-1.jpeg" },
  { id: 3, title: "Startup Branding", category: "Graphics", img: "/assets/img/portfolio/branding-1.jpg" },
  { id: 4, title: "Book Collection Web", category: "Web", img: "/assets/img/portfolio/books-1.jpg" },
  { id: 5, title: "Meal Planning App", category: "App", img: "/assets/img/portfolio/app-2.jpg" },
  { id: 6, title: "Sales Inventory", category: "Database", img: "/assets/img/portfolio/product-2.png" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className="neon-text">Portfolio</h2>
          <p>Some of the recent projects I've brought to life.</p>
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
