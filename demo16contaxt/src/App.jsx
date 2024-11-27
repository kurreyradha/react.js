import { useState } from "react";
import { createContext } from "react";
import Cybrom from "./Cybrom";
const myContext=createContext();
const App=()=>{

  const [user,setUser]=useState("radha");
  return(
    <>
    <h1>welcome to app myname:{user}</h1> 
    <button onClick={()=>{setUser("Rupa")}}>click here</button>
    <myContext.Provider value={{user,setUser}}>
  <Cybrom/>
  
  </myContext.Provider>    
  </>
  )
}

export default App;
export {myContext};