import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

import greeting from "../../helpers/greetings";

import { NavWrapper } from "./styled.navbar";

import {
  CaretDownOutlined,
  CaretUpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Space } from "antd";

const NavBar: FunctionComponent = () => {
  const [toggleProfile, setToggleProfile] = useState<boolean>(true);

  const items: MenuProps['items'] = [
    {
      label: <Link to="/profile">Profile</Link>,
      key: 0
    },
    {
      label: <Link to="/profile/settings">Setting</Link>,
      key: 1
    },
    {
      type: 'divider'
    },
    {
      label: <Link to="/">Logout</Link>,
      key: 3
    },

  ];

  const toggleProfileClick = () => {
    setToggleProfile(!toggleProfile);
  };

  return (
    <NavWrapper>
      <h2>{greeting()}</h2>

      <ul>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li onClick={toggleProfileClick}>
            <Space>
              <span>justice chimobi</span>

              <span>
                <Avatar shape="circle" icon={<UserOutlined />} size="small" />
                {toggleProfile ? <CaretDownOutlined /> : <CaretUpOutlined />}
              </span>
            </Space>
          </li>
        </Dropdown>
      </ul>
    </NavWrapper>
  );
};

export default NavBar;
