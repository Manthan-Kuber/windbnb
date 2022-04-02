import React from "react";
import SearchBlock from "./SearchBlock";
import { HeaderContainer,LogoContainer } from "./Header.styles";

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


