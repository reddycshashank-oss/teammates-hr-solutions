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
  title: {
    default: "TeamMates HR Solutions | Recruitment & Staffing",
    template: "%s | TeamMates HR Solutions",
  },
  description:
    "TeamMates HR Solutions connects job seekers with career opportunities and helps businesses find the right talent through recruitment and staffing solutions.",
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