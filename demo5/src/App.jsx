import student from "./stuData";
const ans=student.map((key)=>{
  return(
    <>

    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
    </tr>
    
    </>
  )
})

const App=()=>{
  return(
  


  <table>
    <tr>
      <th>rollno</th>
      <th>name</th>
      <th>city</th>
      <th>fees</th>

    </tr>
  </table>
  )
}

export default App;