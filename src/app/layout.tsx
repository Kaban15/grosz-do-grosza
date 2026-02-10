import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";  // <--- TO JEST NAJWAŻNIEJSZA LINIA. BEZ NIEJ STYLE NIE DZIAŁAJĄ.

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santander Promocja - Poradnik",
  description: "Odbierz 900 zł premii w prostych krokach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}