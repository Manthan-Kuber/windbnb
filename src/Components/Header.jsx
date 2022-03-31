import React from "react";
import styled from "styled-components";
import SearchBlock from "./SearchBlock";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <img src="/images/logo.png" alt="logo" />
        </LogoContainer>
        <SearchBlock />
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
  }
`;

const LogoContainer = styled.div``;
