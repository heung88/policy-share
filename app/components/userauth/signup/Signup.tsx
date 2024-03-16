"use client";

import React, { useState } from "react";
import button from "@/app/styles/button.module.css";
import input from "@/app/styles/input.module.css";
import { inputValue } from "@/app/utils/inputValue";
import { useRouter } from "next/navigation";
import "@/app/styles/userauth/userauth.css";

export const Signup = () => {
  const userId = "";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
      <form id="signUp" className="userauth-form" action="">
        <h2>직원 추가</h2>
        <section className="input-wrap">
          <div>
            <label htmlFor="userId">매장아이디</label>
            <input id="userId" className={input.basic + " " + input.borderBottom} value={userId} readOnly />
          </div>
          <div>
            <label htmlFor="userId">직원이름</label>
            <input
              id="userName"
              className={input.basic + " " + input.borderBottom}
              placeholder=" "
              type="text"
              value={userName}
              onChange={(event) => inputValue(event, setUserName)}
            />
          </div>
          <div>
            <label htmlFor="userId">비밀번호</label>
            <input
              id="userPassword"
              className={input.basic + " " + input.borderBottom}
              placeholder=" "
              type="password"
              name=""
              value={password}
              onChange={(event) => inputValue(event, setPassword)}
            />
          </div>
        </section>
        <section className="button-wrap">
          <button className={button.basic + " " + button.submit} onClick={handleSubmit}>
            신청
          </button>
          <button className={button.basic + " " + button.normal} onClick={handleLocation}>
            취소
          </button>
        </section>
      </form>
    </>
  );
};
