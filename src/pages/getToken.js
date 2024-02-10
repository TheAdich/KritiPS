import React  from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
 const Wallet=()=>{
    const navigate = useNavigate();

    const redirectF=()=>{
        navigate('/home');
    }
  return (
    <div className='wrapper'>
                <div className='card-container'>
                <img src="nature.jpg"></img>
                </div>
                <div className='signup-container'>
                    <h1>Wallet</h1>
                    <form >
                        <button className='btn' onclick={redirectF} >Get Wallet</button>
                    </form>
                </div>
            </div>
           
  )
}

export default Wallet;