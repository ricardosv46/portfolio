"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Portfolio() {
  // Usar hook de tema

  return (
    <div
      className={`min-h-screen transition-all duration-500 bg-white dark:bg-slate-900`}
    >
      <Header />

      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <EducationSection />

      <ProjectSection />

      <SkillsSection />

      <ContactSection />

      <Footer />
    </div>
  );
}
