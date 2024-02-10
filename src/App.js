import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import Candidate from './pages/candidate/candidate';
import VoteSummary from './pages/components/voterpopup/voteSummary';
import AgendaPopUp from './pages/components/agendaPopUp/agendapopup';
import Voter from './pages/voter/voter';
import Chatbot from './pages/Chatbot';
import Wallet from './pages/getToken';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/candidate' element={<Candidate/>}></Route>
            <Route path='/voter_popUp' element={<VoteSummary/>}></Route>
            <Route path='/agenda' element={<AgendaPopUp/>}></Route>
            <Route path='/voter' element={<Voter/>}></Route>
            <Route path='/chatbot' element={<Chatbot/>}></Route>
            <Route  path='/wallet' element={<Wallet/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
