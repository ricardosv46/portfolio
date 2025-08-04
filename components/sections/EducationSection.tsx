import { useStore } from "@/store/useStore";
import { useTranslations } from "@/hooks/useTranslations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar, Award } from "lucide-react";
import { Badge } from "../ui/badge";
import { education } from "@/constants/education";
import { TextSkeleton, CardSkeleton } from "../ui/loading-skeleton";

export const EducationSection = () => {
  const { language } = useStore();
  const { t, isHydrated } = useTranslations();

  // Mostrar skeleton mientras se hidrata
  if (!isHydrated) {
    return (
      <section
        id="education"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TextSkeleton lines={1} className="w-1/3 mx-auto mb-4" />
            <TextSkeleton lines={2} className="w-2/3 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>

          <div className="mt-16">
            <TextSkeleton lines={1} className="w-1/4 mx-auto mb-8" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            {t.education.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`transition-all hover:shadow-xl hover:scale-105 card-shadow bg-white border-gray-200 dark:bg-slate-700 dark:border-slate-600 ${
                edu.current ? "ring-2 ring-blue-400/50" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 text-blue-900 dark:text-white">
                      {language === "es" ? edu.degree : edu.degreeEn}
                    </CardTitle>
                    <CardDescription className="font-medium text-blue-700 dark:text-blue-400">
                      {language === "es" ? edu.institution : edu.institutionEn}
                    </CardDescription>
                  </div>
                  {edu.current && (
                    <Badge className="bg-green-600 text-white text-xs">
                      {language === "es" ? edu.status : edu.statusEn}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="outline"
                    className="text-xs border-blue-200 text-blue-800 dark:border-blue-600 dark:text-blue-300"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    {language === "es" ? edu.period : edu.periodEn}
                  </Badge>
                  <Badge
                    variant={edu.current ? "default" : "secondary"}
                    className={`text-xs ${
                      edu.current
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 dark:bg-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {language === "es" ? edu.status : edu.statusEn}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-300">
                  {language === "es" ? edu.description : edu.descriptionEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificaciones adicionales */}
        {/* <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center text-blue-900 dark:text-white">
            {t.education.certifications}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "React Avanzado",
                nameEn: "Advanced React",
                year: "2023",
                issuer: "Meta",
              },
              {
                name: "Node.js Professional",
                nameEn: "Node.js Professional",
                year: "2022",
                issuer: "Node.js Foundation",
              },
              {
                name: "TypeScript Expert",
                nameEn: "TypeScript Expert",
                year: "2022",
                issuer: "Microsoft",
              },
              {
                name: "AWS Fundamentals",
                nameEn: "AWS Fundamentals",
                year: "2023",
                issuer: "Amazon",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="text-center transition-all hover:scale-105 card-shadow bg-white border-gray-200 dark:bg-slate-700 dark:border-slate-600"
              >
                <CardContent className="pt-6">
                  <Award className="w-8 h-8 text-blue-700 dark:text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm mb-1 text-blue-900 dark:text-white">
                    {language === "es" ? cert.name : cert.nameEn}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    {cert.issuer} • {cert.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
