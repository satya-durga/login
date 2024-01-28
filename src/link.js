import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import S2 from "./home";
import S from './pag2';
const Home=()=>{
    return(
        
        <Router>
        <Routes>
            <Route path="/" element={<S2/>}/>
            <Route path="/page" element={<S/>}/>
        </Routes>
        
        </Router>
     
        
    )


}
export default Home;