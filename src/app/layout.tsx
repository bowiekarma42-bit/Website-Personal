import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bow Films - Professional Videographer & Photographer",
  description: "Bow Films - Videographer dan photographer profesional yang mengabadikan momen berharga Anda dengan sentuhan sinematik yang elegan. Layanan wedding, prewedding, engagement, dokumentasi, dan wisuda.",
  keywords: ["Bow Films", "videographer", "photographer", "wedding", "prewedding", "engagement", "dokumentasi", "wisuda", "video", "foto", "sinematik"],
  authors: [{ name: "Bow Films" }],
  openGraph: {
    title: "Bow Films - Professional Videographer & Photographer",
    description: "Mengabadikan momen berharga Anda dengan sentuhan sinematik yang elegan",
    url: "https://bowfilms.com",
    siteName: "Bow Films",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bow Films - Professional Videographer & Photographer",
    description: "Mengabadikan momen berharga Anda dengan sentuhan sinematik yang elegan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
