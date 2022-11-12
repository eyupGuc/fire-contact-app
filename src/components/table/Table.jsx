import {
  AddTextContact,
  Brand,
  ContactListMainDiv,
  ContactMainDiv,
  ContactsText,
  MainContainer,
  TableBorder,
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
      <ContactMainDiv>
        <ContactsText>Contacts</ContactsText>
        <ContactListMainDiv>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">Admin</th>
                <td>05377777745</td>
                <td>male</td>
                <td>del</td>
                <td>ed</td>
              </tr>
            </tbody>
          </table>
        </ContactListMainDiv>
      </ContactMainDiv>
    </MainContainer>
  );
};

export default Table;
