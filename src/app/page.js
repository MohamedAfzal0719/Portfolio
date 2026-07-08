import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Journey from "@/components/experience/Journey";
import Projects from "@/components/projects/Projects";
import Achievements from "@/components/impact/Achievements";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Background from "@/components/layout/Background";
import Certificates from "@/components/certificates/Certificates";

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen">
      <div className="sticky top-0 z-0">
        <Hero />
      </div>
      <div className="relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">

        {/* Masking Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-50 dark:bg-slate-950">
          <Background className="sticky top-0 h-screen w-full pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <About />
          <Journey />
          <Experience />
          <Skills />
          <Certificates />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}