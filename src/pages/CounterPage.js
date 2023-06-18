
import Button from '../components/Button'
import { useReducer } from 'react'
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_DO = 'change_value_to_add';

const reducer = (state, action) =>{
    switch (action.type){
        case INCREMENT_COUNT:
            return{
                ...state,
                count: state.count + 1
            }
        case SET_VALUE_TO_DO:
            return{
                ...state,
                valueToAdd: action.payload
            };
            default:
                return state;
    }

}

function CounterPage({initialCount}) {
//    const[count, setCount] = useState(initialCount);
//     const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer,{
        count: initialCount,
        valueToAdd: 0
    })


   const increment =()=>{
   dispatch({
    type: INCREMENT_COUNT
   })
   }

   const decrement = () =>{
    // setCount(count - 1);
   }

   const handleChange = (event) =>{
    const value = parseInt(event.target.value) || 0;
    dispatch({
        type: SET_VALUE_TO_DO,
        payload: value
    })
   }

   const handleSubmit =(event) =>{
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
   }

    return (
    <Panel className='m-3'>
        <h1 className='text-lg'>count is {state.count}</h1>
        <div className='flex flex-row'>             
        <Button onClick={increment}>
            increment
        </Button>
        <Button onClick={decrement}>
            Decrement
        </Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label> Add a Lot!</label>
            <input 
            onChange={handleChange}
            value={state.valueToAdd || ""}
            type="number"
            className='p-1 m-3 bg-gray-50 border border-gray-300 '/>
        <Button> Add it!</Button>
        </form>
    </Panel>
  )
}

export default CounterPage