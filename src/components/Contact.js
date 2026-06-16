"use client";

import styles from "./Contact.module.css";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xrevdqpk");

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
            <form className={`glass ${styles.contactForm}`} onSubmit={handleSubmit}>
              {state.succeeded ? (
                <div className={`${styles.statusMessage} ${styles.success}`}>
                  <CheckCircle2 size={24} />
                  <div>
                    <h3 style={{ margin: "0 0 5px 0" }}>Message Sent!</h3>
                    <p style={{ margin: 0 }}>Thank you for reaching out. I'll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.formGroup}>
                    <input type="text" name="name" placeholder="Your Name" required className={styles.input} disabled={state.submitting} />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    
                    <input type="email" name="email" placeholder="Your Email" required className={styles.input} disabled={state.submitting} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  
                  <input type="text" name="subject" placeholder="Subject" required className={styles.input} disabled={state.submitting} />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  
                  <textarea name="message" placeholder="Message" rows="5" required className={styles.textarea} disabled={state.submitting}></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  
                  <button type="submit" className={styles.submitBtn} disabled={state.submitting}>
                    {state.submitting ? (
                      <>
                        <Loader2 size={18} className={styles.spinner} /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
