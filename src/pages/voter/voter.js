import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './voter.css';

const lists = [
    {
        id: '0',
        name: 'Raj',
        agenda: 'slfhkahfnlewnf'
    },
    {
        id: '1',
        name: 'Raj2',
        agenda: 'slfhkahfzdzfsgsfgnlewnf'
    },
    {
        id: '2',
        name: 'Raj3',
        agenda: 'slfhka;dfjglkfdghfnlewnf'
    },
    {
        id: '3',
        name: 'Raj4',
        agenda: 'slfhkadkfkgjldkfjghfnlewnf'
    },
]

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

    const handleAgendaClick = (agenda) => {
        setAgenda(agenda);
        setShowAgendaPopup(true);
    };

    const handleCloseAgenda = () => {
        setShowAgendaPopup(false);
    };

    const handleVoteClick = () => {
        alert("You have successfully voted!");
        setVoted(true);
    };
    const history = useNavigate();
    const showRegisterPage=(userStatus)=>{
        history('/Chatbot', { state: { userStatus: userStatus } });
    }
    return (
        <div className="voter_wrapper">
            <div className="voter_navbar">
            <div className="voter_display_header">
                        <p>Voting for the position of</p>
                        <h3>Post Name</h3>
                    </div>
                    <div className="voter_post_links">
                        <button>Genral Seceratry</button>
                        <button>Maintainence Seceratry</button>
                        <button>Literary Seceratry</button>
                        <button>Cultural Seceratry</button>
                        <button>Technical Seceratry</button>
                    </div>
            </div>
            <div className="left_right">
                <div className="voter_section">
                    {lists.map((list) => (
                        <div className="single_candidate_section" key={list.id}>
                            <img className="cand_img" src='Person.png'></img>
                                    <h1 className="cand_name">{list.name}</h1>
                            <button className="btns btn_agenda" onClick={() => handleAgendaClick(list.agenda)}>View Agenda</button>
                            <button className="btns btn_vote" onClick={handleVoteClick}>Vote</button>
                        </div>
                    ))}
                    {showAgendaPopup && <Agenda agenda={agenda} onClose={handleCloseAgenda} />}
                </div>
                <div className="voting_section_right">
                    <div className="not_vote">
                    {voted ? (
                        <React.Fragment>
                            <h1>You have successfully voted!</h1>
                            <p>Your chosen candidate will appear here.</p>
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
