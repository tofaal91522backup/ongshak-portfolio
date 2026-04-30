import AppProviders from "@/providers/app-providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/SplashCursor";
import ClickMusicController from "@/components/ClickMusicController";
import HoldMusicController from "@/components/HoldMusicController";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ongshak",
  description:
    "Ongshak is a digital architecture and design studio that creates innovative and immersive experiences for brands and audiences. We specialize in creating digital spaces that are both functional and beautiful, using cutting-edge technology and design principles to bring our clients' visions to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
