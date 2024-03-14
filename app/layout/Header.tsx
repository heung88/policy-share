import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderStyle>
      <h2>
        <strong>YB</strong>정책확인방
      </h2>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: var(--header-height);
  border-bottom: 1px solid var(--color-gray100);

  text-align: center;
  line-height: var(--header-height);
`;
