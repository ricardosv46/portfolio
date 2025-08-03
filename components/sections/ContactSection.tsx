import { useTranslations } from "@/hooks/useTranslations";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Github, Linkedin } from "lucide-react";
import { socialNetwork } from "@/constants/socialNetwork";
import { TextSkeleton, CardSkeleton } from "../ui/loading-skeleton";

export const ContactSection = () => {
  const { t, isHydrated } = useTranslations();

  // Mostrar skeleton mientras se hidrata
  if (!isHydrated) {
    return (
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <TextSkeleton lines={1} className="w-1/3 mx-auto mb-4" />
            <TextSkeleton lines={2} className="w-2/3 mx-auto mb-8" />
          </div>

          {/* Contact Info Skeleton */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4 justify-center">
            {[1, 2].map((i) => (
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
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            {t.contact.title}
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: Mail,
              title: t.contact.email,
              value: "ricardosv46@gmail.com",
              color: "text-emerald-400",
            },
            {
              icon: Phone,
              title: t.contact.phone,
              value: "(+51) 937815062",
              color: "text-cyan-400",
            },
            {
              icon: MapPin,
              title: t.contact.location,
              value: "Lima, Perú",
              color: "text-purple-400",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-shadow bg-white border-gray-200 dark:bg-slate-700 dark:border-slate-600"
            >
              <CardContent className="pt-6 text-center">
                <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                <h3 className="font-semibold mb-2 text-blue-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300">
                  {item.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-800 hover:bg-blue-900 text-white transform hover:scale-105 transition-all shadow-lg"
            onClick={() => window.open(socialNetwork.github, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            Ver GitHub
          </Button>
          <Button
            // variant="outline"
            size="lg"
            className="bg-blue-800 hover:bg-blue-900 text-white transform hover:scale-105 transition-all shadow-lg"
            onClick={() => window.open(socialNetwork.linkedin, "_blank")}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </div>
        {/* Contact Form */}
      </div>
    </section>
  );
};
