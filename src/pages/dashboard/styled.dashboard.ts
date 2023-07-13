import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 10px;
`;

export const DashboardCard = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;

  div {
    background: rgb(0,94,122); 
    color: #fff;
    text-align: center;
    justify-content: center;
    gap: 10;
    padding: 5px; 
    margin: 0px 7px 0px 7px;
    border-radius: 5px;
    width: 50%;
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
  }
`;

export const DashboardInfoContainer = styled.div`
  margin-top: 2rem; 
  margin-bottom: 3rem; 
  height: 60vh;
`;

export const DashboardInfoWrapper = styled.div`
  width: 100%;
  height: 70vh;
`;