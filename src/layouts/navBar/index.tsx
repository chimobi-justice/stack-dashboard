import { FunctionComponent, useState } from "react";

import { NavWrapper } from "./styled.navbar";

import {
  CaretDownOutlined,
  CaretUpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

const NavBar: FunctionComponent<{ label: string }> = ({ label }) => {
  const [toggleProfile, setToggleProfile] = useState<boolean>(true);

  const toggleProfileClick = () => {
    setToggleProfile(!toggleProfile);
  };

  return (
    <NavWrapper>
      <h2>{label}</h2>

      <ul>
        <li onClick={toggleProfileClick}>
          <span>justice chimobi</span>

          <span>
            <Avatar shape="circle" icon={<UserOutlined />} size="small" />
            {toggleProfile ? <CaretDownOutlined /> : <CaretUpOutlined />}
          </span>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default NavBar;