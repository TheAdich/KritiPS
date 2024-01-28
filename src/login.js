import React from 'react'
import './App.css';
import { database } from './FirebaseConfig';
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Login = () => {
  const history = useNavigate();
    const isValidEmail = (email) => {
        // Regular expression to check if the email has the domain iitg.ac.in
        const emailRegex = /^[a-zA-Z0-9._-]+@iitg\.ac\.in$/;
        return emailRegex.test(email);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!isValidEmail(email)) {
            alert('Invalid email. Please use a valid iitg.ac.in email.');
            return;
        }

        signInWithEmailAndPassword(database, email, password).then(data => {
            console.log(data, 'authData');
            history('/home')

        }).catch(err => {
            alert(err.code);

        })

    }
  return (
    <div className='wrapper'>
                <div className='card-container'>
                <img src="nature.jpg"></img>
                </div>
                <div className='signup-container'>
                    <h1>Sign In</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input name="email" placeholder='Enter Your email'></input><br></br>
                        <input name="password" type="password" placeholder='Enter your password'></input><br></br>
                        <button className='btn'>SignIn</button>
                        <p>Do not have an account ? <NavLink to="/" className="active">SignUp</NavLink></p>
                    </form>
                </div>
            </div>
  )
}

export default Login;