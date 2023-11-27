import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80% !important;
  padding: 15px;
  border-bottom: 2px solid #f1f1f1;
  background: #f1f1f1;

  position: fixed;
  top: 0;
  z-index: 1;

  h2 {
    font-size: 15px;
    color: #0009;
  }

  ul li {
    list-style: none;
    cursor: pointer;

    span:last-child {
      margin-left: 5px;
      align-items: center;
    }
  }
`;
