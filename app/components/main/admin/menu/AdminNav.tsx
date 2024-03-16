import { SubCategoryStore } from "@/app/components/main/admin/menu/SubCategoryStore";
import React from "react";
import { SubCategoryAgency } from "./SubCategoryAgency";

export const AdminNav = ({ setManagementType }: { setManagementType: (type: string) => void }) => {
  return (
    <nav className="admin-category">
      <ul>
        <li className="category-title">
          <strong>관리자 메뉴</strong>
        </li>
        <li>
          {/* <Link href={"/admin/management"}>대리점/판매점 관리</Link> */}
          <input type="radio" name="management" id="adminManagementAgency" defaultChecked />
          <label htmlFor="adminManagementAgency">대리점 관리</label>
          <SubCategoryAgency setManagementType={setManagementType} />
        </li>
        <li>
          {/* <Link href={"/admin/management"}>대리점/판매점 관리</Link> */}
          <input type="radio" name="management" id="adminManagementStore" />
          <label htmlFor="adminManagementStore">판매점 관리</label>
          <SubCategoryStore setManagementType={setManagementType} />
        </li>
        <li>
          <input type="radio" name="management" id="adminPolicy" />
          <label htmlFor="adminPolicy">정책 관리</label>
        </li>
      </ul>
    </nav>
  );
};
