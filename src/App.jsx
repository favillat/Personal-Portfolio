import './App.css';
import Nav from './components/NavBar/Nav.jsx';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import {Home,Contact} from './pages/Pages.jsx';


//npm run dev <-- Run Developer Mode 
export default function App() {
  return (
    <div className='Container'>
      <title>Fernando Villatoro</title>
   
      <Nav />

      <div className='mainContent'>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/Contact' element = {<Contact />}/>
          
        </Routes>
      </div>
      
      
    </div>
  );
}


