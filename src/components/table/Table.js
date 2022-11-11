import { AddTextContact, Brand, TableContainer } from "./Table.styled"
import Form from "../form/Form"

const Table=()=>{
    return(

<TableContainer>
    <Brand>
    <i>{"<eGuc/>"}  </i>  
    <span>DESIGN</span>
    </Brand>
    <AddTextContact>ADD CONTACT</AddTextContact>
    <Form/>
</TableContainer>


    )
}

export default Table;