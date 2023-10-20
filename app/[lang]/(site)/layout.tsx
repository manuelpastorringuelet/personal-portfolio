import "../../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manuel Ringuelet - Portfolio",
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images: "@/public/images/open-graph-image.jpeg",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-zinc-900 dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
