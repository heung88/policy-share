import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <FooterStyle>Footer</FooterStyle>;
};

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--footer-height);
  border-top: 1px solid var(--color-gray500);
  background-color: var(--color-gray600);
  color: #fff;
`;
