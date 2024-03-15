"use client";

import React, { useState } from "react";
import button from "@/app/styles/button.module.css";
import input from "@/app/styles/input.module.css";
import { inputValue } from "@/app/utils/inputValue";
import { useRouter } from "next/navigation";
import "@/app/styles/userauth/userauth.css";

export const ChangePw = () => {
  const userId = "";
  const [userName, setUserName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");
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
        <h2>비밀번호 변경</h2>
        <section className="input-wrap">
          <div>
            <label htmlFor="userId">매장아이디</label>
            <input id="userId" className={input.basic + " " + input.borderBottom} value={userId} readOnly />
          </div>
          <div>
            <label htmlFor="userId">직원이름</label>
            <input id="userName" className={input.basic + " " + input.borderBottom} placeholder=" " type="text" value={userName} onChange={(event) => inputValue(event, setUserName)} />
          </div>
          <div>
            <label htmlFor="currentPw">비밀번호</label>
            <input id="currentPw" className={input.basic + " " + input.borderBottom} placeholder=" " type="text" value={currentPassword} onChange={(event) => inputValue(event, setCurrentPassword)} />
          </div>
          <div>
            <label htmlFor="newPw">새 비밀번호</label>
            <input id="newPw" className={input.basic + " " + input.borderBottom} placeholder=" " type="text" value={newPassword} onChange={(event) => inputValue(event, setNewPassword)} />
          </div>
          <div>
            <label htmlFor="changeNewPw">비밀번호 확인</label>
            <input id="changeNewPw" className={input.basic + " " + input.borderBottom} placeholder=" " type="text" value={checkNewPassword} onChange={(event) => inputValue(event, setCheckNewPassword)} />
          </div>
        </section>
        <section className="button-wrap">
          <button className={button.basic + " " + button.submit} onClick={handleSubmit}>
            변경
          </button>
          <button className={button.basic + " " + button.cancel} onClick={handleLocation}>
            취소
          </button>
        </section>
      </form>
    </>
  );
};
