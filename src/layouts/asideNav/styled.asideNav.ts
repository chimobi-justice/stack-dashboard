import styled from "styled-components";

export const AsideNavWrapper = styled.nav`
  background: rgba(0,55,72,1);
  position: fixed;
  top: 0;
  height: 100vh;
  width: 20%;

  .asideHolder {
    color: #fff;
  }

  .asideHeader {
    padding: 10px;
    border-bottom: 1px solid #f1f1f1;
    text-align: center;
    font-size: 30px;
  }

  .asideLinks {
    margin-top: 5rem;
    padding: 8px;

    li {
      margin: 7px 0px 7px;
      align-items: center;

      a {
        display: block;
        align-items: center;
        justify-centent: center;
        color: #fff;
        text-decoration: none;
        padding: 15px;
        font-size: 18px;
        cursor: pointer;

        &:hover {
          background: #f1f1f1;
          color: #000;
        }
      }
    }
  }
`;
