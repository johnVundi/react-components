import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option);
  }
  const options = [
    {label:'red', value: 'red'},
    {label:'blue', value: 'blue'},
    {label:'green', value: 'green'},
  ]
return <Dropdown 
options={options}
 value={selection}
 onChange={handleSelect}
/>
}

export default App;
