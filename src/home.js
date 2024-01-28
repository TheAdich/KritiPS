import { signOut } from "firebase/auth";
import React from "react";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import './App.css';
function Home(){
    const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
    return(
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>SignOut</button>
        </div>
    )
}
export default Home;