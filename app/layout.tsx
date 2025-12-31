import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeaveAI - Chat with Any Webpage Using AI",
  description: "Transform how you browse the web. Chat with any webpage, PDF, or YouTube video using GPT-4, Claude, and Gemini. Extract insights from 500-page documents instantly.",
  keywords: "AI, Chrome Extension, ChatGPT, PDF reader, YouTube transcripts, web scraping, AI assistant",
  authors: [{ name: "WeaveAI" }],
  openGraph: {
    title: "WeaveAI - Chat with Any Webpage Using AI",
    description: "Transform how you browse the web. Chat with any webpage, PDF, or YouTube video using AI.",
    url: "https://weaveai.org",
    siteName: "WeaveAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WeaveAI - Chat with Any Webpage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeaveAI - Chat with Any Webpage Using AI",
    description: "Transform how you browse the web. Chat with any webpage, PDF, or YouTube video using AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

