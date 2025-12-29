import React from 'react'
import MyProfile,{detail} from "../Myself/MyProfile"

export const object={    //it can be export but not run in same file
    names:"krijala",
}

const Me = () => {
  console.log(detail,"detail here");
  return (
    <>
    <h6>My name is{object.names} Shrestha</h6>
    <p>I live in Bhaktapur</p>
    <p>HELLO{detail.profile}</p>
    
    </>
  )
}

export default Me

