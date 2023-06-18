import { useState, useEffect } from "react";
import Button from '../components/Button'
import React from 'react'

function useSomething(initialCount) {
    const [count, setCount] = useState(initialCount)
 
    useEffect(()=>{
       console.log(count);
    },[count])

    const handleClick = ()=>{
        setCount(count + 1)
    }

    return {
       count,
       handleClick, 
    }
}

function CounterPage({initialCount}) {
    const {count, handleClick} = useSomething(initialCount);
 
    return (
    <div>
        <h1>count is {count}</h1>
        <Button onClick={handleClick}>
            increment
        </Button>
    </div>
  )
}

export default CounterPage