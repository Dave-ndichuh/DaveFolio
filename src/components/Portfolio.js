"use client";

import React, { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Portfolio.module.css";
import { projects } from "@/data/projects";

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h2 className="neon-text">Portfolio</h2>
            <p>A selection of my recent engineering projects.</p>
          </div>
          <div className={styles.carouselControls}>
            <button 
              className={styles.controlBtn} 
              onClick={scrollPrev} 
              disabled={!prevBtnEnabled}
              aria-label="Previous Project"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className={styles.controlBtn} 
              onClick={scrollNext} 
              disabled={!nextBtnEnabled}
              aria-label="Next Project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {projects.map((project) => (
              <div className={styles.emblaSlide} key={project.id}>
                <div className={`glass-card ${styles.portfolioItem}`}>
                  <div className={styles.imageContainer}>
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      width={600} 
                      height={400} 
                      className={styles.projectImage}
                    />
                    <div className={styles.overlay}>
                      <div className={styles.overlayContent}>
                        <h3>{project.title}</h3>
                        <p className={styles.category}>{project.category}</p>
                        <p className={styles.description}>{project.shortDescription}</p>
                        <Link href={`/portfolio/${project.slug}`} className={styles.detailsBtn}>View Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
