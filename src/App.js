import Accordion from "./components/Accordion";


function App() {
  const items = [
    {
      id:"isgv",
      label:"Kings men",
      content:" owsome stuff"
    },
    {
      id:"ihhdj",
      label:"Kings men",
      content:" owsome stuff"
    },
    {
      id:"idgv",
      label:"Kings men",
      content:" owsome stuff"     
    },
  ]


  return<Accordion items={items}/>
}

export default App;
