import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState<number>(0)

  return (
    <div>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <button onClick={()=>{setCounter(counter-1)}}>-</button>
        {counter}
    </div>
  )
}

export default Counter