import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <nav className="main-category">
      <ul>
        <li>
          <Link href={"/"}>메뉴1</Link>
        </li>
        <li>
          <Link href={"/"}>메뉴2</Link>
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
