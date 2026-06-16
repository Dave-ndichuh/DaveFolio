"use client";

import { useState } from "react";
import styles from "./Resume.module.css";
import { Download, ChevronRight } from "lucide-react";

const experienceData = [
  {
    id: "freelance",
    company: "Freelance / Self-Employed",
    role: "Full-Stack Software Engineer",
    period: "2023 - Present",
    location: "Nairobi, Kenya",
    achievements: [
      "Architected and deployed scalable SaaS platforms (e.g., ShiftsGarden) using Next.js, Firebase, and Tailwind CSS.",
      "Engineered a comprehensive Point of Sale (POS) and inventory management system (AutoHub) powered by Next.js and Supabase.",
      "Developed robust microservices architectures utilizing NestJS, Next.js, and Docker within Turborepo monorepos (BriteSpot).",
      "Optimized client web applications for performance, accessibility, and SEO, achieving 90+ Lighthouse scores."
    ],
    tech: ["Next.js", "React", "Node.js", "NestJS", "Supabase", "Firebase", "Docker"]
  },
  {
    id: "sadick",
    company: "Sadick Technologies",
    role: "Software Engineering Intern",
    period: "2022 - 2023",
    location: "Nairobi, Kenya",
    achievements: [
      "Collaborated with cross-functional teams to develop internal operational web applications using Django and Bootstrap.",
      "Assisted in database schema design and management, ensuring data integrity and security across SQL Server environments.",
      "Participated in agile workflows, daily stand-ups, and code reviews to maintain high code quality standards.",
      "Resolved frontend bugs and implemented responsive UI components based on Figma design specifications."
    ],
    tech: ["Django", "Python", "SQL Server", "Bootstrap", "JavaScript"]
  },
  {
    id: "education",
    company: "Education",
    role: "Academic Background",
    period: "2018 - 2024",
    location: "Nairobi, Kenya",
    achievements: [
      "BSc. Mathematics & Computer Science — Kenya Methodist University (2018 - 2023). Focused on data analytics, web development, and artificial intelligence.",
      "Certificate in Web Development — eMobilis (2024). Intensive training on building responsive, real-world web applications."
    ],
    tech: ["Computer Networks", "Statistics", "Data Analytics", "AI"]
  }
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState(experienceData[0].id);

  const activeData = experienceData.find(item => item.id === activeTab);

  return (
    <section id="resume" className={styles.resumeSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleWrapper}>
            <h2 className="neon-text">Experience</h2>
            <p>Where I've worked and what I've learned.</p>
          </div>
          <a href="/assets/David_Macharia_Resume.pdf" download="David_Macharia_Resume.pdf" className={styles.downloadBtn}>
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>

        <div className={styles.contentGrid}>
          {/* Tabs Menu */}
          <div className={styles.tabsContainer}>
            {experienceData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`${styles.tabButton} ${activeTab === item.id ? styles.activeTab : ""}`}
              >
                {item.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`glass ${styles.tabContent}`}>
            <div className={styles.roleHeader}>
              <h3>
                {activeData.role} <span className={styles.companyAccent}>@ {activeData.company}</span>
              </h3>
              <p className={styles.period}>{activeData.period} | {activeData.location}</p>
            </div>

            <ul className={styles.achievementsList}>
              {activeData.achievements.map((desc, idx) => (
                <li key={idx}>
                  <ChevronRight size={18} className={styles.bulletIcon} />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            <div className={styles.techStack}>
              {activeData.tech.map((techItem, idx) => (
                <span key={idx} className={styles.techBadge}>{techItem}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
