import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정책 공유",
  description: "정책 공유용 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
