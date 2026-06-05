import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dattaraj Jadhav | Backend Developer & Generative AI Engineer",
  description: "Backend Developer and Generative AI Engineer skilled in Node.js, TypeScript, LangChain, LangGraph, RAG Systems, PostgreSQL, MongoDB, and scalable software engineering.",
  keywords: [
    "Dattaraj Jadhav",
    "Backend Developer",
    "Generative AI Engineer",
    "RAG Systems Builder",
    "Software Engineer",
    "VIIT Pune",
    "LangChain",
    "LangGraph",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Python",
    "System Design"
  ],
  authors: [{ name: "Dattaraj Jadhav" }],
  creator: "Dattaraj Jadhav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dattaraj-portfolio.vercel.app",
    title: "Dattaraj Jadhav | Backend Developer & Generative AI Engineer",
    description: "B.Tech CSE (AI) student building scalable backend systems & AI-powered applications.",
    siteName: "Dattaraj Jadhav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dattaraj Jadhav | Backend & Generative AI Engineer",
    description: "B.Tech CSE (AI) student building scalable backend systems & AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark font-sans scroll-smooth", inter.variable, firaCode.variable)}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-violet-500/30 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
