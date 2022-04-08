import React from "react";
import SearchBlock from "./SearchBlock";
import { HeaderContainer, LogoContainer } from "./Header.styles";
import WindbnbLogo from "./WindbnbLogo";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <WindbnbLogo />
      </LogoContainer>
      <SearchBlock />
    </HeaderContainer>
  );
};

export default Header;
