import { useState,useEffect } from "react";
import { Link } from "react-router";


const UseEffect = () => {
    const [value,setValue] = useState("");
    useEffect(()=>{
        console.log("Value changed:",value);
    },[value])
  return (
    <>
    <label>
    Enter the value:
    <Link to='/datafetching'>data </Link>
    <input type="text" onChange={(e)=>setValue (e.target.value)} />
    </label>
    </>

  )
}

export default UseEffect
