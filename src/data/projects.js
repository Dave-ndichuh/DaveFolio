export const projects = [
  { 
    id: 1,
    slug: "shifts-garden",
    title: "ShiftsGarden", 
    category: "SaaS Application", 
    client: "Internal Product",
    date: "August 2025",
    url: "https://shiftsgarden.example.com",
    shortDescription: "A modern shift management and employee scheduling platform built with Next.js, Tailwind CSS, and Firebase.",
    longDescription: "ShiftsGarden was engineered from the ground up to solve the complex challenges of modern workforce scheduling. The platform handles thousands of concurrent users, dynamically resolving scheduling conflicts in real-time. By utilizing a completely serverless backend with Firebase Functions and Firestore, the application guarantees sub-second response times globally.\n\nOne of the core challenges was creating an intuitive drag-and-drop interface for managers that could instantly sync with employee mobile devices. I solved this by leveraging Next.js App Router features combined with sophisticated state management, resulting in an incredibly smooth, app-like experience on the web.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    img: "/assets/img/portfolio/shifts_garden.png" 
  },
  { 
    id: 2,
    slug: "brite-spot",
    title: "BriteSpot", 
    category: "Enterprise App", 
    client: "BriteSpot Logistics",
    date: "March 2026",
    url: "https://github.com/machariandichu/britespot",
    shortDescription: "A robust microservices-based application featuring a Next.js frontend, NestJS backend, and Dockerized Turborepo setup.",
    longDescription: "BriteSpot is an enterprise-grade logistics and tracking platform. Due to the scale of the operation, a monolithic architecture was no longer viable. I architected the system using a Turborepo monorepo, cleanly separating the Next.js administration portal from the NestJS microservices.\n\nThe entire infrastructure is containerized using Docker and deployed across a Kubernetes cluster. I utilized PostgreSQL as the primary data store with Prisma ORM, ensuring rock-solid data integrity and type safety across the entire monorepo.",
    techStack: ["NestJS", "Next.js", "Docker", "Turborepo", "PostgreSQL"],
    img: "/assets/img/portfolio/brite_spot.png" 
  },
  { 
    id: 3,
    slug: "autohub-pos",
    title: "AutoHub POS", 
    category: "E-Commerce / POS", 
    client: "AutoHub Dealership",
    date: "November 2024",
    url: "https://autohub.example.com",
    shortDescription: "A comprehensive inventory and point-of-sale management system tailored specifically for auto spare parts.",
    longDescription: "AutoHub POS bridges the gap between physical retail operations and digital inventory management. Managing tens of thousands of individual spare parts requires immense database optimization. I designed a custom PostgreSQL schema that allows for deep hierarchical categorization of parts by make, model, and year.\n\nThe frontend is heavily optimized for speed, allowing cashiers to ring up items using barcode scanners with zero perceptible latency. The system also includes automated low-stock alerts and dynamic pricing algorithms.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
    img: "/assets/img/portfolio/autohub_pos.png" 
  },
  { 
    id: 4,
    slug: "efyrun",
    title: "EfyRun", 
    category: "Full-Stack App", 
    client: "EfyRun Health",
    date: "January 2025",
    url: "https://github.com/machariandichu/efyrun",
    shortDescription: "A high-performance full-stack web application with decoupled frontend and backend architectures.",
    longDescription: "EfyRun is a highly interactive fitness tracking platform that ingests massive amounts of telemetry data from wearable devices. The core challenge was building a system capable of handling high-frequency data streams without bottlenecking the database.\n\nI utilized a decoupled architecture, pushing data through a message queue before it is processed and aggregated in the database. The frontend features real-time, interactive data visualization dashboards built with D3.js and React, giving users instant insights into their performance metrics.",
    techStack: ["React", "D3.js", "Supabase", "Redis"],
    img: "/assets/img/portfolio/efyrun.png" 
  }
];
