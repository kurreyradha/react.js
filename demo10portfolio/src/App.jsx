import Container from 'react-bootstrap/Container';

import Topmenu from './Component/topmenu';
import Binner from './Component/binner';
import Topcate from './Component/topcate';
import Card from './Component/cards';

import Footer from './Component/footer';
const App=()=>{
  return(
    <>
    <Container>
{/* <Topmenu /> */}
    </Container>


    <Topmenu />
    <Binner/>
    <Topcate/>
    <Card/>
    <Footer/>
    </>
  )
}

export default App;