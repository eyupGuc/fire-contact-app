import {
  AddTextContact,
  Brand,
  ContactListMainDiv,
  ContactMainDiv,
  ContactsText,
  MainContainer,
  TableContainer,
  TableListContainer,
  TbodyContainer,
  TheadContainer,
  TrDiv,
} from "./Table.styled";
import Form from "../form/Form";
import { useContext, useEffect, useState } from "react";

import { dbRef, deleteUser, editUser } from "../../utils/Firebase";
import { child, get } from "firebase/database";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { EditContext } from "../../context/context";

const Table = () => {
  const [data, setData] = useState();
  const { updateContact, setUpdateContact } = useContext(EditContext);
  const[control,setControl]=useState(false)
  const [username, setUsername] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState();
  const[userId,setUserId]=useState()


  const  readData = () => {
    get(child(dbRef, `users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());

          setData(Object.entries(snapshot.val()));
          // setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    readData();
  }, []);



  const handleDelete = (e) => {
    deleteUser(e);
    readData();
  setControl(true)
  };
 
  const handleEdit = (item) => {
  // console.log(item)
  setUpdateContact(item)
  setUsername("Eyyup")
  setPhoneNumber("83948934893")
  setGender("male")
  setUserId("9834394839483")
  editUser(username, phoneNumber, userId, gender)
 
   
    
  };

  if (data) {
    data.map((item) => {
      // console.log(item);
      // console.log(item[1].gender);
    });
  }
  return (
    <MainContainer>
      <TableContainer>
        <Brand>
          <i>{"<eGuc/>"} </i>
          <span>DESIGN</span>
        </Brand>
        <AddTextContact>ADD CONTACT</AddTextContact>
        <Form readData={readData} item={updateContact} handleEdit={handleEdit} setUserId={setUserId}/>
      </TableContainer>
      <ContactMainDiv>
        <ContactsText>Contacts</ContactsText>
        <ContactListMainDiv>
          <TableListContainer>
            <TheadContainer>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </TheadContainer>

            {data?.map((item) => {
              return (
                <TbodyContainer key={item[0]}>
                  <TrDiv>
                   
                    <td>{item[1].username}</td>
                    <td>{item[1].phoneNumber}</td>
                    <td>{item[1].gender}</td>
                    <td onClick={() => handleDelete(item[0])}>
                      <AiFillDelete />
                    </td>
                    <td onClick={() =>  handleEdit(item)}>
                      <AiFillEdit />
                    </td>
                  </TrDiv>
                </TbodyContainer>
              );
            })}
          </TableListContainer>
        </ContactListMainDiv>
      </ContactMainDiv>
    </MainContainer>
  );
};

export default Table;
