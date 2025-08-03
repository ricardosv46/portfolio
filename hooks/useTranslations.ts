import { useStore } from "@/store/useStore";
import { translations } from "@/lib/translations";
import { useEffect, useState } from "react";

export const useTranslations = () => {
  const { language } = useStore();
  const [isHydrated, setIsHydrated] = useState(false);

  // Manejar hidratación
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Usar el idioma solo después de la hidratación
  const currentLanguage = isHydrated ? language : "es";
  const t = translations[currentLanguage];

  return {
    t,
    language: currentLanguage,
    isHydrated,
  };
};
