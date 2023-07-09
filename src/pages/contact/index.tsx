import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import DataTable from 'react-data-table-component';

import { ContactWrapper, ContactBtnContainer } from "./styled.contact";
import { CONTACT_COLUMNS, CONTACT_DATA } from '../../constants/contact';

const Contact: FunctionComponent = () => {
  const navigate = useNavigate();

  const getCreateContact = () => {
    navigate('/contacts/create');
  }

  return (
    <ContactWrapper>
      <ContactBtnContainer>
        <Button onClick={getCreateContact}>Create Contact</Button>
      </ContactBtnContainer>
      <DataTable title="Contacts" columns={CONTACT_COLUMNS} data={CONTACT_DATA} pagination />
    </ContactWrapper>
  ); 
  }
  
  export default Contact;