import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ricardo Solis - Full Stack Developer",
  description:
    "Portfolio personal de Ricardo Solis, desarrollador full stack con 4 años de experiencia en tecnologías modernas",
  generator: "Next.js",
  authors: [{ name: "Ricardo Solis" }],
  keywords: [
    "full stack developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "frontend developer",
    "desarrollador",
    "full stack",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "portfolio",
    "full stack",
    "desarrollador",
    "react",
    "next.js",
    "node.js",
    "nestjs",
    "express",
    "mongodb",
    "mysql",
    "ricardo solis",
    "ricardo solis developer",
    "ricardo solis full stack",
    "ricardo solis full stack developer",
    "ricardo solis full stack developer react",
    "ricardo solis full stack developer next.js",
    "ricardo solis full stack developer typescript",
    "desarrollador full stack",
    "desarrollador full stack react",
    "desarrollador full stack next.js",
    "desarrollador full stack typescript",
    "desarrollador full stack javascript",
    "desarrollador full stack node.js",
    "desarrollador full stack express",
    "desarrollador full stack mongodb",
    "desarrollador full stack mysql",
    "desarrollador full stack postgresql",
    "desarrollador full stack sql",
    "desarrollador full stack docker",
    "desarrollador full stack aws",
    "desarrollador full stack azure",
    "desarrollador full stack gcp",
    "desarrollador full stack oracle",
    "desarrollador full stack sql server",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
