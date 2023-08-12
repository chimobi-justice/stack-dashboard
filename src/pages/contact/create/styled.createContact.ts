import styled from "styled-components";

export const CreateContactContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CreateContactForm = styled.form`
  width: 50%;
  margin: 4rem auto;
  padding: 30px;
  background: #ecececd6;
  border-radius: 10px;

  h1 {
    font-size: 30px;
    font-style: italic;
    padding: 10px 0px 15px 0px;
  }
`;

export const CreateContactFormWrapper = styled.div`
  margin-bottom: 20px;

  div {
    width: 100%;
    margin: 10px 0px 10px 0px;
  }
`;

export const CreateContactError = styled.p`
  color: lightcoral;
  font-size: 14px;
`;
