// import { useState } from "react";


// const Counter = () => {
//     //using the useState hook
//     // component value
//     // setter function
//   const [state,setState] = useState(0);
//   return (
//   <>
//   <button onClick={() => setState(state + 1)}>Increase</button> <br />
//   {state}   <br />
//   <button onClick={() => setState(state - 1)}>Decrease</button>
//   </>
//   )
// }

// export default Counter
// import React, { useState } from 'react'

// const Counter = () => {
//     const [state,setState] = useState(0);
//     const handleIncrease = (count)=>{
//      setState(count + 1)
//     }
//     const handleDecrease = (count)=>{
//         setState(count - 1)
//     }
//   return (
//     <>
//       <button onClick={() => handleIncrease(state)}>Increase</button> <br />
//       {state}   <br />
//      <button onClick={() =>handleDecrease(state)}>Decrease</button>
//     </>
//   )
// }

// export default Counter
import React, { useState } from 'react'

const Counter = () => {
    const [state,setState] = useState(0);
    const [isActive,setIsActive] = useState(false);
    const handleIncrease = (count)=>{
     setState(count + 1)
    }
    const handleDecrease = (count)=>{
        setState(count - 1)
    }
    const handleActive = (count)=>{
        setIsActive(count % 2 === 0 );
    }
    const color =isActive ? 'red' : 'blue';
  return (
    <>
    <button style={{color:color}} onClick={() => handleActive(state)}>change color</button>
      <button onClick={() => handleIncrease(state)}>Increase</button> <br />
      {state}   <br />
     <button onClick={() =>handleDecrease(state)}>Decrease</button>
    </>
  )
}

export default Counter


//prime ra multiple 