"use client";

import React, { useState } from "react";
import button from "@/app/styles/button.module.css";
import input from "@/app/styles/input.module.css";
import styled from "styled-components";
import { inputValue } from "@/app/utils/inputValue";

export const Login = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <FormStyle id="auth_form" action="">
        <SectionStyle className="input-wrap">
          <div>
            <label htmlFor="userId">매장아이디</label>
            <input id="userId" className={input.basic + " " + input.borderBottom} placeholder=" " type="text" value={userId} onChange={(event) => inputValue(event, setUserId)} />
          </div>
          <div>
            <label htmlFor="userId">직원이름</label>
            <input id="userName" className={input.basic + " " + input.borderBottom} placeholder=" " type="text" value={userName} onChange={(event) => inputValue(event, setUserName)} />
          </div>
          <div>
            <label htmlFor="userPassword">비밀번호</label>
            <input id="userPassword" className={input.basic + " " + input.borderBottom} placeholder=" " type="password" name="" value={password} onChange={(event) => inputValue(event, setPassword)} />
          </div>
        </SectionStyle>
        <SectionStyle className="button-wrap">
          <button className={button.basic + " " + button.submit}>로그인</button>
        </SectionStyle>
        <SectionStyle className="button-wrap">
          <button className={button.basic + " " + button.normal}>등록신청</button>
          <button className={button.basic + " " + button.normal}>비밀번호찾기</button>
        </SectionStyle>
      </FormStyle>
    </>
  );
};

const FormStyle = styled.form`
  width: 100%;
  height: calc(100vh - var(--header-height) - var(--footer-height));
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionStyle = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin-bottom: 10px;

  &.input-wrap {
    position: relative;
    max-width: 400px;
    margin-bottom: 20px;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 10px;
    }
  }

  &.button-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 400px;
    padding: 0 20px;

    & button {
      width: 100%;
    }
  }

  & label {
    margin-right: 10px;
    font-size: var(--fsize-h3);
  }
`;
