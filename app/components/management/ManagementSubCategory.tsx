import React from "react";
import button from "@/app/styles/button.module.css";

export const ManagementSubCategory = (props: any) => {
  const handleCategory = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event.currentTarget.textContent === "대리점 목록") {
      props.setManagementType("대리점 목록");
    } else if (event.currentTarget.textContent === "대리점 등록") {
      props.setManagementType("대리점 등록");
    } else if (event.currentTarget.textContent === "판매점 목록") {
      props.setManagementType("판매점 목록");
    } else if (event.currentTarget.textContent === "판매점 등록") {
      props.setManagementType("판매점 등록");
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
          <li>
            <button className={button.category} onClick={handleCategory}>
              판매점 목록
            </button>
          </li>
          <li>
            <button className={button.category} onClick={handleCategory}>
              판매점 등록
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
