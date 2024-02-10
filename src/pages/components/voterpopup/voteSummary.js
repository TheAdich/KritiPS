import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import './voterpopup.css';

const VoteSummary = () => {
    const [votedCandidates, setVotedCandidates] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const votedCandidatesRef = ref(database, 'votedCandidates');

        onValue(votedCandidatesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const candidatesList = Object.values(data);
                setVotedCandidates(candidatesList);
            }
        });
    }, []);

    return (
        <div className='bod-1'>
            <div className="outer-wrapper">
                <h1 id="page7-heading">Confirm your Votes</h1>
                <div className="candidates-wrapper">
                    {votedCandidates.map(candidate => (
                        <div key={candidate.name} className="candidate-item" style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'2vw',paddingLeft:'80px'}}>
                            <div className="img-container" style={{display:'flex',flexDirection:'column'}}>
                                <img className="cand_img" src='Person.png' style={{height:'60px',width:'60px'}}></img>
                                <span className="img-name">{candidate.name}</span>
                                <span className="img-pos">{candidate.position}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn-wrapper">
                    <button id="goback-btn">Go Back</button>
                    <button id="submit-btn" onClick={()=>alert("Vote Submitted Successfully")}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default VoteSummary;
