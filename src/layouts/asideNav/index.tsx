import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { AsideNavWrapper } from "./styled.asideNav";

import {
  CompassOutlined,
  ContactsOutlined,
  UnorderedListOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";

const AsideNav: FunctionComponent = () => {
  return (
    <AsideNavWrapper>
      <div className="asideHolder">
        <h2 className="asideHeader">Stack</h2>

        <ul className="asideLinks">
          <li>
            <NavLink to="/dashboard">
              <UnorderedListOutlined /> <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts">
              <ContactsOutlined /> <span>Contacts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports">
              <SnippetsOutlined /> <span>Reports</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </AsideNavWrapper>
  );
};

export default AsideNav;
