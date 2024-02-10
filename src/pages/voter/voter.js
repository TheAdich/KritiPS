import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue,set } from "firebase/database";
import './voter.css';
import { v4 as uuidv4 } from 'uuid';





    



const Agenda = ({ agenda, onClose }) => {
    return (
        <div className="agenda_popup" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="agenda_content" style={{position: 'relative',height:'200px',width:'370px',borderRadius:'16px',backgroundColor:'#DFDFDF',padding:'20px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems: 'center'}}>
            <h3>Agenda</h3>
                <button className="close_btn" onClick={onClose}>X</button>
                </div>
                <p className="agenda_text" style={{marginTop:'2vw'}}>{agenda}</p>
            </div>
        </div>
    )
}

const Voter = () => {
    const [agenda, setAgenda] = useState(null);
    const [showAgendaPopup, setShowAgendaPopup] = useState(false);
    const [voted, setVoted] = useState(false);
    const [candidates, setCandidates] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState('General Secretary');
    const [votedCandidate, setVotedCandidate] = useState(null);

    


    useEffect(() => {
        const database = getDatabase();
        const candidatesRef = ref(database, 'candidates');
        onValue(candidatesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const candidatesList = Object.values(data);
                setCandidates(candidatesList);
            }
        });
    }, []);





    const handleAgendaClick = (agenda) => {
        setAgenda(agenda);
        setShowAgendaPopup(true);
    };

    const handleCloseAgenda = () => {
        setShowAgendaPopup(false);
    };

    const handleVoteClick = (candidate) => {
        alert("You have successfully voted!");
        setVoted(true);
        const database = getDatabase();
        const voterId=uuidv4();
        const votedCandidateRef = ref(database, `votedCandidates/${voterId}`);
        set(votedCandidateRef, candidate).then(() => {
            alert("You have successfully voted!");
            setVoted(true);
        }).catch((error) => {
            console.error("Error voting:", error);
        });
    };
    const history = useNavigate();
    const showRegisterPage=(userStatus)=>{
        history('/Chatbot', { state: { userStatus: userStatus } });
    }
    const showRegisterPage2=(userStatus)=>{
        history('/voter_popUp', { state: { userStatus: userStatus } })};

    const filterCandidatesByPosition = () => {
        return candidates.filter(candidate => candidate.position === selectedPosition);
    };

    return (
        <div className="voter_wrapper">
            <div className="voter_navbar">
            <div className="voter_display_header">
                        <p>Voting for the position of</p>
                        <h3>Post Name</h3>
                    </div>
                    <div className="voter_post_links">
                        <button onClick={() => setSelectedPosition('General Secretary')}>General Seceratry</button>
                        <button onClick={() => setSelectedPosition('Maintenance Secretary')}>Maintainence Seceratry</button>
                        <button onClick={() => setSelectedPosition('Literary Secretary')}>Literary Seceratry</button>
                        <button onClick={() => setSelectedPosition('Cultural Secretary')}>Cultural Seceratry</button>
                        <button onClick={() => setSelectedPosition('Technical Secretary')}>Technical Seceratry</button>
                    </div>
            </div>
            <div className="left_right">
                <div className="voter_section">
                {filterCandidatesByPosition().map((candidate) => (
                        <div className="single_candidate_section" key={candidate.id}>
                            <img className="cand_img" src='Person.png'></img>
                            <h1 className="cand_name">{candidate.name}</h1>
                            <button className="btns btn_agenda" onClick={() => handleAgendaClick(candidate.agenda)}>View Agenda</button>
                            <button className="btns btn_vote" onClick={()=>handleVoteClick(candidate)}>Vote</button>
                        </div>
                    ))}
                    {showAgendaPopup && <Agenda agenda={agenda} onClose={handleCloseAgenda} />}
                </div>
                <div className="voting_section_right">
                    <div className="not_vote">
                    {voted ? (
                        <React.Fragment>
                            <h1>You have successfully voted!</h1>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2vw'}}>
                            <button className="btns btn_vote" onClick={()=>showRegisterPage2()} style={{backgroundColor:'#FFBB25'}}> Final Vote</button>
                            </div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <h1>You haven't voted for any candidate yet!</h1>
                            <p>Vote for the candidate of your choice after going through the agendas.<br/> Your chosen candidate will be your vote.</p>
                        </React.Fragment>
                    )}
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2vw'}}>
                    <button style={{borderRadius:'3vw',padding:'1vw',backgroundColor:'#eaff7b',cursor:'pointer',color:'black',fontSize:'30px'}} onClick={()=>showRegisterPage()}>  Chat with AI <img  src='ai.png' style={{height:'30px',width:'30px'}}></img></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Voter;
