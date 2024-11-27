import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout";
import  Home from "./Home";
import About from "./About";
import Contact from "./Contact";


    
const app=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contac/>}/>


            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default app;