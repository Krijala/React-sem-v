
import { useEffect,useState } from 'react'


const APIFetching = () => {
  const [timer,setTimer] = useState(0);
  const handleClick =() => {
  setTimer(timer + 1);

}
    useEffect (() => {
        var newTimer = timer;

        alert("API Fetching done " + newTimer + " times");
    },[timer]);

  return (
  <>
   {/* <p onClick={APIFetching}></p> */}
   <p>{timer}</p>
   <button onClick={handleClick}>Click me</button>


   {/* syntax
   useEffect(() => {},[]) */}

   {/* useEffect (() => {

        return () => {
            // cleanup code  it wont be shown
            console.log("Component unmounted" )
        }
    },[]); */}
   {/* function APIFetching(){
    const [show,setShow] = useState(true);
   }
    <button onClick ={() => setShow(false)}>hide</button>
    <button onClick ={() => setShow(true)}>show</button> */}
  </>
  )
}

export default APIFetching
