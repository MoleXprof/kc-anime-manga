import type { Metadata } from "next";
import "./globals.css";
import { fascinate, sofia } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: "Kyle Chin | Anime & Manga",
  description: "Kyle Chin's Anime and Manga Collection Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={`${fascinate.variable} ${sofia.variable} bg-background`}>
          {children}
        </main>
      </body>
    </html>
  );
}
