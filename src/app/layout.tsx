import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edyou-next.netlify.app"),
  title: {
    default: "edYOU — Empower Yourself",
    template: "%s · edYOU",
  },
  description:
    "The safe, trusted, and accurate AI teaching platform for medical education. Unlimited test prep. Personalized AI tutors. Improved outcomes for residents and fellows.",
  applicationName: "edYOU",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "edYOU — Empower Yourself",
    description:
      "The safe, trusted, and accurate AI teaching platform for medical education.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "edYOU",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "edYOU — Empower Yourself",
    description:
      "The safe, trusted, and accurate AI teaching platform for medical education.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
