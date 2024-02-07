import React from 'react'
import './agendapopup.css';
const AgendaPopUp = () => {
  return (
    <>
     <div className="body-2">
    <div className="agenda-head-wrapper">
        <div id="agenda-img-cantainer">
            <img src='pics2.jpg' alt=""/>
        </div>
        <div className='agenda-candidate-details' id="agenda-name-img">
                <p className="cand-detail">
                    Candidate Name
                </p>
                <p className="cand-tag">
                    Raj Arya
                </p>
            
        </div>
        <div className='agenda-candidate-details' id="agenda-position-img">
            <p className="cand-detail">
                Contesting for
            </p>
            <p className="cand-tag">
                General Secretary
            </p>
        </div>
        <div id="agenda-cross-btn">
            <button id="cross-btn">X</button>
        </div>
    </div>
    <div className="agenda-body-wrapper">
        <p id="agenda-header">Agenda</p>
        <div className="agenda-list">
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad accusamus voluptatibus tempore, alias vero eos voluptas itaque fugit deserunt temporibus. Maxime voluptatum et iste reprehenderit e.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure facere earum assumenda odio veritatis fuga doloribus cupiditate voluptatum error laborum quam non, in vero saepe dolor quia, delectus pariatur?</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto molestias qui, deserunt reiciendis beatae magnam? Itaque nisi, repudiandae accusamus, voluptate ex sequi molestias, consectetur distinctio ad ipsum maiores.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, atque doloribus dolor consectetur at fuga! Soluta, reprehenderit dolorem rerum animi corrupti et ut nostrum, sint facilis voluptatibus, est doloribus eius libero?</li>
            </ul>
        </div>
    </div>
    <div id="agenda-btn-wrapper">
        <button id="agenda-vote-btn">
            Vote
        </button>
    </div>
    </div>
    </>
  )
}

export default AgendaPopUp