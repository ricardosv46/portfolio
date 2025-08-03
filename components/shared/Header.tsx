import { useStore } from "@/store/useStore";
import { useTranslations } from "@/hooks/useTranslations";
import { Code2, Languages, Sun, Moon, Menu, X, Sparkles } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

export const Header = () => {
  const { isDarkMode, language, setLanguage, toggleDarkMode } = useStore();
  const { t } = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar scroll y cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para navegación suave
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? isDarkMode
            ? "bg-slate-900/98 backdrop-blur-xl border-slate-700/50 shadow-2xl shadow-slate-900/20"
            : "bg-white/98 backdrop-blur-xl border-gray-200/50 shadow-2xl shadow-gray-900/10"
          : isDarkMode
          ? "bg-slate-900/80 backdrop-blur-md border-slate-700/30"
          : "bg-white/80 backdrop-blur-md border-gray-200/30"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo y Nombre */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection("top")}
              className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? "bg-slate-600/20 opacity-0 group-hover:opacity-100"
                      : "bg-slate-300/30 opacity-0 group-hover:opacity-100"
                  } blur-sm`}
                />
                <Code2
                  className={`h-8 w-8 relative z-10 transition-all duration-300 ${
                    isDarkMode ? "text-slate-300" : "text-slate-700"
                  } group-hover:text-blue-500 group-hover:scale-110`}
                />
                <Sparkles
                  className={`absolute -top-1 -right-1 h-3 w-3 transition-all duration-300 ${
                    isDarkMode ? "text-blue-400" : "text-blue-500"
                  } opacity-0 group-hover:opacity-100 group-hover:scale-125`}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-bold transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  } group-hover:text-blue-500`}
                >
                  Ricardo Solis
                </span>
                <span
                  className={`text-xs font-medium transition-colors duration-300 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  } group-hover:text-blue-400`}
                >
                  Full Stack Developer
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              "about",
              "experience",
              "education",
              "projects",
              "skills",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-4 py-2 rounded-lg capitalize transition-all duration-300 font-medium group overflow-hidden ${
                  isDarkMode
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-105">
                  {t.nav[section as keyof typeof t.nav]}
                </span>
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? "bg-slate-700/20 opacity-0 group-hover:opacity-100"
                      : "bg-slate-200/50 opacity-0 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-500"
                  } group-hover:w-full`}
                />
              </button>
            ))}

            {/* Separador */}
            <div
              className={`w-px h-6 mx-2 ${
                isDarkMode ? "bg-slate-600" : "bg-slate-300"
              }`}
            />

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 font-medium group overflow-hidden ${
                isDarkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <Languages className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-1px]">
                {language === "es" ? "EN" : "ES"}
              </span>
              <div
                className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-slate-700/20 opacity-0 group-hover:opacity-100"
                    : "bg-slate-200/50 opacity-0 group-hover:opacity-100"
                }`}
              />
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 group overflow-hidden ${
                isDarkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </div>
              <div
                className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-slate-700/20 opacity-0 group-hover:opacity-100"
                    : "bg-slate-200/50 opacity-0 group-hover:opacity-100"
                }`}
              />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative px-3 py-2 rounded-lg transition-all duration-300 group overflow-hidden"
          >
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </div>
            <div
              className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-slate-700/20 opacity-0 group-hover:opacity-100"
                  : "bg-slate-200/50 opacity-0 group-hover:opacity-100"
              }`}
            />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
            isDarkMode ? "border-slate-700/50" : "border-gray-200/50"
          } ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`border-t ${
              isDarkMode ? "border-slate-700/50" : "border-gray-200/50"
            }`}
          >
            <nav className="py-6 space-y-3">
              {[
                "about",
                "experience",
                "education",
                "projects",
                "skills",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full text-left px-4 py-3 rounded-lg capitalize transition-all duration-300 font-medium group overflow-hidden relative ${
                    isDarkMode
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-105">
                    {t.nav[section as keyof typeof t.nav]}
                  </span>
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isDarkMode
                        ? "bg-slate-700/20 opacity-0 group-hover:opacity-100"
                        : "bg-slate-200/50 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${
                      isDarkMode ? "bg-blue-400" : "bg-blue-500"
                    } group-hover:w-full`}
                  />
                </button>
              ))}

              <div
                className={`flex items-center justify-center space-x-4 pt-6 border-t ${
                  isDarkMode ? "border-slate-700/50" : "border-gray-200/50"
                }`}
              >
                {/* Language Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === "es" ? "en" : "es")}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group overflow-hidden ${
                    isDarkMode
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <Languages className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-1px]">
                    {language === "es" ? "EN" : "ES"}
                  </span>
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isDarkMode
                        ? "bg-slate-700/20 opacity-0 group-hover:opacity-100"
                        : "bg-slate-200/50 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Button>

                {/* Dark Mode Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden ${
                    isDarkMode
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {isDarkMode ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isDarkMode
                        ? "bg-slate-700/20 opacity-0 group-hover:opacity-100"
                        : "bg-slate-200/50 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
