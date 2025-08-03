import { useEffect } from "react";
import { useStore } from "@/store/useStore";

export const useTheme = () => {
  const { isDarkMode, setDarkMode, toggleDarkMode } = useStore();

  useEffect(() => {
    // Detectar preferencia del usuario al cargar
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, [setDarkMode]);

  useEffect(() => {
    // Aplicar clase al body para evitar flash
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggleDarkMode,
    setDarkMode,
  };
};
