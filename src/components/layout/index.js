import React from "react";
import Header from "../header";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      {children}
    </S.Layout>
  );
};

export default Layout;