import { signOut } from "firebase/auth";
import React,{useState} from "react";
import { database } from '../FirebaseConfig';
import { useNavigate } from "react-router-dom";
import './home.css';
const  Home=()=> {
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

    const showRegisterPage=()=>{
        history('/signup')
    }

    return (
        <div className='body-1'>

            <div className="section" id="left-section">
                <nav>
                    <ul>
                        <li> <button className='psuedo-btn' onClick={displayLoginPage}> LogIn</button></li>
                        <li> <button className='psuedo-btn'> About</button></li>
                        <li> <button className='psuedo-btn'> Election Guide</button></li>
                    </ul>
                </nav>
                <div className="heading">
                    <p>Hostel Management</p>
                    <p>Committee Elections</p>
                </div>
                <div className="vote-btn">
                    <button id="Btn" onClick={showRegisterPage}>Register as Candidate</button>
                    <button id="Btn" onClick={showRegisterPage}>Register as Voter</button>
                </div>
            </div>

            <div className="section" id="right-section">
                <div className="voting-status">
                    {status ? ('Voting is') : ('Voting begins')}
                    <p id="status">{status ? ('LIVE') : ('18th FEB')}</p>
                </div>
                <div className="illustration">
                    <img id='Voting-img' src="pics1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Home;