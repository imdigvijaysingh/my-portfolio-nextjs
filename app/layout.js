import { Outfit, Ovo, Caveat } from "next/font/google";
import LoadingOverlay from "@/components/LoadingOverlay";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://digvijaysingh-one.vercel.app"),
  title: {
    default: "Digvijay Singh | AI Full Stack Engineer (React.js, Node.js, Express, MongoDB)",
    template: "%s | Digvijay Singh",
  },
  description:
    "Portfolio of Digvijay Singh, AI Full Stack Engineer specializing in React.js, Node.js, Express.js, and MongoDB. Hands-on experience architecting production-grade web platforms, scalable data models, and role-based ERP/CMS infrastructure.",
  keywords: [
    "Digvijay Singh",
    "AI Full Stack Engineer",
    "Full-Stack Engineer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB Atlas",
    "RESTful API Design",
    "JWT Authentication",
    "RBAC Systems",
    "ERP Web Applications",
    "JavaScript Developer",
  ],
  authors: [{ name: "Digvijay Singh", url: "https://digvijaysingh-one.vercel.app" }],
  creator: "Digvijay Singh",
  publisher: "Digvijay Singh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digvijaysingh-one.vercel.app",
    siteName: "Digvijay Singh Portfolio",
    title: "Digvijay Singh | AI Full Stack Engineer",
    description:
      "Crafting modern, high-performance web applications with clean code and beautiful UI/UX. Turning ideas into impactful digital experiences.",
    images: [
      {
        url: "/assets/profile.webp",
        width: 1200,
        height: 630,
        alt: "Digvijay Singh - AI Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digvijay Singh | AI Full Stack Engineer",
    description:
      "Crafting modern, high-performance web applications with clean code and beautiful UI/UX.",
    images: ["/assets/profile.webp"],
    creator: "@imdigvijaysingh",
  },
  icons: {
    icon: "/assets/logo.webp",
    apple: "/assets/logo.webp",
  },
};

// Schema.org structured data for SEO and Google Knowledge Graph
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Digvijay Singh",
  jobTitle: "AI Full Stack Engineer",
  url: "https://digvijaysingh-one.vercel.app",
  sameAs: [
    "https://github.com/imdigvijaysingh",
    "https://linkedin.com/in/digvijaysinghpundir",
    "https://instagram.com/digvijaypundiir/",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "AI Full Stack Development",
    "Full-Stack Development",
    "E-Commerce Development",
  ],
};

// Runs before paint so the correct theme (light/dark) is applied immediately
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.theme;
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable} ${caveat.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white bg-slate-50 relative overflow-x-hidden transition-colors duration-300">
        <LoadingOverlay />
        {children}
      </body>
    </html>
  );
}
