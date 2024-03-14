import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterStyle>
      <span>
        copyright @ <strong>YB</strong>{" "}
      </span>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--footer-height);
  border-top: 1px solid var(--color-gray600);
  background-color: var(--color-black);
  color: #fff;

  & > span {
    color: #fff;
    font-size: var(--fsize-main);
  }

  & strong {
    color: var(--color-main);
  }
`;
