import { useStore } from "@/store/useStore";
import { useTranslations } from "@/hooks/useTranslations";
import { Button } from "../ui/button";
import { Filter, ImageIcon, Sparkles, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { projects } from "@/constants/projects";
import { TextSkeleton, CardSkeleton } from "../ui/loading-skeleton";

export const ProjectSection = () => {
  const {
    language,
    projectFilter,
    setProjectFilter,
    selectedProject,
    setSelectedProject,
    currentImageIndex,
    setCurrentImageIndex,
  } = useStore();
  const { t, isHydrated } = useTranslations();

  const filteredProjects =
    projectFilter === "All"
      ? projects
      : projects.filter((project) => project.category === projectFilter);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (currentImageIndex + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  // Mostrar skeleton mientras se hidrata
  if (!isHydrated) {
    return (
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TextSkeleton lines={1} className="w-1/3 mx-auto mb-4" />
            <TextSkeleton lines={2} className="w-2/3 mx-auto mb-8" />

            {/* Project Filters Skeleton */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-24 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse"
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            {t.projects.title}
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-slate-300">
            {t.projects.subtitle}
          </p>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Frontend", "Full Stack", "Mobile"].map((filter) => (
              <Button
                key={filter}
                variant={projectFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setProjectFilter(filter)}
                className={`transition-all ${
                  projectFilter === filter
                    ? "bg-blue-800 hover:bg-blue-900 text-white"
                    : "border-blue-800 text-blue-800 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter === "All"
                  ? t.projects.all
                  : filter === "Mobile"
                  ? t.projects.mobile
                  : filter === "Frontend"
                  ? t.projects.frontend
                  : t.projects.fullStack}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`transition-all relative duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden card-shadow bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700 ${
                project.featured ? "ring-2 ring-blue-400/50" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {project.featured && (
                <div className="absolute -top-5 -right-3 bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center z-10">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {t.projects.featured}
                </div>
              )}

              {/* Project Image Preview */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={language === "es" ? project.title : project.titleEn}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 right-2 flex items-center text-white text-xs">
                  <ImageIcon className="w-3 h-3 mr-1" />
                  {project.images.length}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors text-blue-900 dark:text-white">
                      {language === "es" ? project.title : project.titleEn}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium mb-2 text-blue-700 dark:text-blue-400">
                      {project.company}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs border-blue-200 text-blue-800 dark:border-blue-600 dark:text-blue-300"
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-slate-300">
                  {language === "es"
                    ? project.description
                    : project.descriptionEn}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs transition-all hover:scale-105 bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-1 transition-all hover:scale-105 border-blue-800 text-blue-800 hover:bg-blue-50 bg-transparent dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                      >
                        {t.projects.viewDetails}
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                      <DialogHeader>
                        <DialogTitle className="text-xl text-blue-900 dark:text-white">
                          {language === "es" ? project.title : project.titleEn}
                        </DialogTitle>
                        <div className="text-base">
                          <Badge
                            variant="outline"
                            className="mr-2 border-blue-300 text-blue-800 dark:border-slate-600 dark:text-slate-300"
                          >
                            {project.company}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700"
                          >
                            {project.year}
                          </Badge>
                        </div>
                      </DialogHeader>

                      <div className="space-y-6">
                        {/* Image Carousel */}
                        <div className="relative">
                          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                            <img
                              src={
                                project.images[currentImageIndex] ||
                                "/placeholder.svg"
                              }
                              alt={`${
                                language === "es"
                                  ? project.title
                                  : project.titleEn
                              } - Image ${currentImageIndex + 1}`}
                              className="w-full h-full object-cover"
                            />

                            {project.images.length > 1 && (
                              <>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70"
                                  onClick={prevImage}
                                >
                                  <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70"
                                  onClick={nextImage}
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </Button>
                              </>
                            )}
                          </div>

                          {project.images.length > 1 && (
                            <div className="flex justify-center mt-4 space-x-2">
                              {project.images.map((_, index) => (
                                <button
                                  key={index}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentImageIndex
                                      ? "bg-blue-700"
                                      : "bg-gray-300 dark:bg-slate-600"
                                  }`}
                                  onClick={() => setCurrentImageIndex(index)}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-blue-900 dark:text-white">
                            {t.projects.projectDescription}
                          </h4>
                          <p className="leading-relaxed text-gray-700 dark:text-slate-300">
                            {language === "es"
                              ? project.longDescription
                              : project.longDescriptionEn}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-blue-900 dark:text-white">
                            {t.projects.technologies}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="transition-all hover:scale-105 bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center text-blue-900 dark:text-white">
                            <Award className="w-4 h-4 mr-2 text-blue-700 dark:text-blue-400" />
                            {t.projects.achievements}
                          </h4>
                          <ul className="space-y-2">
                            {(language === "es"
                              ? project.achievements
                              : project.achievementsEn
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
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                {project.liveUrl && (
                  <Button
                    variant="default"
                    className="w-full mt-2 transition-all hover:scale-105 bg-blue-700 hover:bg-blue-800 text-white"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Proyecto
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
