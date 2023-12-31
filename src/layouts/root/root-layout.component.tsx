// Vendors
import React from "react";
import { Outlet } from "react-router-dom";
// Components
import GlobalStyles from "components/ui-general/ui-styles/ui-styles.component.styled";

const RootLayout = (): React.ReactElement => {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
};

export default RootLayout;