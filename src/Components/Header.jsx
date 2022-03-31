import React from "react";
import styled from "styled-components";
import SearchBlock from "./SearchBlock";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="/images/logo.png" alt="logo" />
      </LogoContainer>
      <SearchBlock />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  @media (min-width: 40em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoContainer = styled.div``;
