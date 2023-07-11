import { FunctionComponent, ReactNode } from "react";

import { LayoutContainer } from "./styled.layout";
import NavBar from "./navBar";
import AsideNav from "./asideNav";

interface IProp {
  children: ReactNode;
}

const Layout: FunctionComponent<IProp> = ({ children }) => {
  return (
    <LayoutContainer>
      <div className="asideWrapper">
        <AsideNav />
      </div>
      <div className="main">
        <NavBar />
        <div style={{ marginTop: "3.5rem" }}>{children}</div>
      </div>
    </LayoutContainer>
  );
};

export default Layout;
