import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 841px) {
    display: inline-block;
    margin: 2rem 3rem;
  }
`;

export const TableContainer = styled.div`
  width: 400px;

  text-align: center;
`;

export const Brand = styled.h4`
  padding: 1rem 0;
  /* color: #00adb5; */
  color: cyan;
  /* color: #393e46; */
  font-weight: 800;
  font-size: 2rem;
  /* border: 2px solid green; */
  background-color: white;
  border-radius: 4px;

  span {
    color: black;
  }
  /* @media (max-width: 480px) {
    font-size: 1rem;
  } */
`;

export const AddTextContact = styled.h4`
  margin-top: 3rem;
  border-radius: 4px;
  background-color: white;
  font-weight: 900;
  font-size: 2rem;
`;

export const ContactsText = styled.h4`
  border-radius: 4px;
  background-color: white;
  font-weight: 900;
  font-size: 2rem;
`;

export const ContactMainDiv = styled.div`
  width: 400px;
  text-align: center;
  margin-left: 2rem;

  @media (max-width: 841px) {
    margin-top: 3rem;
    margin-left: 0;
  }
`;

export const ContactListMainDiv = styled.div`
  margin-top: 2rem;
  background-color: white;
  border-radius: 4px;
`;

export const TableListContainer = styled.table`
  width: 400px;
`;

export const TheadContainer=styled.thead`
background-color: #7c7272;
font-size: 1.2rem;
`;
export const TbodyContainer=styled.tbody`
font-size: 1.2rem;


`;
export const TrDiv=styled.tr`
border-bottom:1px solid black;
background-color:#ddd0d0;
`;
