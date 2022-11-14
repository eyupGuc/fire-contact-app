import {
  AddButton,
  FormContainer,
  FormSection,
  IconAndInputDiv,
  IconStyled,
  InputDiv,
  InputMainDiv
} from "./Form.styled";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { useState } from "react";
import { addUser } from "../../utils/Firebase";
import { useContext } from "react";
import { HandleBool } from "../../context/context";

const Form = ({ readData, item, handleEdit,setUserId }) => {
  const [username, setUsername] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState();

  // const [newUsername, setNewUsername] = useState();
  // const { handleBoolean, setHandleBoolean } = useContext(HandleBool);

  const handleSubmit = (e) => {
    const userId = new Date().getTime();
    console.log(userId);
    // setUserId(userId)
    // setUserId(run)

    e.preventDefault();
    if(username && phoneNumber && gender){
      addUser(username, phoneNumber, userId, gender);
    }
    // console.log(userId);

    // console.log(username);
    // console.log(phoneNumber);
    // console.log(gender);
    setPhoneNumber("");
    setUsername("");
    readData();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputMainDiv>
          <IconAndInputDiv>
            <IconStyled>
              <BsFillPersonFill />
            </IconStyled>

            <InputDiv
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
              value={username || ""}
            />
          </IconAndInputDiv>
        </InputMainDiv>
        <InputMainDiv>
          <IconAndInputDiv>
            <IconStyled>
              <AiTwotonePhone />
            </IconStyled>
            <InputDiv
              type="text"
              placeholder="Phone Number"
              value={phoneNumber || ""}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </IconAndInputDiv>
        </InputMainDiv>

        <InputMainDiv>
          <IconAndInputDiv>
            <FormSection
              aria-label="Default select example"
              onClick={(e) => setGender(e.target.value)}
              required
            >
              {/* <option selected>Gender</option> */}
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </FormSection>
          </IconAndInputDiv>
        </InputMainDiv>
        <AddButton type="submit">Add</AddButton>
      </form>
    </FormContainer>
  );
};

export default Form;
