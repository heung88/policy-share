import { ManagementSubCategory } from "@/app/components/management/ManagementSubCategory";
import React from "react";

export const AdminNav = () => {
  return (
    <nav className="admin-category">
      <ul>
        <li className="category-title">
          <strong>관리자 메뉴</strong>
        </li>
        <li>
          {/* <Link href={"/admin/management"}>대리점/판매점 관리</Link> */}
          <input type="radio" name="management" id="adminManagement" defaultChecked />
          <label htmlFor="adminManagement">대리점/판매점 관리</label>
          <ManagementSubCategory />
        </li>
        <li>
          <input type="radio" name="management" id="adminPolicy" />
          <label htmlFor="adminPolicy">정책 관리</label>
        </li>
      </ul>
    </nav>
  );
};
