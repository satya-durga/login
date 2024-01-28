import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';
//import {Link} from "react-router-dom";





const Home=()=>{
    const navigate=useNavigate();
  
 return(

   
    <>
    <div className='main'>
      
      <h2 className="heading">Sign Up</h2>
      <div className='item'>
      <div className="items">
      <div className='a'>
      <FontAwesomeIcon icon={faUser}/>
      <input type="text" placeholder="Name"/>
      </div>
      <div className='a'>
      <FontAwesomeIcon icon={faEnvelope}/>
      <input type="text" placeholder="Name"/>
      </div>
      <div className='a'>
      <FontAwesomeIcon icon={faLock}/>
      <input type="text" placeholder="Name"/>
      </div>
      
      </div></div>
      <div className="pswd">forgot password? <span>Click here!</span></div>
      <div className='buttons'>
     {/*<Link to='/page'><input type="button" value="sign Up" /></Link>*/}

      <input type="button" value="sign Up" onClick={()=>{navigate("/page")}}/>
      <input type="button" value="sign in"/>
      </div>
     




    </div>
   
    </>
  )
}
export default  Home;
