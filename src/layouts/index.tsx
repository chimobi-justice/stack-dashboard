import { FunctionComponent, ReactNode } from "react";

import { LayoutContainer } from "./styled.layout";
import NavBar from "./navBar";
import AsideNav from "./asideNav";

interface IProp {
  label: string;
  children: ReactNode;
}

const Layout: FunctionComponent<IProp> = ({ label, children }) => {
  return (
    <LayoutContainer>
      <div className="asideWrapper">
        <AsideNav />
      </div>
      <div className="main">
        <NavBar label={label} />
        <div style={{ marginTop: "3.5rem" }}>{children}</div>
      </div>
    </LayoutContainer>
  );
};

export default Layout;
