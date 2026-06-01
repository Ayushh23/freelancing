import { Inter, Space_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "AUTOHUB — Automation & Digital Solutions",
  description:
    "Freelance automation, AI bots, and high-performance websites for businesses that want to move faster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
