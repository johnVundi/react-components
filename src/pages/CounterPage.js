import useCounter from '../hooks/use-counter';
import Button from '../components/Button'
import React from 'react'


function CounterPage({initialCount}) {
    const {count, increment} = useCounter(initialCount);
 
    return (
    <div>
        <h1>count is {count}</h1>
        <Button onClick={increment}>
            increment
        </Button>
    </div>
  )
}

export default CounterPage