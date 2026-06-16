import styles from "./About.module.css";
import Image from "next/image";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React", "Next.js", 
  "Bootstrap", "Django", "Python", 
  "Data Analytics", "Graphic Design", "UI/UX"
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
                <p><strong>Email:</strong> ndichudavid5@gmail.com</p>
                <p><strong>Phone:</strong> (+254) 704 003 710</p>
                <p><strong>Location:</strong> Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className={styles.infoCol}>
              <h2 className="neon-text">About Me</h2>
              <p>
                I'm David Macharia, a passionate web developer with a strong focus on crafting intuitive and dynamic user experiences. My journey began with a love for technology, and I've since honed my skills in web development, data analytics, and AI applications.
              </p>
              <p>
                I thrive on creating clean, responsive designs that bring concepts to life, using modern tools and frameworks. I believe in continuous learning and growth, always looking for new ways to improve and innovate.
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
