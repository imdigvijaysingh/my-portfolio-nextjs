<div align="center">

# ⚡ Digvijay Singh — AI Full Stack Developer Portfolio

<p align="center">
  <strong>Production-grade personal portfolio built with Next.js 14 App Router, React 18, Tailwind CSS, and WebP image optimization.</strong>
</p>

<p align="center">
  <a href="https://digvijaysingh-one.vercel.app"><img src="https://img.shields.io/badge/Live_Portfolio-digvijaysingh--one.vercel.app-9333ea?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Website" /></a>
  <a href="https://github.com/imdigvijaysingh"><img src="https://img.shields.io/badge/GitHub-imdigvijaysingh-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/digvijaysinghpundir"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_14-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 18" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Sharp_Engine-990000?style=flat-square&logo=webassembly&logoColor=white" alt="Sharp" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License" />
</p>

</div>

---

## 📌 Overview

This repository contains the source code for the personal portfolio of **Digvijay Singh**, an **AI Full Stack Engineer** specializing in modern Web Platforms, MERN architectures, distributed backend services, and interactive 3D web experiences.

Built from scratch with the **Next.js 14 App Router**, the application highlights engineering projects, case studies, hackathon achievements, and services with an emphasis on lightning-fast performance, responsive mobile UX, dark/light theme switching, and optimized media delivery.

---

## ✨ Key Features

- **⚡ Blazing Fast Architecture**: Next.js 14 App Router with React Server Components, client-side progressive hydration, and zero layout shift.
- **🎨 Modern Aesthetic & Dark Mode**: Handcrafted dark/light theme switcher with persistent localStorage state, custom frosted-glass (`backdrop-blur`) cards, and subtle ambient gradient glows.
- **📱 Mobile-First Responsive Design**:
  - Horizontal swipeable category pills (`overflow-x-auto` with clean scrollbar hiding).
  - Compact, ergonomic project cards with responsive badge truncation and line-clamped typography to prevent mobile screen bloat.
- **🖼️ 100% WebP Asset Pipeline**:
  - Entire asset suite converted to `.webp` with native `sharp` image engine integration, achieving over **84% reduction in image payload size**.
- **🎯 Dynamic Project Case Studies**: Individual slug-based case study routes (`/projects/[slug]`) complete with architecture diagrams, challenge breakdowns, tech stack pills, and live demo links.
- **🏆 Hackathon Spotlight**: Interactive retrospective page for the **IIT Hyderabad Hackathon** featuring team leadership reflections and sprint takeaways.
- **📬 Interactive Contact Ecosystem**: Direct contact form, mailto, phone integration, and one-tap WhatsApp chat.

---

## 🛠️ Tech Stack

### Frontend & Core
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Typography**: `Outfit`, `Ovo`, and `Caveat` handwriting font via `next/font/google`
- **Image Optimization**: `next/image` backed by [`sharp`](https://sharp.pixelplumbing.com/)

### Full-Stack & Engineering Competencies
- **Languages**: JavaScript (ES6+), TypeScript, Python
- **Backend Runtimes**: Node.js, Express.js
- **Databases**: MongoDB Atlas, Mongoose ODM, Schema Normalization, Aggregation Pipelines
- **Auth & Security**: Dual-token JWT (Access & Refresh), Role-Based Access Control (RBAC)
- **3D & Graphics**: Three.js, React Three Fiber, WebGL Shader Lighting

---

## 📂 Featured Projects Showcase

| Project | Category | Tech Stack | Highlights |
| :--- | :---: | :--- | :--- |
| **Maison Rouge** | 3D & Creative Web | Next.js, Three.js, R3F, WebGL, Tailwind | 60 FPS 3D Engine, Draco Mesh Compression, Interactive 3D Twist |
| **Shyvora E-Commerce** | E-Commerce | Next.js, React 18, Node.js, Express, MongoDB, Stripe | 8 Department Filters, Frictionless Persistent Cart, High-throughput API |
| **Shyvora ERP** | Enterprise & Systems | React.js, Node.js, Express.js, MongoDB, JWT RBAC | Multi-Tenant Architecture, Biometric Attendance, Admissions CRM |
| **OnBoard** | Full Stack MERN | React, Node.js, Express, MongoDB Atlas, ImageKit | UUID Idempotent Sync, Zero-Cost Feed Engine, <16MB BSON Safe |
| **Language Detective** | AI & ML | Next.js, Python, Flask, Scikit-Learn | Sub-120ms syntactic inference, 97.4% accuracy across 22+ languages |
| **Dev Bhoomi Portal** | Enterprise & Systems | React SPA, Tailwind, HTTP/2 Multiplexing | 0.3s load time (31x faster), -95% network overhead, 100/100 SEO |

---

## 📁 Repository Structure

```text
portfolio-nextjs/
├── app/
│   ├── layout.js              # Global root layout, font configurations & metadata
│   ├── page.js                # Main portfolio landing page
│   ├── globals.css            # Tailwind custom directives & .no-scrollbar utilities
│   ├── hackathon/page.js      # IIT Hyderabad hackathon showcase page
│   └── projects/
│       ├── page.js            # All-projects catalog with category filtering
│       └── [slug]/page.js     # Deep-dive architectural case study pages
├── components/
│   ├── Navbar.js              # Sticky responsive navigation & theme toggle
│   ├── Hero.js                # Parallax hero section with interactive doodles
│   ├── About.js               # Technical specializations & tools grid
│   ├── Services.js            # Core services & engineering competencies
│   ├── Work.js                # Featured projects showcase with live links
│   ├── Hackathon.js           # Hackathon showcase section
│   ├── Contact.js             # Interactive contact form & reach-out channels
│   ├── Footer.js              # Social links, policy anchors & copyright
│   ├── LoadingOverlay.js      # Hydration loading overlay
│   └── Reveal.js              # Smooth scroll reveal animation wrapper
├── data/
│   └── projectsData.js        # Single source of truth for project metadata & case studies
├── public/
│   ├── assets/                # Icons, logos, and UI graphics (.webp)
│   │   └── projects/          # High-resolution project covers & galleries (.webp)
│   ├── favicon.ico            # Portfolio browser tab favicon
│   └── resume.pdf             # Printable developer resume
├── package.json               # Dependencies & build scripts
├── tailwind.config.js         # Tailwind configuration & design tokens
└── next.config.js             # Next.js build configurations & redirects
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher (`v20+` recommended)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/imdigvijaysingh/my-portfolio-nextjs.git
   cd my-portfolio-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live portfolio.

---

## 🛠️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Hot Module Replacement (HMR) at `localhost:3000`. |
| `npm run build` | Compiles the production build into the `.next` directory with automatic image & route optimization. |
| `npm run start` | Boots the Next.js production server for testing local production bundles. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 🚢 Deployment

This project is optimized for deployment on **[Vercel](https://vercel.com/)**:

1. Push your changes to GitHub.
2. Import the repository into the **Vercel Dashboard**.
3. Framework preset will automatically detect **Next.js**.
4. Click **Deploy**.

For CLI deployment:
```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

---

## 📬 Contact & Connect

- **Portfolio**: [digvijaysingh-one.vercel.app](https://digvijaysingh-one.vercel.app)
- **Email**: [digvijaysinghpundir18@gmail.com](mailto:digvijaysinghpundir18@gmail.com)
- **LinkedIn**: [linkedin.com/in/digvijaysinghpundir](https://www.linkedin.com/in/digvijaysinghpundir)
- **GitHub**: [github.com/imdigvijaysingh](https://github.com/imdigvijaysingh)
- **Twitter / X**: [@imdigvijaysingh](https://x.com/imdigvijaysingh)
- **WhatsApp**: [+91 6397007167](https://wa.me/916397007167)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use this codebase as inspiration for your own portfolio!

