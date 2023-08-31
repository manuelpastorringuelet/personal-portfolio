import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manuel Ringuelet - Portfolio",
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images: "@/public/images/backgrounds.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
