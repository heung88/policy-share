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
    <form className="find-pw" action="">
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
          요청하기
        </button>
        <button className={button.basic + " " + button.cancel} onClick={handleLocation}>
          취소
        </button>
      </section>
    </form>
  );
};
