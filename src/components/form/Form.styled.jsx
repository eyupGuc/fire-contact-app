import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: white;
  margin-top: 1rem;
  padding: 1rem;


`;

export const FormSection = styled.select`
  /* border: 2px solid red; */
  height: 3rem;
  width: 20rem;
  margin: 1rem 1rem;
  font-size: 1.5rem;
  border: none;
  :focus{outline:none}

`;

export const InputMainDiv = styled.div`
  border: 1px solid black;
  margin-top: 0.5rem;
`;

export const InputDiv = styled.input`
  height: 2rem;
  width: 20rem;
  border: none;
  font-size: 1.5rem;
  :focus {
    outline: none;
  }

`;

export const AddTextContact = styled.h4`
  margin-top: 3rem;
  border-radius: 4px;
  background-color: white;
  font-weight: 900;
  font-size: 2rem;
 

`;

export const AddButton = styled.button`
  background-color: #083131;
  color: white;
  margin-top: 0.5rem;
  height: 3rem;
  width: 18rem;
  font-size: 1.5rem;
  font-weight: 900;
  border: none;
  border-radius: 8px;
  cursor: pointer;

`;

export const IconStyled = styled.i`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const IconAndInputDiv = styled.div`
  display: flex;

  display: flex;
  align-items: center;
  height: 3rem;
  justify-content: center;
  font-size: 2rem;
  border-radius: 8px;
`;
