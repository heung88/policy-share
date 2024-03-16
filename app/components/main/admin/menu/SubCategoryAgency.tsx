import React from "react";
import button from "@/app/styles/button.module.css";

export const SubCategoryAgency = ({ setManagementType }: { setManagementType: (type: string) => void }) => {
  const handleCategory = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event.currentTarget.textContent === "대리점 목록") {
      setManagementType("대리점 목록");
    } else if (event.currentTarget.textContent === "대리점 등록") {
      setManagementType("대리점 등록");
    }
  };

  return (
    <>
      <div className="sub-category">
        <ul>
          <li>
            <button className={button.category} onClick={handleCategory}>
              대리점 목록
            </button>
          </li>
          <li>
            <button className={button.category} onClick={handleCategory}>
              대리점 등록
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
