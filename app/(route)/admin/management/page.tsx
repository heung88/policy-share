"use client";

import React, { useState } from "react";
import { AdminNav } from "@/app/components/main/admin/menu/AdminNav";
import { SearchInput } from "@/app/components/management/SearchInput";
import { SearchList } from "@/app/components/management/SearchList";
import "@/app/styles/admin/management.css";

export default function page() {
  const defaultType = "대리점 목록";
  const [keyword, setKeyword] = useState<string>("");
  const [managementType, setManagementType] = useState<string>(defaultType);

  const listComponent = (
    <>
      <SearchInput setKeyword={setKeyword} />
      <SearchList managementType={managementType} keyword={keyword} />;
    </>
  );
  const manageComponent = "";

  const handleComponents = (managementType: string) => {
    if (managementType.includes("목록")) return listComponent;
    else if (managementType.includes("관리")) return manageComponent;
  };

  return (
    <>
      <section className="management-wrap">
        <h3>{managementType}</h3>
        <AdminNav setManagementType={setManagementType} />
        {handleComponents(managementType)}
      </section>
    </>
  );
}
