
import '../styles/App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './homepage';
import Any from './any';
import Regis from './register';
import Login from './login';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route exact path='/stories' element={<Any />}/>
        <Route exact path='/create' element={<Regis />}/>
        <Route exact path='/login' element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
