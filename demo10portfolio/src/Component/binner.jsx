import Carousel from 'react-bootstrap/Carousel';

import ban1 from "../image/bin1.jpg";
import ban2 from "../image/bin2.jpg";
import ban3 from "../image/bin3.jpg";
const Binner=()=>{
    return(
        <>
         <Carousel>
      <Carousel.Item interval={1000}>
        <img src={ban1} width="100%" height="450"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={ban2} width="100%"  height="450"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban3} width="100%" height="450" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Binner;