'use client'

import { AboutMe } from "@/components/AboutMeContent";
import Header from "@/components/header/header";
import MainContent from "@/components/mainContent";
import Projects from "@/components/projetcs";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer/footer";
import { ContactMe } from "@/components/contactMe";
export default function Home() {
  return (
    <>
      <Header />

      <MainContent />

      <AboutMe />

      <Projects />

      <Skills />

      <ContactMe />

      <Footer />
    </>
  );
}
