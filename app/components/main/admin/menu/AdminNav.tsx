import Link from "next/link";
import React from "react";

export const AdminNav = () => {
  return (
    <nav className="admin-category">
      <ul>
        <li className="category-title">
          <strong>관리자 메뉴</strong>
        </li>
        <li>
          <Link href={"/admin/management"}>대리점/판매점 관리</Link>
        </li>
        <li>
          <Link href={"/"}>정책 관리</Link>
        </li>
      </ul>
    </nav>
  );
};
