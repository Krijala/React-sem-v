import { useState } from 'react';

const UseState = () => {
    const [count,setcount] = useState(0);
  return (
    <>
    <p>you clicked {count} times</p>
    <button onClick={() => 
    setcount(count - 1)}>decrement </button>

    </>
  )
}

export default UseState

// import React from 'react'
// import  { useState } from 'react';


// const UseState = () => {
//     const [text,setText] = useState("hello");
   


//   return (
//     <>
//     <p>Text:{text}</p>
//     <button onChange={() => setText("hello world")}>reset
//     </button>
//     </>
//   )
// }

// export default UseState

