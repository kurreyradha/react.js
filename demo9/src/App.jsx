
//////////=========================== 14 nov ===============================================



// const App=()=>{

//   const display=()=>{

//     alert("event examples");

//   }
//   return(
//     <>
    
//     <h1>welcome</h1>
//     <button onClick={display}>click here</button>
//     </>
//   )
// }

// export default App;



//--------------------------------------------------------------------------------------------




// const App=()=>{

//   const myname=(nm)=>{

//     alert(`my name is:${nm}`)
//   }

//   return(
//     <>
//     <h1>welcome</h1>
//     <button onClick={()=>{myname("radha")}}>click</button>
//     </>
//   )
// }

// export default App;


//---------------------------------------------------------------------------------------



// const App=()=>{

//   const display=(nm,e)=>{

//     console.log(e);

//     alert(`name :${nm} event :${e.type}`)
//   } 

//   return(

//     <>
//     <h1>welcome</h1>

//     <button onClick={(e)=>{display("raju",e)}}>click</button>
//     </>
//   )
// }

// export default App;


///=====================================================================================================================// const App=()=>{


//   const App=()=>{

//   const display=(e)=>{

//     alert("hello freinds evemnt :"+e.type);
//   }

//   return(
//     <>
//     <h1>welcome</h1>
//     <button onClick={display}>click</button>
//     </>
//   )
// }

// export default App;


///=====================================================================================================

// const App=()=>{

//   const myval=(e)=>{

//     console.log(e);
//     let nm=e.target.name;
//     let val=e.target.value;

//     alert("name:"+nm+"value:"+val);
//   }

//   return(
//     <>
//     <h1>welcome</h1>
//     <button name="btn1" value="mybutton" onClick={myval}>click</button>   
// </>
//   )
// }


   
// export default App;



///===============================================================================================


const App=()=>{

const getval=(e)=>{
  let nm=e.target.name;
     let val=e.target.value;

     console.log({name:nm,value:val})
  
}

return(
  <>
  <h1>welcome</h1>
  <input type="text" name="city" onChange={getval} />
  </>
)

}

export default App;