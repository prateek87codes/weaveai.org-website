import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeaveAI - Stop Switching Tabs. Start Connecting Them.",
  description: "The first browser extension that doesn't just read one page—it reads your entire workflow. Select multiple open tabs, PDFs, and YouTube videos, and chat with them all simultaneously.",
  keywords: "AI, Chrome Extension, ChatGPT, PDF reader, YouTube transcripts, web scraping, AI assistant",
  authors: [{ name: "WeaveAI" }],
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "WeaveAI - Stop Switching Tabs. Start Connecting Them.",
    description: "The first browser extension that doesn't just read one page—it reads your entire workflow. Select multiple open tabs, PDFs, and YouTube videos, and chat with them all simultaneously.",
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
    title: "WeaveAI - Stop Switching Tabs. Start Connecting Them.",
    description: "The first browser extension that doesn't just read one page—it reads your entire workflow. Select multiple open tabs, PDFs, and YouTube videos, and chat with them all simultaneously.",
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

