import card1 from "../image/card1.jpg";
import card2 from "../image/card2.jpg";
import card3 from "../image/card3.jpg";
import card4 from "../image/card4.jpg";
import card5 from "../image/card5.jpg";
import card6 from "../image/card6.jpg";
import card7 from "../image/card7.jpg";
import card8 from "../image/card8.jpg";

const Card=()=>
{
    return(
        <>
        <center><h1>Hot This Week</h1></center>
    <div id="cardi">
        <img src={card1} />
        <img src={card2} />
        <img src={card3} />
        <img src={card4} />
        <img src={card5} />
        <img src={card6} />
        <img src={card7} />
        <img src={card8} />
        </div>
        </>
    )
}

export default Card;
