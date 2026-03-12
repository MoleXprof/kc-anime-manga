import type { Metadata } from "next";
import "./globals.css";
import { fascinate, playfair, pottaone, sofia } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: "Kyle Chin | Anime & Manga",
  description: "Kyle Chin's Anime and Manga Archive",
  icons: {
    icon: "/images/flcl.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <main className={`${fascinate.variable} ${playfair.variable} ${pottaone.variable} ${sofia.variable}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
