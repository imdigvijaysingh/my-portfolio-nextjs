import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium background gradients */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen transition-opacity">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400/40 dark:bg-purple-600/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-400/40 dark:bg-orange-600/30 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
