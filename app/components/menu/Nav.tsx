import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <nav className="main-category">
      <ul>
        <li>
          <Link href={"/admin/management"}>임시-관리자</Link>
        </li>
        <li>
          <Link href={"/userauth/signin"}>임시-로그인</Link>
        </li>
        <li>
          <Link href={"/"}>메뉴3</Link>
        </li>
        <li>
          <Link href={"/"}>메뉴4</Link>
        </li>
      </ul>
    </nav>
  );
};
