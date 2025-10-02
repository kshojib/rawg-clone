import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RAWG - Video Game Discovery",
  description:
    "Discover your next favorite game. Browse through 850,000+ games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-950 text-white min-h-screen`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
