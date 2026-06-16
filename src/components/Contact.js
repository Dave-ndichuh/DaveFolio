"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

export default function Contact() {
  const [status, setStatus] = useState({ success: null, message: "" });
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setStatus({ success: null, message: "" });

    const formData = new FormData(e.currentTarget);
    try {
      const response = await sendContactEmail(null, formData);
      setStatus({ success: response.success, message: response.message });
      if (response.success) {
        e.target.reset();
      }
    } catch (error) {
      setStatus({ success: false, message: "An unexpected error occurred. Please try again." });
    } finally {
      setIsPending(false);
    }
  };

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
              <div className={styles.formGroup}>
                <input type="text" name="name" placeholder="Your Name" required className={styles.input} disabled={isPending} />
                <input type="email" name="email" placeholder="Your Email" required className={styles.input} disabled={isPending} />
              </div>
              <input type="text" name="subject" placeholder="Subject" required className={styles.input} disabled={isPending} />
              <textarea name="message" placeholder="Message" rows="5" required className={styles.textarea} disabled={isPending}></textarea>
              
              <button type="submit" className={styles.submitBtn} disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 size={18} className={styles.spinner} /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status.message && (
                <div className={`${styles.statusMessage} ${status.success ? styles.success : styles.error}`}>
                  {status.success ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
