import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TableContainer = styled.div`
  width: 400px;
  height: 400px;
  margin-left: 2rem;
  /* border: 2px solid red; */
  text-align: center;
  @media (max-width: 480px) {
    width: 300px;
  }
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
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const AddTextContact = styled.h4`
  margin-top: 3rem;
  border-radius: 4px;
  background-color: white;
  font-weight: 900;
  font-size: 2rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ContactsText = styled.h4`
  border-radius: 4px;
  background-color: white;
  font-weight: 900;
  font-size: 2rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ContactMainDiv = styled.div`
  width: 600px;
  text-align: center;
  margin: 0 2rem;
`;

export const ContactListMainDiv = styled.div`
  margin-top: 2rem;
 background-color: white;
 border-radius: 4px;
 

  
`;
export const TableBorder=styled.div`
border-bottom: 1px solid black;

`;


