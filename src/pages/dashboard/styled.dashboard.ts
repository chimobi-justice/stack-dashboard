import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 10px;
`;

export const DashboardCard = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;

  div {
    background: #020215; 
    color: #fff;
    text-align: center;
    justify-content: center;
    gap: 10;
    padding: 5px; 
    border-radius: 5px;
    width: 40%;
    height: 120px;

    h5 {
      font-size: 14px;
      font-weight: 100;
      padding: 5px;
    }

    p {
      font-size: 24px;
      font-weight: bold;
      padding: 3px;
    }

    .restore_deleted__contact {
      & a {
        color: #fff;
        text-decoration:  underline;
        font-size: 15px;
        font-weight: 100;

        &:hover {
          color: #f1f1f1;
        }
      }
    }
  }

  & div:nth-child(even) {
    margin: 0px 15px 0px 15px;
  }
`;

export const DashboardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem; 
  margin-bottom: 2rem; 
  height: 70vh;
`;

export const DashboardInfoWrapper = styled.div`
  width: 50%;

  .archive_box__wrapper {
    border: 1px solid #f1f1f1;
    padding: 15px;
    height: 430px;
    overflow: hidden;
    overflow-y: scroll;

    h1 {
      font-size: 20px;
      font-weight: 100;
      padding: 5px;
    }
  }

  .archive_box__wrapper::-webkit-scrollbar {
    width: 20px;
  }

  .archive_box__wrapper::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  .archive_box__wrapper::-webkit-scrollbar-thumb {
    background-color: #020215;
    border-radius: 10px;
  }
`;