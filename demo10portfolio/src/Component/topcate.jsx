import Cup1 from "../image/cup1.jpg";
import Cup2 from "../image/cup2.jpg";
import Cup3 from "../image/cup3.jpg";
const Topcate=()=>{
    return(
        <>
        <div id="toph">
       <center> <h1>Top Categories</h1></center>
       </div>
       <div id="topc">
       <img src={Cup1} />
       <img src={Cup2} />
       <img src={Cup3} />
       </div>
        </>
    )
}

export default Topcate;