import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";
import styles from "./Hero.module.css";
import { ChevronDown, ArrowRight } from "lucide-react";

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
            <Link href="/nexus" className={styles.nexusBtn} style={{display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(6, 182, 212, 0.5)", background: "rgba(6, 182, 212, 0.1)", color: "#22d3ee", padding: "12px 24px", borderRadius: "30px", textDecoration: "none", fontWeight: "600", transition: "all 0.3s ease"}}>
              Nexus Hub <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.scrollDown}>
        <a href="#about"><ChevronDown size={32} /></a>
      </div>
    </section>
  );
}
