import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Signup from './signup';
import Login from './login';
import Home from './home';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
