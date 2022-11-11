import {
  AddButton,
  FormContainer,
  FormSection,
  IconAndInputDiv,
  IconStyled,
  InputDiv,
  InputMainDiv,
} from "./Form.styled";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";

const Form = () => {
  return (
    <FormContainer>
      <form>
        <InputMainDiv>
          <IconAndInputDiv>
            <IconStyled>
              {" "}
              <BsFillPersonFill />
            </IconStyled>
            <InputDiv type="text" placeholder="Name"  onChange="" />
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
              
              onChange=""
            />
          </IconAndInputDiv>
        </InputMainDiv>

        <InputMainDiv>
        <IconAndInputDiv>
        <FormSection class="form-select" aria-label="Default select example">
            <option selected>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </FormSection>
        </IconAndInputDiv>
         
        </InputMainDiv>
      </form>

      <AddButton>Add</AddButton>
    </FormContainer>
  );
};

export default Form;
