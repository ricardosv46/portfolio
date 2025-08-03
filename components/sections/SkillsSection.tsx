import { skillsData } from "@/constants/skillsData";
import { useTranslations } from "@/hooks/useTranslations";
import { useStore } from "@/store/useStore";
import { Code2, Database, Wrench } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { TextSkeleton, CardSkeleton } from "../ui/loading-skeleton";

export const SkillsSection = () => {
  const { t, isHydrated } = useTranslations();

  const skillCategories = [
    {
      icon: Code2,
      title: t.skills.frontend,
      skills: skillsData.frontend,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      darkColor: "dark:text-blue-400",
      darkBgColor: "dark:bg-blue-900/30",
      darkBorderColor: "dark:border-blue-600",
      darkTextColor: "dark:text-blue-200",
    },
    {
      icon: Database,
      title: t.skills.backend,
      skills: skillsData.backend,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      darkColor: "dark:text-green-400",
      darkBgColor: "dark:bg-green-900/30",
      darkBorderColor: "dark:border-green-600",
      darkTextColor: "dark:text-green-200",
    },
    {
      icon: Wrench,
      title: t.skills.tools,
      skills: skillsData.tools,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      darkColor: "dark:text-purple-400",
      darkBgColor: "dark:bg-purple-900/30",
      darkBorderColor: "dark:border-purple-600",
      darkTextColor: "dark:text-purple-200",
    },
  ];

  // Mostrar skeleton mientras se hidrata
  if (!isHydrated) {
    return (
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TextSkeleton lines={1} className="w-1/3 mx-auto mb-4" />
            <TextSkeleton lines={2} className="w-2/3 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            {t.skills.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-slate-300">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="transition-all hover:scale-105 bg-white border-gray-200 shadow-lg dark:bg-slate-800 dark:border-slate-700"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${category.bgColor} dark:bg-slate-700`}
                >
                  <category.icon
                    className={`h-8 w-8 ${category.color} ${category.darkColor}`}
                  />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900 dark:text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`px-3 py-1 text-sm transition-all hover:scale-105 ${category.borderColor} text-blue-800 ${category.bgColor} dark:${category.darkBorderColor} ${category.darkTextColor} dark:${category.darkBgColor}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
