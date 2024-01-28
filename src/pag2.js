import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faBell,faSearch} from '@fortawesome/free-solid-svg-icons';
import './App.css';
function S()
{
return(
    <div className="component1">
   
    <div className="section1">
        <h1>Board</h1>
        <div className="menu">
            <div>
                <FontAwesomeIcon icon={faUser} />
                <span>Dashboard
                </span>
            </div>
            <div>
                <FontAwesomeIcon icon={faUser}/>
                <span>Transactions
                </span>
            </div>
            <div>
                <FontAwesomeIcon icon={faUser}/>
                <span>Schedules
                </span>
            </div>
            <div>
                <FontAwesomeIcon icon={faUser}/>
                <span>Users
                </span>
            </div>
            <div>
                <FontAwesomeIcon icon={faUser}/>
                <span>Settings
                </span>
            </div>
        </div>
        <div className="footer">
            <h2>Help</h2>
            <h2>Contact Us</h2>
        </div>
    </div>

   
    {/*-------section-1 completed---->*/}
    <div className="section2">
        <div className="nav">
            <h1>Dashboard</h1>
        
            <div>
                
                <input type="text" placeholder="Search"/>
                <FontAwesomeIcon icon={faSearch} id="search" />
            </div>
        </div>
        <div className="boxes">
            <div className="box">
            <div><FontAwesomeIcon icon={faBell} className="icon"/></div>
            <h3>Total Revenues</h3>
          
            <h2>$2,129,430 <span>+2.5%</span></h2>
            </div>

            <div className="box">
            <div><FontAwesomeIcon icon={faBell} className="icon"/></div>
            <h3>Total Revenues</h3>
          
            <h2>$2,129,430 <span>+2.5%</span></h2>
            </div>

            <div className="box">
            <div><FontAwesomeIcon icon={faBell} className="icon"/></div>
            <h3>Total Revenues</h3>
           
            <h2>$2,129,430 <span>+2.5%</span></h2>
            </div>

            <div className="box">
            <div><FontAwesomeIcon icon={faBell} className="icon"/></div>
            <h3>Total Users</h3>
            
            <h2>9,721 <span>+2.5%</span></h2>
            </div>
          
                
        </div>
        {/*--------------------end nav-------------------*/}
       
    </div>
    </div>
   

)
}
export default S;
