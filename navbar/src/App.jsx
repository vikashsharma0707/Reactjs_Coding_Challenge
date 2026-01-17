import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";



const App=()=>{
    return(
        <>
      
        <BrowserRouter>
        <Routes>
          <Route  path="/"  element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="Home"  element={<Home/>}/>
          <Route path="About"  element={<About/>}/>
          <Route path="Contact"  element={<Contact/>}/>
          <Route path="Service"  element={<Service/>}/>

          </Route>
        </Routes>
        </BrowserRouter>
        
        
        </>
    )
}

export default App;