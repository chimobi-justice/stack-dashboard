import { FunctionComponent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import greeting from '../../helpers/greetings';

import { NavWrapper } from './styled.navbar';

import {
  CaretDownOutlined,
  CaretUpOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps, Space } from 'antd';

import { auth } from "../../firebase"
import { signOut} from "firebase/auth";


const NavBar: FunctionComponent = () => {
  const [toggleProfile, setToggleProfile] = useState<boolean>(true);

  const navigate = useNavigate();

  const _handleSignOut = () => {
    signOut(auth);

    navigate('/');
  }

  const items: MenuProps['items'] = [
    {
      label: <Link to="/profile">Profile</Link>,
      key: 0,
    },
    {
      label: <Link to="/profile/settings">Setting</Link>,
      key: 1,
    },
    {
      type: 'divider',
    },
    {
      label: <p onClick={_handleSignOut}>Logout</p>,
      key: 3,
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
              {/* <span>justice chimobi {auth.currentUser?.displayName}</span> */}

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
