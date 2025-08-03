import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  // Theme state
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (isDark: boolean) => void;

  // Language state
  language: "es" | "en";
  setLanguage: (lang: "es" | "en") => void;

  // UI state
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // Form state
  formData: {
    name: string;
    email: string;
    message: string;
  };
  setFormData: (
    data: Partial<{ name: string; email: string; message: string }>
  ) => void;
  resetFormData: () => void;

  // Project filter state
  projectFilter: string;
  setProjectFilter: (filter: string) => void;

  // Selected project state
  selectedProject: any | null;
  setSelectedProject: (project: any | null) => void;

  // Current image index for project gallery
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
}

export const useStore = create<GlobalState>()(
  persist(
    (set, get) => ({
      // Theme state
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setDarkMode: (isDark) => set({ isDarkMode: isDark }),

      // Language state
      language: "es",
      setLanguage: (lang) => set({ language: lang }),

      // UI state
      isLoading: false,
      setIsLoading: (loading) => set({ isLoading: loading }),

      // Form state
      formData: {
        name: "",
        email: "",
        message: "",
      },
      setFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      resetFormData: () =>
        set({
          formData: { name: "", email: "", message: "" },
        }),

      // Project filter state
      projectFilter: "All",
      setProjectFilter: (filter) => set({ projectFilter: filter }),

      // Selected project state
      selectedProject: null,
      setSelectedProject: (project) => set({ selectedProject: project }),

      // Current image index
      currentImageIndex: 0,
      setCurrentImageIndex: (index) => set({ currentImageIndex: index }),
    }),
    {
      name: "portfolio-store", // nombre para localStorage
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        language: state.language,
        projectFilter: state.projectFilter,
      }), // solo persistir estos estados
    }
  )
);
