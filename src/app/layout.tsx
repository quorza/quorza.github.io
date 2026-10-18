import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import GoToTop from "@/components/common/GoToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quorza | Financial Exam Preparation",
  description:
    "Prepare for NISM and NCFM certifications with module-wise question banks, mock tests, and performance insights.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="m-0 flex min-h-screen flex-col overflow-x-clip bg-white font-sans text-[#243654] antialiased">
        <Navbar />

        <main className="w-full flex-1 bg-white">{children}</main>

        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
