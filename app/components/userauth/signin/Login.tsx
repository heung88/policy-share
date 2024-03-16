"use client";

import React, { useState } from "react";
import button from "@/app/styles/button.module.css";
import input from "@/app/styles/input.module.css";
import { inputValue } from "@/app/utils/inputValue";
import { useRouter } from "next/navigation";
import "@/app/styles/userauth/userauth.css";

export const Login = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    //
  };

  const handleLocation = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event.currentTarget.textContent === "등록신청") router.push("/userauth/signup");
    else if (event.currentTarget.textContent === "비밀번호찾기") router.push("/userauth/findpw");
  };

  return (
    <>
      <form id="signIn" className="userauth-form" action="">
        <h2>로그인</h2>
        <section className="input-wrap">
          <div>
            <label htmlFor="userId">매장아이디</label>
            <input
              id="userId"
              className={input.basic + " " + input.borderBottom}
              placeholder=" "
              type="text"
              value={userId}
              onChange={(event) => inputValue(event, setUserId)}
            />
          </div>
          <div>
            <label htmlFor="userName">직원이름</label>
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
            <label htmlFor="userPassword">비밀번호</label>
            <input
              id="userPassword"
              className={input.basic + " " + input.borderBottom}
              placeholder=" "
              type="password"
              value={password}
              onChange={(event) => inputValue(event, setPassword)}
            />
          </div>
        </section>
        <section className="button-wrap">
          <button className={button.basic + " " + button.submit} onClick={handleSubmit}>
            로그인
          </button>
          <button className={button.basic + " " + button.normal} onClick={handleLocation}>
            등록신청
          </button>
          <button className={button.basic + " " + button.normal} onClick={handleLocation}>
            비밀번호찾기
          </button>
        </section>
      </form>
    </>
  );
};
