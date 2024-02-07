import React from 'react'
import './voterpopup.css';
const Voterpopup = () => {
    const data=[
        {name:'Arya Pandey' , pos:'General Secretary'},{name:'Shyam Goyal' , pos:'Sports Secretary'},
        {name:'Amit Rampuria' , pos:'Welfare Secretary'},{name:'Jairam Bhatt' , pos:'Maintainece Secretary'},
        {name:'Pranay Singh' , pos:'Literary Secretary'}, {name:'Charan Dev' , pos:'Cultural Secretary'},
        {name:'Arun Chandan' , pos:'Services Secretary'},{name:'Hari Shikar' , pos:'Media Head'},
      ]

    return(
        <>
        <div className='bod-1'>
        <div className="outer-wrapper">
        <h1 id="page7-heading">Confirm your Votes</h1>
        <div className="candidates-wrapper">
            {
              data.map((i)=>{
                return(
                  <>
                  <span>
                  <span className="img-cantainer"><img className='candidates-img' src='pics2.jpg'/>
                  <span className="img-name">{i.name}</span>
                  <span className="img-pos">{i.pos}</span>
                  </span>
                  </span>
                  </>
                )
              }
              )
            }
        </div>
        <div className="btn-wrapper">
            <button id="goback-btn">Go Back</button>
            <button id="submit-btn">Submit</button>
        </div>
        </div>
    </div>
        </>
      )
}

export default Voterpopup