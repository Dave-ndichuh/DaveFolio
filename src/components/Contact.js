"use client";

import styles from "./Contact.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className="neon-text">Contact</h2>
          <p>Feel free to reach out via the following:</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <div className={`glass ${styles.infoCard}`}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3>Address</h3>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div className={`glass ${styles.infoCard}`}>
              <div className={styles.iconWrapper}>
                <Phone size={24} className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3>Phone</h3>
                <p>(+254) 704 003 710</p>
              </div>
            </div>

            <div className={`glass ${styles.infoCard}`}>
              <div className={styles.iconWrapper}>
                <Mail size={24} className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3>Email</h3>
                <p>ndichudavid5@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            <form className={`glass ${styles.contactForm}`} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your Name" required className={styles.input} />
                <input type="email" placeholder="Your Email" required className={styles.input} />
              </div>
              <input type="text" placeholder="Subject" required className={styles.input} />
              <textarea placeholder="Message" rows="5" required className={styles.textarea}></textarea>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
