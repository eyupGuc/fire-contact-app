import { AddButton, FormContainer, FormSection, InputDiv } from "./Form.styled";

const Form = () => {
  return (
    <FormContainer>
     <InputDiv type="text" />
    <form >

      <input type="text" placeholder="" value="" onChange="" />
    </form>

      <FormSection class="form-select" aria-label="Default select example">
        <option selected>Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Other</option>
      </FormSection>
      <AddButton>Add</AddButton>
    </FormContainer>
  );
};

export default Form;
