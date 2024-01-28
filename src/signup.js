import React, { useState } from 'react'
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Signup = () => {
    const [message , setmessage]=useState();
    const[err,seterr]=useState(false);
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
           // alert('Invalid email. Please use a valid iitg.ac.in email.');
           seterr(true);
            setmessage('Invalid email. Please use a valid iitg.ac.in email.');
            setTimeout(() => {
                seterr(false);
                setmessage('');
              }, 2000);
            return;
        }

        createUserWithEmailAndPassword(database, email, password).then(data => {
            console.log(data, 'authData');
            history('/home')

        }).catch(err => {
           // alert(err.code);
           seterr(true);
            setmessage(err.code);
            setTimeout(() => {
                seterr(false);
                setmessage('');
              }, 2000);

        })

    }
    return (
        <React.Fragment>
            <div className='wrapper'>
            <p className='errorMessage'>{err?message:""}</p>
                <div className='card-container'>
                <img src="nature.jpg"></img>
                </div>
                <div className='signup-container'>
                    <h1>Sign Up</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input name="email" placeholder='Enter Your email'></input><br></br>
                        <input name="password" type="password" placeholder='Enter your password'></input><br></br>
                        <button className='btn'>SignUp</button>
                        <p>Already have an account ? <NavLink to="/login" className="active">SignIn</NavLink></p>
                    </form>
                </div>
            </div>

        </React.Fragment>

    )
}




export default Signup;