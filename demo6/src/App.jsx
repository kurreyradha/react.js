import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";
const ans =EmpData.map((key)=><EmpDesign
eno={key.empno}
empnm={key.name}
empdesig={key.designation}
empsal={key.salary}
/>);

const App=()=>{
  return(
    <>
    <h1>welcome to cybrom</h1>
    <div id="empwrapper">

      {ans}
    </div>
    </>
  )
}
export default App;