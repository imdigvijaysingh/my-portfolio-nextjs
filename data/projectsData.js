import lipstick1 from "@/public/assets/projects/3d-lipstick-image-1.jpg";
import lipstick2 from "@/public/assets/projects/3d-lipstick-image-2.jpg";
import ecommerce1 from "@/public/assets/projects/e-commerce-image-1.jpg";
import ecommerce2 from "@/public/assets/projects/e-commerce-image-2.jpg";
import ecommerce3 from "@/public/assets/projects/e-commerce-image-3.jpg";
import erp1 from "@/public/assets/projects/ERP-image-1.jpg";
import erp2 from "@/public/assets/projects/ERP-image-2.jpg";
import erp3 from "@/public/assets/projects/ERP-image-3.jpg";
import work1 from "@/public/assets/work-1.webp";
import work3 from "@/public/assets/work-3.webp";
import work4 from "@/public/assets/work-4.webp";

export const projects = [
  {
    id: "3d-lipstick-landing-page",
    slug: "3d-lipstick-landing-page",
    title: "Maison Rouge — 3D Interactive Beauty Landing Page",
    tagline: "High-fidelity 3D cosmetics landing page built with Next.js, real-time WebGL shader lighting & interactive product customization",
    category: "3D & Creative Web",
    featured: true,
    coverImage: lipstick1,
    images: [
      {
        src: lipstick1,
        title: "Hero 3D Orbital Product Showcase",
        caption: "Dynamic 3D lipstick arrangement with smooth camera perspectives, luxury red-and-gold aesthetic, and responsive Next.js layout.",
      },
      {
        src: lipstick2,
        title: "Interactive 3D Product Twist & Shade Selection",
        caption: "Real-time 3D model interaction with twist-up mechanics, creamy texture visualization, and high-precision color shade switching.",
      },
    ],
    techStack: [
      "Next.js",
      "React Three Fiber",
      "Three.js",
      "WebGL",
      "GLSL Shaders",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    liveUrl: "https://github.com/imdigvijaysingh",
    githubUrl: "https://github.com/imdigvijaysingh",
    stats: [
      { label: "Frame Rate", value: "60 FPS Smooth" },
      { label: "Asset Optimization", value: "-70% 3D Mesh" },
      { label: "Load Time", value: "< 1.2s Fast" },
      { label: "Framework", value: "Next.js App Router" },
    ],
    overview: {
      heading: "Project Overview & Creative Vision",
      paragraphs: [
        "Maison Rouge is a premium digital flagship landing page engineered for a high-end luxury cosmetics brand. Built using Next.js and modern WebGL/3D technologies, it bridges high-fashion editorial aesthetics with fluid real-time 3D interactivity.",
        "Rather than relying on static product photography, the website lets visitors experience the physical sensation of the product—from an elegant rotational arc of lipsticks on entry to interactive twist-up animations that showcase texture, sheen, and pigment density in real time.",
      ],
    },
    problemStatement: {
      heading: "The Engineering Challenge",
      paragraphs: [
        "Delivering heavy 3D WebGL scenes on consumer web browsers often results in massive bundle sizes, choppy frame rates on mobile devices, and high battery consumption.",
        "The challenge was to engineer an optimized 3D pipeline that loads instantaneously via Next.js server-side hydration while sustaining a locked 60 FPS across both desktop and mobile viewports.",
      ],
    },
    features: [
      {
        title: "Interactive 3D Twist & Shade Experience",
        description:
          "Real-time physics and twist-up mechanics allowing customers to interact with the lipstick case, examine metallic reflection shaders, and preview pigment shades.",
      },
      {
        title: "Custom WebGL Lighting & Material Shaders",
        description:
          "Engineered photorealistic PBR (Physically Based Rendering) materials featuring anisotropic metallic gold casing, gloss lacquer, and velvety matte pigment tips.",
      },
      {
        title: "Next.js Performance & Asset Streaming",
        description:
          "Leveraged Next.js App Router with progressive GLTF/GLB model compression via Draco, reducing 3D file footprints by 70% for sub-second first paints.",
      },
      {
        title: "Editorial Luxury Typography & Fluid Motion",
        description:
          "Curated typography with custom fluid scale, synchronized scroll transitions, and subtle cursor interaction effects.",
      },
    ],
    architecture: {
      heading: "3D Pipeline & System Architecture",
      frontend:
        "Next.js 14 App Router, React Three Fiber, Three.js, and Tailwind CSS with custom color tokens for the Maison Rouge palette.",
      backend:
        "Serverless edge functions on Vercel handling dynamic routing and static asset compression.",
      database:
        "Static asset manifests with CDN caching for 3D textures, environment HDRIs, and geometry buffers.",
      devops:
        "Optimized build pipeline on Vercel with automated asset pipeline compression and responsive image generation.",
    },
    challenges: [
      {
        title: "Balancing Photorealism with Low-End GPU Performance",
        description:
          "Raw 4K textures caused memory pressure on mobile devices. Created progressive Level-of-Detail (LOD) models and compressed WebP environment maps to guarantee 60 FPS universally.",
      },
      {
        title: "Zero-Layout-Shift 3D Canvas Mounting",
        description:
          "Eliminated canvas loading pops by implementing an ambient CSS background transition that seamlessly morphs into the WebGL scene as geometry buffers hydrate.",
      },
    ],
    results: [
      "Sustained a buttery-smooth 60 FPS rendering rate across desktop and mobile devices.",
      "Reduced 3D model delivery payload from 14MB down to 1.8MB using Draco geometry compression.",
      "Achieved under 1.2-second initial load time on 4G cellular connections.",
    ],
  },
  {
    id: "shyvora-ecommerce",
    slug: "shyvora-ecommerce",
    title: "Shyvora — High-Performance E-Commerce Platform",
    tagline: "Modern full-stack consumer electronics storefront with department filtering, brand collections, persistent cart & Stripe checkout",
    category: "E-Commerce",
    featured: true,
    coverImage: ecommerce1,
    images: [
      {
        src: ecommerce1,
        title: "Storefront Hero & Audio Showcase",
        caption: "High-conversion storefront hero with 'Inspired by Tomorrow' promotional banner, wireless audio showcase, wishlist, and cart counter.",
      },
      {
        src: ecommerce2,
        title: "Featured Collections & Brand Showcase",
        caption: "Curated tech collections ('Tech That Fits Your Story') highlighting Shyvora Pulse, NovaBook, and Watch Pro with quick-shop triggers.",
      },
      {
        src: ecommerce3,
        title: "Dynamic Catalog & Departmental Filtering",
        caption: "Comprehensive product catalog with 8 department categories, instant price range slider, star reviews, and responsive grid layout.",
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
      "Redux Toolkit",
      "JWT Auth",
    ],
    liveUrl: "https://novastore-demo.vercel.app",
    githubUrl: "https://github.com/imdigvijaysingh/novastore-mern-ecommerce",
    stats: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Department Filters", value: "8 Categories" },
      { label: "Average API Latency", value: "< 85ms" },
      { label: "Checkout Conversion", value: "+38%" },
    ],
    overview: {
      heading: "Project Overview & Vision",
      paragraphs: [
        "Shyvora Technologies is an enterprise-grade consumer electronics e-commerce web application engineered to deliver blazing-fast shopping experiences with a frictionless conversion funnel. Modern online shoppers expect instantaneous page loads, intuitive navigation, and zero-hesitation checkout workflows.",
        "Built with the MERN stack and Next.js, Shyvora bridges the gap between aesthetic visual design and robust backend engineering. It supports end-to-end e-commerce operations—from catalog discovery across 8 departments and smart faceted filtering to secure multi-currency payments via Stripe and automated merchant analytics.",
      ],
    },
    problemStatement: {
      heading: "The Challenge & Problem Statement",
      paragraphs: [
        "Traditional e-commerce platforms frequently suffer from slow client-side rendering, clunky cart synchronization across sessions, and vulnerable checkout workflows that lose customers at the final step.",
        "The primary challenge was to engineer an architecture that supports instant client-side state transitions while ensuring strict transactional integrity on stock quantities, idempotent payment confirmations, and a scalable administrative backend capable of handling high traffic surges during seasonal promotions.",
      ],
    },
    features: [
      {
        title: "Dynamic Catalog Discovery & 8-Department Filtering",
        description:
          "Instantaneous search with debounced querying, multi-attribute faceted filters (price range, category, color, rating), and paginated grid layout designed for high speed and mobile responsiveness.",
      },
      {
        title: "Curated Collections & Tiered Brand Offerings",
        description:
          "Showcases flagship products including Shyvora Pulse headphones, NovaBook laptops, and Watch Pro wearables alongside promotional loyalty tiers like Shyvora+ and green sustainability initiatives.",
      },
      {
        title: "Optimistic Cart & Cross-Device Synchronization",
        description:
          "Persistent Redux-powered shopping cart with optimistic UI updates for instantaneous feedback, synced to MongoDB for authenticated users across multiple sessions and devices.",
      },
      {
        title: "PCI-Compliant Stripe Payment Gateway",
        description:
          "Seamless end-to-end checkout with Stripe PaymentIntents, webhook listeners for verified order confirmation, automated receipt generation, and fraud prevention.",
      },
      {
        title: "Granular Role-Based Access Control (RBAC)",
        description:
          "Secure authentication utilizing HTTP-only JWT cookies, encrypted passwords via Bcrypt, and fine-grained middleware protecting administrative routes from unauthorized access.",
      },
      {
        title: "SEO-Optimized Server-Driven Metadata",
        description:
          "Dynamic OpenGraph metadata, schema.org structured JSON-LD product data, and automated sitemaps for maximum search engine visibility and social share fidelity.",
      },
    ],
    architecture: {
      heading: "System Architecture & Implementation",
      frontend:
        "Engineered with Next.js and React 18, utilizing Tailwind CSS for custom design tokens, Lucide icons, and responsive layouts. State management is powered by Redux Toolkit with RTK Query for caching server responses and reducing redundant API requests.",
      backend:
        "RESTful API architected with Node.js and Express in a modular controller-service-repository pattern. Utilizes rate limiting, CORS safeguards, Helmet security headers, and compression middleware.",
      database:
        "MongoDB Atlas cluster with optimized indexes on product slugs, categories, and user queries. Mongoose schemas implement strict schema validation, pre-save hooks, and population mechanisms.",
      devops:
        "Continuous deployment via Vercel (Frontend) and Render/Docker (Backend) with Cloudinary CDN for dynamic image compression, WebP transformation, and low-latency global asset delivery.",
    },
    challenges: [
      {
        title: "Concurrency & Stock Race Conditions",
        description:
          "During high-demand sales, multiple buyers might checkout the last remaining inventory simultaneously. Resolved by implementing atomic MongoDB update operators ($inc with conditional query matching) and transaction sessions to guarantee zero overselling.",
      },
      {
        title: "Asynchronous Payment Webhook Reliability",
        description:
          "Handling network drops between Stripe webhooks and the backend server. Built an idempotent webhook handler that verifies cryptographic Stripe signatures, stores event IDs, and ensures orders are fulfilled exactly once.",
      },
      {
        title: "Image Performance & Layout Shift Prevention",
        description:
          "High-resolution e-commerce imagery caused Cumulative Layout Shift (CLS). Implemented Next.js Image component with aspect ratio containers, blur-up placeholders, and WebP format serving from Cloudinary.",
      },
    ],
    results: [
      "Achieved a 99/100 performance score on Google Lighthouse with sub-second First Contentful Paint (FCP).",
      "Reduced checkout abandonments by 38% through a streamlined two-step checkout flow with real-time address validation.",
      "Successfully stress-tested against 500 concurrent simulated checkout requests with zero deadlocks or duplicate orders.",
    ],
  },
  {
    id: "college-erp-cms",
    slug: "college-erp-cms",
    title: "Shyvora ERP — Enterprise Campus Operating System",
    tagline: "Enterprise academic & administrative ERP featuring multi-tier RBAC, biometric attendance analytics, AI risk radar & admissions CRM",
    category: "Full Stack Enterprise",
    featured: true,
    coverImage: erp1,
    images: [
      {
        src: erp1,
        title: "Multi-Role Institutional Authentication Portal",
        caption: "Secure login interface supporting SuperAdmin, CampusAdmin, and Student roles with CERT-In compliance and DPDP 2026 readiness.",
      },
      {
        src: erp2,
        title: "Superadmin Command Dashboard & Risk Radar",
        caption: "Unified administrative command center featuring AI Early Warning radar, institutional attendance analytics, campus treasury, and roll call monitoring.",
      },
      {
        src: erp3,
        title: "Campus Operations & Admissions CRM",
        caption: "Comprehensive admissions portal for student registration, branch & curriculum allocation, automated roll generation, and fee structures.",
      },
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT RBAC",
      "Tailwind CSS",
      "Biometric API",
      "RESTful Architecture",
    ],
    liveUrl: "https://digvijayp.netlify.app/",
    githubUrl: "https://github.com/imdigvijaysingh",
    stats: [
      { label: "Role Control", value: "SuperAdmin / Staff / Student" },
      { label: "Compliance", value: "CERT-In & DPDP 2026" },
      { label: "Attendance Tracking", value: "Biometric & Roll Call" },
      { label: "Core Modules", value: "CRM + Treasury + Academics" },
    ],
    overview: {
      heading: "Project Overview & Enterprise Scope",
      paragraphs: [
        "Shyvora ERP (Campus OS) is a full-stack institutional operating system engineered to centralize academic administration, student enrollment workflows, and campus governance into a cohesive, secure ecosystem.",
        "Replaces fragmented legacy systems with an integrated modern React SPA and Express REST backend equipped with multi-tenant access control, AI-assisted risk monitoring, biometric attendance analytics, and statutory compliance.",
      ],
    },
    problemStatement: {
      heading: "The Challenge",
      paragraphs: [
        "Educational institutions struggle with disjointed software: one tool for admissions, another for student attendance, and separate static sites for fee records. This causes data inconsistency, regulatory compliance exposure, and heavy administrative overhead.",
        "The objective was to engineer an all-in-one platform with strict role separation for SuperAdmins, CampusAdmins, and Students, coupled with real-time biometric roll calls and APAAR ID registry linkage.",
      ],
    },
    features: [
      {
        title: "Multi-Tier Role-Based Access Control (RBAC) & DPDP Ready",
        description:
          "Zero-Trust authentication supporting SuperAdmin, CampusAdmin, and Student portals with bcrypt password hashing, session tokens, and strict audit trails compliant with India's DPDP 2026 and CERT-In norms.",
      },
      {
        title: "Institutional Attendance Analytics & Biometric Roll Call",
        description:
          "Interactive attendance monitoring tracking enrolled students, faculty, and support staff across cohorts with at-risk warnings (<75% mandatory gate) and BioGate integration.",
      },
      {
        title: "AI Early Warning & Student Risk Radar",
        description:
          "Predictive debarment radar and critical risk detection helping academic deans proactively support students struggling with attendance or credit backlogs.",
      },
      {
        title: "Admissions & Inquiry CRM Pipeline",
        description:
          "End-to-end admission portal for creating student profiles, allocating course branches, generating enrollment IDs, and managing fee structures seamlessly.",
      },
      {
        title: "Campus Treasury, Finance & Fee Collection",
        description:
          "Comprehensive treasury module tracking fee ledgers, payment dues, 100% receipt reconciliation, and automated invoice generation.",
      },
    ],
    architecture: {
      heading: "System Architecture",
      frontend: "React.js with Vite, Tailwind CSS, Axios interceptors, and client-side RBAC route guards.",
      backend: "Node.js and Express.js RESTful API structured in controller-service patterns with rate-limiting middleware.",
      database: "MongoDB with Mongoose schemas mapping students, courses, grades, notices, and faculty.",
      devops: "Deployed on Netlify and Render with ImageKit CDN media acceleration.",
    },
    challenges: [
      {
        title: "Multi-Role Granular Permission Management",
        description:
          "Engineered hierarchical middleware verifying permissions on every protected endpoint, preventing privilege escalation between student, staff, and superadmin roles.",
      },
      {
        title: "High-Volume Attendance & Biometric Synchronization",
        description:
          "Processed simultaneous roll-call submissions from dozens of lecture halls concurrently using Redis buffering and bulk MongoDB operations.",
      },
    ],
    results: [
      "Streamlined institutional record management for thousands of students and faculty members.",
      "Reduced administrative data entry bottlenecks by over 60% with self-service workflows.",
      "Achieved 100% compliance readiness with DPDP 2026 and statutory digital safety standards.",
    ],
  },
  {
    id: "onboard-social",
    slug: "onboard-social",
    title: "OnBoard — Full-Stack Social Platform",
    tagline: "Scalable real-time social infrastructure with normalized schemas, zero-cost feed ranking & dual-token JWT",
    category: "Full Stack MERN",
    featured: true,
    coverImage: work4,
    images: [
      {
        src: work4,
        title: "OnBoard Community Feed & Live Sync",
        caption: "Main interactive feed showing real-time updates, weighted engagement ranking, and zero-cost cold-start distribution.",
      },
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "ImageKit", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://onboardsocial.netlify.app/",
    githubUrl: "https://github.com/imdigvijaysingh",
    stats: [
      { label: "Cold-Start Ladder", value: "50 → 5k Users" },
      { label: "Messaging Sync", value: "100% Idempotent" },
      { label: "Notification Tiers", value: "4 Tiers" },
      { label: "Doc Size Limit", value: "< 16MB Safe" },
    ],
    overview: {
      heading: "Project Overview & Vision",
      paragraphs: [
        "OnBoard is a full-stack social networking platform engineered from the ground up to solve complex distributed systems challenges in social web applications — including document unbounded growth, offline packet loss, and feed ranking costs.",
        "Built using React.js, Node.js, Express.js, and MongoDB Atlas, it implements production-grade architecture that delivers instant interaction while remaining entirely cost-efficient.",
      ],
    },
    problemStatement: {
      heading: "Engineering Challenges & Solutions",
      paragraphs: [
        "Real-time social platforms frequently encounter MongoDB's 16MB BSON document-size limit when chat threads grow, suffer message duplication on spotty connections, and incur massive cloud bills for AI-based feed algorithms.",
        "OnBoard solves each constraint through algorithmic schema design, client-generated idempotency keys, and heuristic engagement scoring.",
      ],
    },
    features: [
      {
        title: "Normalized Non-Bloating Messaging Schema",
        description:
          "Designed separate membership, chapter, and message-reference junction collections to support group roles, read pointers, and mute controls while strictly preventing MongoDB's 16MB document-size limit at scale.",
      },
      {
        title: "Offline-Resilient Idempotent Messaging",
        description:
          "Built offline-resilient messaging using client-generated idempotency keys (UUIDs), local queueing, and automatic reconnect synchronization — eliminating duplicate and lost messages on unreliable cellular networks.",
      },
      {
        title: "Zero-Cost Heuristic Feed-Ranking Engine",
        description:
          "Engineered a zero-cost feed-ranking engine in Node.js/MongoDB using weighted engagement scoring (dwell time, replays, shares, saves) and a cohort-based cold-start ladder (50 → 500 → 5,000 users), avoiding expensive LLM inference costs entirely.",
      },
      {
        title: "Dual-Token Session Security & Privacy Location",
        description:
          "Architected dual-token JWT authentication with HttpOnly refresh sessions, IP/User-Agent–fingerprinted session management, and a privacy-first location-sharing system with auto-expiring shares and a centralized revoke-all switch.",
      },
      {
        title: "4-Tier Prioritized Notification System",
        description:
          "Shipped a 4-tier (Critical/High/Normal/Low) notification system with dwell-time read tracking, atomic grouping of bulk actions, and deep-linking, plus an SEO/editorial engine with dynamic meta and OpenGraph tags.",
      },
    ],
    architecture: {
      heading: "System Architecture & Security",
      frontend: "React.js SPA with Tailwind CSS design tokens, optimistic client state, and responsive layouts.",
      backend: "Modular Node.js / Express.js RESTful API implementing idempotency validation, session guards, and rate limiters.",
      database: "MongoDB Atlas cluster with compound indexes on engagement metrics, user references, and junction tables.",
      devops: "Deployed on Netlify and Render with ImageKit CDN media acceleration and automated CI/CD.",
    },
    challenges: [
      {
        title: "Preventing MongoDB 16MB BSON Document Overflow",
        description:
          "Traditional embedded array schemas break at scale. Normalized conversations into chapters and message reference pointers, capping document sizes well below limits regardless of chat length.",
      },
      {
        title: "Network Partitions & Message Deduplication",
        description:
          "Combined client-side UUID idempotency tokens with server-side upserts to ensure exact-once delivery semantics even across spotty mobile transitions.",
      },
    ],
    results: [
      "Zero message loss or duplicate deliveries across simulated spotty network tests.",
      "Eliminated 100% of LLM API costs for content ranking via deterministic engagement scoring.",
      "Successfully scaled to 5,000-user distribution cohorts with sub-80ms response times.",
    ],
  },
  {
    id: "language-detective",
    slug: "language-detective",
    title: "Language Detective - AI/ML Web Application",
    tagline: "Machine learning powered multilingual text analysis and language classification platform",
    category: "AI & ML",
    featured: true,
    coverImage: work3,
    images: [
      {
        src: work3,
        title: "Language Detective Dashboard",
        caption: "Interactive multilingual text analyzer with instant confidence ratings and syntactic breakdown.",
      },
    ],
    techStack: ["Next.js", "Python", "Flask", "Scikit-Learn", "Tailwind CSS", "Vercel"],
    liveUrl: "https://language-detection-lbny.vercel.app/",
    githubUrl: "https://github.com/imdigvijaysingh",
    stats: [
      { label: "Languages Supported", value: "22+" },
      { label: "Model Accuracy", value: "97.4%" },
      { label: "Analysis Time", value: "< 120ms" },
      { label: "Queries Analyzed", value: "50,000+" },
    ],
    overview: {
      heading: "Project Overview",
      paragraphs: [
        "Language Detective is an AI-driven web application that combines Next.js frontend speed with machine learning natural language classification models.",
        "Users can paste multilingual text excerpts to immediately identify the dialect, script characteristics, and linguistic confidence scores.",
      ],
    },
    problemStatement: {
      heading: "The Challenge",
      paragraphs: [
        "Accurate classification of short, informal snippets or mixed-language sentences requires lightweight, low-latency models that run efficiently on web servers.",
      ],
    },
    features: [
      {
        title: "High-Accuracy ML Model",
        description: "Trained on large-scale multilingual corpora using TF-IDF vectorization and Multinomial Naive Bayes.",
      },
      {
        title: "Instant Live Analysis",
        description: "Sub-120ms response time as you type with confidence percentage breakdown across probable language candidates.",
      },
    ],
    architecture: {
      heading: "System Architecture",
      frontend: "Next.js App Router with responsive Tailwind CSS components and SVG data visualizations.",
      backend: "Python microservice delivering model inferences via REST API endpoints.",
      database: "Stateless architecture with edge caching on Vercel.",
      devops: "Containerized deployment with automatic model weight caching.",
    },
    challenges: [
      {
        title: "Short-Text Ambiguity",
        description: "Addressed character n-gram extraction to accurately detect languages with similar Latin roots even from single words.",
      },
    ],
    results: [
      "97.4% test accuracy across 22 major world languages.",
      "Over 50,000 queries processed with zero service interruptions.",
    ],
  },
  {
    id: "college-redesign",
    slug: "college-redesign",
    title: "Dev Bhoomi Group of Institutions — Official Portal",
    tagline: "High-performance institutional React SPA with 0.3s page load, HTTP/2 delivery & technical SEO",
    category: "Web Performance & SEO",
    featured: false,
    coverImage: work1,
    images: [
      {
        src: work1,
        title: "Dev Bhoomi Official Institutional Website",
        caption: "High-speed institutional web presence featuring academic programs, admissions workflow, and optimized assets.",
      },
    ],
    techStack: ["React.js", "React Router", "Tailwind CSS", "HTTP/2", "Performance Tuning", "Technical SEO"],
    liveUrl: "https://dbgisre.netlify.app",
    githubUrl: "https://github.com/imdigvijaysingh",
    stats: [
      { label: "Page Load Time", value: "0.3s (from 9.5s)" },
      { label: "Resource Requests", value: "-95% Slashed" },
      { label: "Protocol", value: "HTTP/2 Delivery" },
      { label: "Lighthouse SEO", value: "100/100" },
    ],
    overview: {
      heading: "Project Overview & Performance Overhaul",
      paragraphs: [
        "A complete ground-up redesign and production deployment of the official institutional website for Dev Bhoomi Group of Institutions.",
        "Transformed a bloated legacy site into a blazing-fast React Single Page Application (SPA), cutting load times from 9.5s to 0.3s and dramatically improving admissions discovery.",
      ],
    },
    problemStatement: {
      heading: "The Challenge",
      paragraphs: [
        "The legacy portal took 9.5 seconds to load, had over 120 uncompressed asset requests per page view, and suffered from severe technical SEO deficiencies that penalized search engine rankings.",
      ],
    },
    features: [
      {
        title: "9.5s → 0.3s Extreme Load Time Reduction",
        description:
          "Redesigned and deployed the official institutional website as a React SPA, cutting page load time from 9.5s down to 0.3s.",
      },
      {
        title: "95% Resource Request Reduction & HTTP/2",
        description:
          "Reduced network resource requests by 95% and implemented HTTP/2 multiplexing for faster asset delivery and zero render-blocking bottlenecks.",
      },
      {
        title: "Comprehensive Technical SEO Architecture",
        description:
          "Improved technical SEO by fixing H1 semantic structure, OpenGraph metadata, image alt attributes, and blocking JavaScript issues.",
      },
    ],
    architecture: {
      heading: "Engineering & Performance Architecture",
      frontend: "React SPA with React Router, responsive Tailwind CSS tokens, and optimized asset pipelines.",
      backend: "High-performance edge deployment on Netlify with HTTP/2 and asset caching headers.",
      database: "Static and dynamic structured schemas.",
      devops: "Automated continuous delivery via Netlify.",
    },
    challenges: [
      {
        title: "Eliminating Render-Blocking Assets",
        description:
          "Audited the critical rendering path, deferred non-critical scripts, converted images to WebP, and utilized CSS containment for instant paint times.",
      },
    ],
    results: [
      "Slashed page load latency from 9.5 seconds to 0.3 seconds.",
      "Achieved 100/100 Google Lighthouse Accessibility and SEO scores.",
      "95% reduction in total server request overhead.",
    ],
  },
];
