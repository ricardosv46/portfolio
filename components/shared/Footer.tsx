import { useTranslations } from "@/hooks/useTranslations";
import { Code2 } from "lucide-react";
import React from "react";

export const Footer = () => {
  const { t } = useTranslations();

  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 border-t bg-gray-50 text-blue-900 border-gray-200 dark:bg-slate-900 dark:text-white dark:border-slate-700`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Code2 className="h-6 w-6 mr-2 text-blue-700" />
          <span className="text-lg font-semibold">Ricardo Solis</span>
        </div>
        <p className={`mb-4 text-gray-600 dark:text-slate-400`}>
          {t.footer.role} • Lima, Perú
        </p>
        <div className={`h-px my-4 bg-gray-200 dark:bg-slate-700`} />
        <p className={`text-sm text-gray-500 `}>
          © 2024 Ricardo Solis. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};
