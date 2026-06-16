import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <section id="resume" className={styles.resumeSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className="neon-text">Resume</h2>
          <p>A snapshot of my journey in tech and web development.</p>
        </div>

        <div className={styles.grid}>
          {/* Education */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Education</h3>
            
            <div className={`glass ${styles.resumeItem}`}>
              <h4>Certificate in Web Development</h4>
              <h5>2024 - Ongoing</h5>
              <p><em>eMobilis, Nairobi, Kenya</em></p>
              <p>Intensive web development program covering HTML, CSS, Bootstrap, Django, and JavaScript, with a focus on building real-world, responsive web applications.</p>
            </div>

            <div className={`glass ${styles.resumeItem}`}>
              <h4>BSc. Mathematics & Computer Science</h4>
              <h5>2018 - 2023</h5>
              <p><em>Kenya Methodist University, Nairobi, Kenya</em></p>
              <p>Specialization in Computer Networks and Statistics. Focused on data analytics, web development, and artificial intelligence.</p>
            </div>
          </div>

          {/* Experience */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Professional Experience</h3>
            
            <div className={`glass ${styles.resumeItem}`}>
              <h4>Freelance Web Developer</h4>
              <h5>2023 - Present</h5>
              <p><em>Self-Employed, Nairobi, Kenya</em></p>
              <ul>
                <li>Developed responsive websites for clients in various industries using HTML, CSS, Bootstrap, and Django.</li>
                <li>Customized and optimized website templates to meet client specifications.</li>
                <li>Implemented front-end and back-end functionalities, including database integration.</li>
              </ul>
            </div>

            <div className={`glass ${styles.resumeItem}`}>
              <h4>Computer Science Intern</h4>
              <h5>2022 - 2023</h5>
              <p><em>Sadick Technologies, Nairobi, Kenya</em></p>
              <ul>
                <li>Worked on developing internal web applications using Django and Bootstrap frameworks.</li>
                <li>Assisted in database management, ensuring data security using SQL Server.</li>
                <li>Collaborated with the design team to implement user-friendly interfaces.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
