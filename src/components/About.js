import styles from "./About.module.css";
import Image from "next/image";

const skills = [
  "Next.js", "React", "Node.js", "NestJS", "TypeScript",
  "Tailwind CSS", "Firebase", "Supabase", 
  "Docker", "Turborepo", "PostgreSQL", "UI/UX Design"
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={`glass ${styles.aboutCard}`}>
          <div className={styles.grid}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/assets/img/profile-img.jpg" 
                  alt="David Macharia" 
                  width={300} 
                  height={300} 
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.contactInfo}>
                <p><strong>Email:</strong> machahdavis@gmail.com</p>
                <p><strong>Phone:</strong> (+254) 704 003 710</p>
                <p><strong>Location:</strong> Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className={styles.infoCol}>
              <h2 className="neon-text">About Me</h2>
              <p>
                I'm David Macharia, a Full-Stack Software Engineer specializing in modern JavaScript frameworks and scalable backend architectures. I have a proven track record of engineering comprehensive SaaS platforms, enterprise microservices, and high-performance web applications.
              </p>
              <p>
                I thrive in environments where I can build complex, data-driven systems—from intelligent Shift Management dashboards to robust Point of Sale (POS) tools using Next.js, NestJS, and Turborepo. I am deeply passionate about writing clean, maintainable code and delivering cutting-edge, user-centric experiences.
              </p>

              <div className={styles.skillsSection}>
                <h3>Core Competencies</h3>
                <div className={styles.skillsTags}>
                  {skills.map((skill, idx) => (
                    <span key={idx} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
