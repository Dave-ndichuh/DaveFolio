import styles from "./Services.module.css";
import { Monitor, Cloud, LineChart, Code2, Smartphone, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites using React, Next.js, and modern CSS frameworks. Ensuring seamless user experiences.",
    icon: Monitor,
  },
  {
    title: "Cloud Integration",
    description: "Offering cloud-based solutions to streamline business processes, ensuring scalability and security for growing organizations.",
    icon: Cloud,
  },
  {
    title: "Data Analytics",
    description: "Providing data-driven insights and analytics solutions, helping businesses make informed decisions.",
    icon: LineChart,
  },
  {
    title: "API Development",
    description: "Creating robust and secure APIs for seamless integration between systems using modern backend technologies.",
    icon: Code2,
  },
  {
    title: "Mobile Optimization",
    description: "Ensuring that websites are mobile-friendly and optimized for all devices, improving SEO ranking.",
    icon: Smartphone,
  },
  {
    title: "Security Audits",
    description: "Conducting thorough security audits to identify and resolve vulnerabilities in web applications.",
    icon: ShieldCheck,
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className="neon-text">Services</h2>
          <p>Cutting-edge tech solutions tailored to your business needs.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className={`glass glass-card ${styles.serviceCard}`}>
                <div className={styles.iconWrapper}>
                  <Icon size={32} className={styles.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
