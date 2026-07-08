import { Outfit } from "next/font/google";
import "./globals.css";
import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/layout/Preloader";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Afzal | AI/ML Engineer",
  description: "Portfolio of Mohamed Afzal, a premium AI Engineer specializing in Computer Vision, Generative AI, and Scalable Backend Systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${outfit.variable} font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased transition-colors duration-300`}>
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          <Preloader />
          <Background />
          <Navbar />
          <SmoothScroll>
            <main className="relative z-10">
              {children}
            </main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}