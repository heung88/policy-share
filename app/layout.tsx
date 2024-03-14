"use client";

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import styled from "styled-components";
import "./globals.css";
import "./reset.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body>
        <Header />
        <MainStyle>{children}</MainStyle>
        <Footer />
      </body>
    </html>
  );
}

const MainStyle = styled.main`
  width: 100%;
  max-width: var(--max-width);
  margin: var(--header-height) auto 0;
`;
