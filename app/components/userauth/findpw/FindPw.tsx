"use client";

import React, { useState } from "react";
import button from "@/app/styles/button.module.css";
import input from "@/app/styles/input.module.css";
import { inputValue } from "@/app/utils/inputValue";
import { useRouter } from "next/navigation";
import "@/app/styles/userauth/userauth.css";

export const FindPw = () => {
  const userId = "";
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLocation = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event.currentTarget.textContent === "취소") router.back();
  };

  return (
    <>
      <form className="userauth-form" action="">
        <h2>비밀번호 찾기</h2>
        <span className="warnning-message">정보 확인 후 비밀번호를 초기화해드립니다.</span>
        <section className="input-wrap">
          <div>
            <label htmlFor="userId">매장아이디</label>
            <input id="userId" className={input.basic + " " + input.borderBottom} value={userId} readOnly />
          </div>
          <div>
            <label htmlFor="userId">직원이름</label>
            <input id="userName" className={input.basic + " " + input.borderBottom} placeholder=" " type="text" value={userName} onChange={(event) => inputValue(event, setUserName)} />
          </div>
        </section>
        <section className="button-wrap">
          <button className={button.basic + " " + button.submit} onClick={handleSubmit}>
            요청
          </button>
          <button className={button.basic + " " + button.cancel} onClick={handleLocation}>
            취소
          </button>
        </section>
      </form>
    </>
  );
};
