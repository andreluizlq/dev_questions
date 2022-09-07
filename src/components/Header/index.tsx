import React from "react";

import { HeaderBlock } from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <HeaderBlock>
        <img src="/logo.svg" alt="logo" />
      </HeaderBlock>
    </>
  );
};

export default Header;
