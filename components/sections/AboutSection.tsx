import { useStore } from "@/store/useStore";
import { useTranslations } from "@/hooks/useTranslations";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Target } from "lucide-react";
import { Badge } from "../ui/badge";
import { Palette, Server, Smartphone, Database, Users } from "lucide-react";
import { TextSkeleton, CardSkeleton } from "../ui/loading-skeleton";

export const AboutSection = () => {
  const { t, isHydrated } = useTranslations();

  // Mostrar skeleton mientras se hidrata
  if (!isHydrated) {
    return (
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TextSkeleton lines={1} className="w-1/3 mx-auto mb-4" />
            <TextSkeleton lines={2} className="w-2/3 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <TextSkeleton lines={4} />
              <TextSkeleton lines={4} />
              <div className="grid grid-cols-2 gap-6 pt-4">
                <CardSkeleton />
                <CardSkeleton />
              </div>
            </div>
            <div className="space-y-6">
              <CardSkeleton />
              <CardSkeleton />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            {t.about.title}
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-slate-300">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-slate-300">
              {t.about.description1}
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-slate-300">
              {t.about.description2}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { value: "25%", label: t.about.errorReduction },
                { value: "40%", label: t.about.efficiencyImprovement },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg border transition-all hover:scale-105 card-shadow bg-white border-gray-200 dark:bg-slate-700 dark:border-slate-600"
                >
                  <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="transition-all hover:shadow-xl card-shadow bg-white border-gray-200 dark:bg-slate-700 dark:border-slate-600">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900 dark:text-white">
                  <Target className="w-5 h-5 mr-2 text-blue-700 dark:text-blue-400" />
                  {t.about.specialties}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { icon: Palette, text: t.about.frontendDev },
                    { icon: Server, text: t.about.backendDev },
                    { icon: Smartphone, text: t.about.mobileDev },
                    { icon: Database, text: t.about.databases },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group">
                      <item.icon className="w-5 h-5 mr-3 transition-colors text-blue-600 group-hover:text-blue-700 dark:text-slate-400 dark:group-hover:text-blue-400" />
                      <span className="transition-colors text-gray-700 group-hover:text-gray-900 dark:text-slate-300 dark:group-hover:text-white">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-xl card-shadow bg-white border-gray-200 dark:bg-slate-700 dark:border-slate-600">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900 dark:text-white">
                  <Users className="w-5 h-5 mr-2 text-blue-700 dark:text-blue-400" />
                  {t.about.softSkills}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    t.about.leadership,
                    t.about.teamwork,
                    t.about.selfTaught,
                    t.about.communicative,
                    t.about.problemSolver,
                    t.about.autonomous,
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="transition-all hover:scale-105 bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-900/40"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
