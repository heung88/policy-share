import React, { useState } from "react";

export const SearchList = ({ managementType, keyword }: { managementType: string; keyword: string }) => {
  // 목록 요청 api 위치

  return (
    <section className="search-management-list">
      <section className="tag-wrap">
        <ul>
          <li className="tag checked">
            <span>SKT</span>
            <strong>skt-s</strong>
          </li>
          <li className="tag">
            <span>SKT</span>
            <strong>skt-s</strong>
          </li>
          <li className="tag">
            <span>SKT</span>
            <strong>skt-s</strong>
          </li>
        </ul>
      </section>
    </section>
  );
};
