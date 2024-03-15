import React from "react";
import Link from "next/link";
import { Nav } from "../components/menu/Nav";
import { AdminNav } from "../components/main/admin/menu/AdminNav";
import "@/app/styles/layout.css";

export const Header = () => {
  return (
    <header className="main-header">
      <h2>
        <Link href={"/"}>
          <strong>YB</strong>정책확인방
        </Link>
      </h2>
      <Nav />
      <AdminNav />
    </header>
  );
};
