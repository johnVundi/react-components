import Button from "../components/Button";
import { GoBell } from "react-icons/go";


function ButtonPage() {
  const handleClick =()=>{
    console.log('click')
  }
  return (
    <div  className="App">

      <div >
        <Button className="mb-5" success primary rounded onClick={handleClick}>
           <GoBell/>
           hello there
        </Button>
      </div>
      <div>
        <Button danger outline> really</Button>
      </div>
      <div>
        <Button warning outline> Did it</Button>
      </div>
      <div>
        <Button rounded> talk</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
