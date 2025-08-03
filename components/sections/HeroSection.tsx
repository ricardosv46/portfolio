import React from "react";
import {
  Award,
  Calendar,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useTranslations } from "@/hooks/useTranslations";
import { socialNetwork } from "@/constants/socialNetwork";
import { TextSkeleton } from "../ui/loading-skeleton";

export const HeroSection = () => {
  const { t, isHydrated } = useTranslations();

  const handleDownloadCV = () => {
    // Descargar el CV real
    const link = document.createElement("a");
    link.href = "/cvs/CV_RICARDO_2025.pdf";
    link.download = "CV_Ricardo_Solis_2025.pdf";
    link.target = "_blank";
    link.click();
  };

  // Mostrar skeleton mientras se hidrata
  if (!isHydrated) {
    return (
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-slate-200 dark:bg-slate-700 rounded-full mb-8 animate-pulse" />
            <TextSkeleton lines={1} className="w-1/2 mx-auto mb-6" />
            <TextSkeleton lines={1} className="w-1/3 mx-auto mb-6" />
            <TextSkeleton lines={3} className="w-2/3 mx-auto mb-8" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-32 h-10 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto bg-blue-800 rounded-full flex items-center justify-center mb-8 shadow-lg">
            <Code2 className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 dark:text-white">
            Ricardo Solis
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-700 dark:text-blue-400 font-semibold">
            {t.hero.title}
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-gray-600 dark:text-slate-300">
            {t.hero.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { icon: MapPin, text: t.hero.location },
            { icon: Calendar, text: t.hero.experience },
            { icon: Award, text: t.hero.role },
          ].map((item, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm transition-all hover:scale-105 border-blue-200 text-blue-800 bg-blue-50 dark:border-blue-600 dark:text-blue-200 dark:bg-blue-900/20"
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.text}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleDownloadCV}
            className="border-blue-800 text-blue-800 hover:bg-blue-50 transform hover:scale-105 transition-all bg-transparent dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700"
          >
            <Download className="w-4 h-4 mr-2" />
            {t.hero.downloadCV}
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-blue-800 text-blue-800 hover:bg-blue-50 transform hover:scale-105 transition-all bg-transparent dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700"
            onClick={() => window.open(socialNetwork.github, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-blue-800 text-blue-800 hover:bg-blue-50 transform hover:scale-105 transition-all bg-transparent dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700"
            onClick={() => window.open(socialNetwork.linkedin, "_blank")}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};
