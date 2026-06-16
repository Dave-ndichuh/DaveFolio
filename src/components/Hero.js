import ParticlesBackground from "./ParticlesBackground";
import styles from "./Hero.module.css";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <ParticlesBackground />
      <div className={styles.content}>
        <div className={`glass ${styles.heroCard}`}>
          <h1 className="neon-text">David Macharia</h1>
          <h2>Web Developer & Innovator</h2>
          <p>
            Building responsive, dynamic, and AI-driven web applications 
            with a focus on clean code and premium design.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#portfolio" className={styles.primaryBtn}>View My Work</a>
            <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
          </div>
        </div>
      </div>
      <div className={styles.scrollDown}>
        <a href="#about"><ChevronDown size={32} /></a>
      </div>
    </section>
  );
}
