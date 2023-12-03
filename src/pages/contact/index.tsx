import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAllContacts } from '../../services/contact';

import { Button } from "antd";

import DataTable from "react-data-table-component";

import { ContactWrapper, ContactBtnContainer } from "./styled.contact";
import { CONTACT_COLUMNS } from "../../constants/contact";

const Contact: FunctionComponent = () => {
  const [contacts, setContacts] = useState<any>([]);

  const fetchContacts = async () => {
    const res = await getAllContacts();

    setContacts(res);
  }

  useEffect(() => {
    fetchContacts();
  }, [])

  
  const navigate = useNavigate();

  const getCreateContact = () => {
    navigate("/contacts/create");
  };

  return (
    <ContactWrapper>
      <ContactBtnContainer>
        <Button onClick={getCreateContact}>Create Contact</Button>
      </ContactBtnContainer>
      <DataTable
        title="Contacts"
        columns={CONTACT_COLUMNS}
        data={contacts}
        pagination
      />
    </ContactWrapper>
  );
};

export default Contact;
