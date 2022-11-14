import { useState } from "react";

import "./App.css";

import Table from "./components/table/Table";
import { EditContext } from "./context/context";

function App() {
  const [updateContact, setUpdateContact] = useState();

  console.log(updateContact);
 
    return (
    
      <EditContext.Provider value={{ updateContact, setUpdateContact }}>
        <Table />
      </EditContext.Provider>
    
  );
}

export default App;
