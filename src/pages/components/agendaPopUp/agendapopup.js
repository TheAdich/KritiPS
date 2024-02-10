import React from 'react'
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import './agendapopup.css';
const AgendaPopUp = () => {


    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const candidatesRef = ref(database, 'candidates');
        const unsubscribe=onValue(candidatesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              const candidatesList = Object.keys(data).map((candidateId) => ({
                id: candidateId,
                ...data[candidateId],
              }));
              setCandidates(candidatesList);
            }
          });
          return () => {
            unsubscribe();
          };
        }, []);

  return (
     <div className="bod-2" style={{display:'flex',flexDirection:'column'}}>
        {candidates.map((candidate) => (
                        <div key={candidate.id} className="agenda-head-wrapper" style={{display:'flex',flexDirection:'column'}}>
                            <div id="agenda-img-cantainer" style={{display:'flex',justifyContent:'space-between'}}>
                                <img src="pics2.jpg" alt="" />
                            <div className="agenda-candidate-details" id="agenda-name-img">
                                <p className="cand-detail">Candidate Name</p>
                                <p className="cand-tag">{candidate.name}</p>
                            </div>
                            <div className='agenda-candidate-details' id="agenda-position-img">
            <p className="cand-detail">
                Contesting for
            </p>
            <p className="cand-tag">
                {candidate.position}
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
                <li>{candidate.agenda}</li>
            </ul>
        </div>
        </div>
        <div id="agenda-btn-wrapper">
        <button id="agenda-vote-btn">
            Vote
        </button>
    </div>

                        </div> 
                    ))}
    </div>
  )
}


export default AgendaPopUp;