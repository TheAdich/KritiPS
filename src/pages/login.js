import React ,{useState , useEffect} from 'react'
import '../App.css';
import { database } from '../FirebaseConfig';
import {  signInWithEmailAndPassword  } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Login = () => {
  const location = useLocation();
    const [userStatus, setUserStatus] = useState(0);

    useEffect(() => {
        if (location.state && location.state.userStatus) {
            setUserStatus(location.state.userStatus);
        }
    }, [location.state]);
    console.log(userStatus);
   
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

        signInWithEmailAndPassword(database, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
  
          // Check if the user's email is verified
          if (user.emailVerified) {
            console.log('Email is verified');
            console.log('User:', user);
            history('/home');
          } else {
            // If email is not verified, display an alert or take appropriate action
            alert('Email is not verified. Please verify your email before logging in.');
          }
        })
        .catch((err) => {
          alert(err.code);
        });

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
                        <p>Do not have an account ? <NavLink to="/wallet" className="active">Get Wallet</NavLink></p>
                    </form>
                </div>
            </div>
           
  )
}

export default Login;