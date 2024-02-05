import React, { useState } from 'react'
import './candidate.css'
const Candidate = () => {
  const [btnstyle , setBtnstyle]=useState({});
  const [formstyle,setFormStyle]=useState({display:'none'});
  const[showDatastyle , setDatastyle]=useState({display:'none'});
  const showForm=()=>{
      setBtnstyle({
        display:'none',
      })
      setFormStyle({
        display:'flex',
      })
  }
  

  const [formdata , setFormData]=useState({
    name:'Aditya',
    year:2,
    position:'technical sec',
    course:'b.Tech',
    agenda:'Paisa hi paisa hoga',
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("formdata",formdata)
   setFormStyle({display:'none'});
    setDatastyle({display:'flex'});
  }

  const handleChange=(e)=>{
   console.log(e.target.name , e.target.value)
   const {name , value}=e.target;
   setFormData((prevData)=>({
    ...prevData,
    [name]:value,
   }))
  }
  return (
    <div className='dashbord_wrapper'>
      <div className='dashboard'>
        <div className='election_header_icon'>
          <img src='ballotBox.svg'></img>
          <h3>Brahmaputra <br />HMC Elections</h3>
        </div>

        <div className='dashboard_navbar'>
          <a className='dashboard_navlinks'>Candidacy</a>
          <a className='dashboard_navlinks'>Voting</a>
          <a className='dashboard_navlinks'>Election Guide</a>
          <a className='dashboard_navlinks'>About</a>
        </div>

        <div className='logout_section'>
          <h4>Logout</h4>
        </div>
      </div>


      <div className='candidate_section'>
        <h1 className='username_name'>Hi Dinesh</h1>
        <div className='btn_section'>
          <h3 className='prompt'>Your candidacy details</h3>
        </div>
       <div className='form_section'>
          <button className='add_btn' onClick={showForm} style={btnstyle}>Add candidacy details</button>
          <form className='candidate_form' onSubmit={(e) => handleSubmit(e)} style={formstyle}>
            <fieldset className='name_section'>
              <legend>Candidate Name</legend>
              <input type='text' name='name' required  onChange={handleChange} placeholder='Enter Your Name'></input>
            </fieldset>
            <div className='three_form_wrapper'>
              <fieldset className='year_of_study'>
                <legend>Year of study</legend>
                <input type='number'  required  max={4} min={2} name='year' onChange={handleChange}></input>
              </fieldset>
              <fieldset className='position_apply'>
                <legend>Position</legend>
                <label for='dropdown'>Apply for: </label>
                <select id='dropdown'  required  name='position' onChange={handleChange}>
                  <option value=''>Select</option>
                  <option value='option1'>option 1</option>
                  <option value='option2'>option 2</option>
                  <option value='option3'>option 3</option>
                </select>
              </fieldset>
              <fieldset className='course_enrolled'>
                <legend>Course</legend>
                <select id='course'name='course'  required  onChange={handleChange}>
                  <option value=''>Select</option>
                  <option value='btech'>B.Tech</option>
                  <option value='mtech'>M.tech</option>
                  <option value='phd'>Phd</option>
                </select>
              </fieldset>
            </div>
            <fieldset className='agenda'>
              <legend>Agenda </legend>
              <textarea name='agenda'  required   onChange={handleChange} id="candidatePoints" placeholder='Enter your Agenda in points' rows='20' cols='100'></textarea>
            </fieldset>
            <button type='submit' value='save' id='save'>Submit</button>
          </form>
  </div>
        <div className='formOutput' style={showDatastyle}>
        <div className='formoutput_cand c_name'>
        <h4>Candidate name</h4>
        <p>{formdata.name}</p>
        </div>
        <div className='formoutput_cand c_year'>
        <h4>Year of Study</h4>
        <p>{formdata.year}</p>
        </div>
        <div className='formoutput_cand c_position'>
        <h4>Contesting for</h4>
        <p>{formdata.position}</p>
        </div>
        <div className='formoutput_cand c_course'>
        <h4>Candidate course</h4>
        <p>{formdata.course}</p>
        </div>
        <div className='formoutput_cand c_agenda'>
        <h4>Candidate Agenda</h4>
        <p>{formdata.agenda}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Candidate