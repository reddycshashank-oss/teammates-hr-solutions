import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teammateshrsolutions.com"),

  title: {
    default:
      "TeamMates HR Solutions | Recruitment & Staffing Agency in India",
    template: "%s | TeamMates HR Solutions",
  },

  description:
    "TeamMates HR Solutions provides recruitment, staffing, talent acquisition and workforce solutions for businesses and career opportunities for candidates across India.",

  keywords: [
    "recruitment agency in Bangalore",
    "recruitment agency in India",
    "staffing solutions in India",
    "recruitment services",
    "HR recruitment services",
    "talent acquisition",
    "permanent recruitment",
    "contract staffing",
    "executive search",
    "volume hiring",
    "jobs in India",
    "internship opportunities",
  ],

  authors: [
    {
      name: "TeamMates HR Solutions",
      url: "https://teammateshrsolutions.com",
    },
  ],

  creator: "TeamMates HR Solutions",
  publisher: "TeamMates HR Solutions",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://teammateshrsolutions.com",
    siteName: "TeamMates HR Solutions",
    title:
      "TeamMates HR Solutions | Recruitment & Staffing Agency in India",
    description:
      "Recruitment, staffing, talent acquisition and workforce solutions for businesses across India.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeamMates HR Solutions - Recruitment and Staffing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "TeamMates HR Solutions | Recruitment & Staffing Agency in India",
    description:
      "Recruitment, staffing, talent acquisition and workforce solutions for businesses across India.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}