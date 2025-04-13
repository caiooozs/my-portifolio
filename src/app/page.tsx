'use client'

import { AboutMe } from "@/components/AboutMe/AboutMeContent";
import Header from "@/components/header/header";
import MainContent from "@/components/mainContent/mainContent";
import Projects from "@/components/projectSection/projetcs";
import { Skills } from "@/components/Skills/skills";
import { Footer } from "@/components/footer/footer";
import { ContactMe } from "@/components/contact/contactMe";

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
