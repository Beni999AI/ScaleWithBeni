import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScaleWithBeni — AI Voice Agents for Dubai Real Estate",
  description:
    "AI calls every lead in 60 seconds, qualifies them in Arabic, English, Russian, Hindi, or Mandarin, and books a meeting in your calendar. Built for RERA-licensed agents.",
  openGraph: {
    title: "ScaleWithBeni — AI Voice Agents for Dubai Real Estate",
    description:
      "AI calls every lead in 60 seconds, qualifies them in their language, and books a meeting. No leads lost. No manual calling.",
    type: "website",
    locale: "en_US",
    siteName: "ScaleWithBeni",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleWithBeni — AI Voice Agents for Dubai Real Estate",
    description:
      "AI calls every lead in 60 seconds, qualifies them in their language, and books a meeting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
