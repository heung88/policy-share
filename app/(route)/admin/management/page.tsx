"use client";

import React, { useEffect, useState } from "react";
import { Category } from "@/app/components/management/ManagementSubCategory";
import { StoreList } from "@/app/components/management/StoreList";
import { AgencyList } from "@/app/components/management/AgencyList";
import { RegiAgency } from "@/app/components/management/RegiAgency";
import { RegiStore } from "@/app/components/management/RegiStore";
import "@/app/styles/admin/management.css";

export default function page() {
  const [managementType, setManagementType] = useState("대리점 목록");

  const handleComponents = (managementType: string) => {
    if (managementType === "대리점 목록") return <AgencyList />;
    else if (managementType === "대리점 등록") return <RegiAgency />;
    else if (managementType === "판매점 목록") return <StoreList />;
    else if (managementType === "판매점 등록") return <RegiStore />;
  };

  return (
    <>
      <section className="management-wrap">
        <h3 className="a11y-hidden">대리점/판매점 관리</h3>
        <Category setManagementType={setManagementType} />
        {handleComponents(managementType)}
      </section>
    </>
  );
}
