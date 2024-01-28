import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import S from './pag2';
import Home from './home';
const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page' element={<S/>}/>

      </Routes>
    </Router>

  )

}
export default App;