import React, { useEffect, useState } from "react";
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

const Agenda = ({ agenda, agendaStyle }) => {

    return (
        <React.Fragment>
            <div className="agenda_block" style={agendaStyle}><p className="agenda_text">{agenda}</p></div>


        </React.Fragment>
    )
}





const Voter = () => {
    const [agenda, setAgenda] = useState(null);
    const [voterStyle, setVoterstyle] = useState({ opacity: 1 });
    const [agendaStyle, setAgendaStyle] = useState({ opaciyt: 0 });



    useEffect = (() => {
        console.log('Rendering...');


    }, []);



    return (
        <React.Fragment>
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
                    <div className="voter_section" style={voterStyle}>
                        
                        {
                            lists.map((list) => (
                                <div className="single_candidate_section" key={list.id}>
                                    <img className="cand_img" src='Person.png'></img>
                                    <h1 className="cand_name">{list.name}</h1>
                                    <div className="btns_section">
                                    <button className="btns btn_agenda" onClick={() => {
                                        setAgenda(list.agenda);
                                        setVoterstyle({ opacity: 0.2 });
                                        setAgendaStyle({ display: 1 });
                                    }}
                                    >View Agenda</button>
                                    <button className="btns btn_vote">Vote</button>
                                    </div>
                                    
                                </div>
                            ))
                        }
                        {agenda && <Agenda agenda={agenda} agendaStyle={agendaStyle} />}
                    </div>
                    <div className="voting_section_right">
                    <div className="not_vote">
                    <h1>You haven't voted for any candidate yet!</h1>
                    <p>Vote for the candidate of your choice after going through the agendas.<br/> Your chosen candidate will appear here.</p>
                    </div>
                       
                    </div>

                </div>
            </div>

        </React.Fragment>)
}
export default Voter; 