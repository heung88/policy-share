"use client";

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import "./globals.css";
import "./reset.css";
import "@/app/styles/layout.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
