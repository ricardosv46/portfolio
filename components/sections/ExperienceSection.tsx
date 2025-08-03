import { useStore } from "@/store/useStore";
import { useTranslations } from "@/hooks/useTranslations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Building, Calendar, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { experience } from "@/constants/experience";
import { TextSkeleton, CardSkeleton } from "../ui/loading-skeleton";

export const ExperienceSection = () => {
  const { language } = useStore();
  const { t, isHydrated } = useTranslations();

  // Mostrar skeleton mientras se hidrata
  if (!isHydrated) {
    return (
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TextSkeleton lines={1} className="w-1/3 mx-auto mb-4" />
            <TextSkeleton lines={2} className="w-2/3 mx-auto" />
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-slate-700" />

            <div className="space-y-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 rounded-full border-4 bg-white border-blue-300 dark:bg-slate-700 dark:border-slate-600" />
                  <div className="ml-16 flex-1">
                    <CardSkeleton />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            {t.experience.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-slate-700" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    exp.current
                      ? "bg-blue-700 border-blue-700"
                      : "bg-white border-blue-300 dark:bg-slate-700 dark:border-slate-600"
                  }`}
                />

                <div className="ml-16 flex-1">
                  <Card className="transition-all hover:shadow-xl hover:scale-[1.02] card-shadow bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="flex items-center text-xl mb-2 text-blue-900 dark:text-white">
                            <Building className="w-5 h-5 mr-2 text-blue-700 dark:text-blue-400" />
                            {language === "es" ? exp.title : exp.titleEn}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-blue-700 dark:text-blue-400">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          {exp.current && (
                            <Badge className="bg-green-600 text-white">
                              {t.experience.current}
                            </Badge>
                          )}
                          <Badge
                            variant="outline"
                            className="border-blue-200 text-blue-800 dark:border-blue-600 dark:text-blue-300"
                          >
                            <Calendar className="w-4 h-4 mr-1" />
                            {language === "es" ? exp.period : exp.periodEn}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-gray-700 dark:text-slate-300">
                        {language === "es"
                          ? exp.description
                          : exp.descriptionEn}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center text-blue-900 dark:text-white">
                          <TrendingUp className="w-4 h-4 mr-2 text-blue-700 dark:text-blue-400" />
                          {t.experience.achievements}
                        </h4>
                        <ul className="space-y-2">
                          {(language === "es"
                            ? exp.achievements
                            : exp.achievementsEn
                          ).map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-blue-700 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-slate-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
