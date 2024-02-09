import { signOut } from "firebase/auth";
import React,{useState} from "react";
import { database } from '../FirebaseConfig';
import { useNavigate } from "react-router-dom";
import './home.css';
import { useHistory } from 'react-router-dom';
const  Home=()=> {
    
    //voter->1
    // candidate->2
    const history = useNavigate();
    const [status , setStatus]=useState(true);
    const [login , setLogin]=useState(false);

   const displayLoginPage=()=>{
        history('/login');
   }

    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, "val")
            history('/')
        })
    }

    const showRegisterPage=(userStatus)=>{
        history('/signup', { state: { userStatus: userStatus } });
    }

    return (
        <div className='bod-1'>

            <div className="home_section" id="home_left-section">
                <nav>
                    <ul>
                        <li> <button className='home_psuedo-btn' onClick={displayLoginPage}> LogIn</button></li>
                        <li> <button className='home_psuedo-btn'> About</button></li>
                        <li> <button className='home_psuedo-btn'> Election Guide</button></li>
                    </ul>
                </nav>
                <div className="home_heading">
                    <p>Hostel Management</p>
                    <p>Committee Elections</p>
                </div>
                <div className="home_vote-btn">
                    <button id="home_Btn" onClick={()=>showRegisterPage(2)}>Register as Candidate</button>
                    <button id="home_Btn" onClick={()=>showRegisterPage(1)}>Register as Voter</button>
                </div>
            </div>

            <div className="home_section" id="home_right-section">
                <div className="home_voting-status">
                    {status ? ('Voting is') : ('Voting begins')}
                    <p id="home_status">{status ? ('LIVE') : ('18th FEB')}</p>
                </div>
                <div className="home_illustration">
                    <img id='home_Voting-img' src="pics1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Home;