import {
  AddTextContact,
  Brand,
  MainContainer,
  TableContainer,
} from "./Table.styled";
import Form from "../form/Form";

const Table = () => {
  return (
    <MainContainer>
      <TableContainer>
        <Brand>
          <i>{"<eGuc/>"} </i>
          <span>DESIGN</span>
        </Brand>
        <AddTextContact>ADD CONTACT</AddTextContact>
        <Form />
      </TableContainer>
    </MainContainer>
  );
};

export default Table;
