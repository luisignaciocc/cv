import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Luis Ignacio Cabezas Collantes",
    template: "%s | Nacho Collantes",
  },
  description: "Software Developer | React, Next.js, Node.js, TypeScript",
  openGraph: {
    title: "Luis Ignacio Cabezas",
    description: "Software Developer | React, Next.js, Node.js, TypeScript",
    url: "https://cv.luisignacio.cc",
    siteName: "Luis Ignacio Cabezas",
    images: [
      {
        url: "https://luisignacio.cc/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Luis Ignacio Cabezas",
    card: "summary_large_image",
  },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
