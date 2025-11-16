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
  title: "Portfolio - Creative Professional",
  description: "Elegant portfolio showcasing creative work, professional services, and artistic excellence.",
  keywords: ["portfolio", "creative", "professional", "design", "photography", "videography"],
  authors: [{ name: "Creative Professional" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Creative Portfolio",
    description: "Elegant portfolio showcasing creative work and professional services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Portfolio",
    description: "Elegant portfolio showcasing creative work and professional services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
