"use client";

import React, { useState } from "react";
import button from "@/app/styles/button.module.css";
import input from "@/app/styles/input.module.css";
import { inputValue } from "@/app/utils/inputValue";
import styled from "styled-components";

export const Signup = () => {
  const userId = "";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <FormStyle action="">
        <SectionStyle className="input-wrap">
          <div>
            <label htmlFor="userId">매장아이디</label>
            <input id="userId" className={input.basic + " " + input.borderBottom} value={userId} readOnly />
          </div>
          <div>
            <label htmlFor="userId">직원이름</label>
            <input id="userName" className={input.basic + " " + input.borderBottom} placeholder=" " type="text" value={userName} onChange={(event) => inputValue(event, setUserName)} />
          </div>
          <div>
            <label htmlFor="userId">비밀번호</label>
            <input id="userPassword" className={input.basic + " " + input.borderBottom} placeholder=" " type="password" name="" value={password} onChange={(event) => inputValue(event, setPassword)} />
          </div>
        </SectionStyle>
        <SectionStyle className="button-wrap">
          <button className={button.basic + " " + button.submit}>신청</button>
          <button className={button.basic + " " + button.cancel}>취소</button>
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
