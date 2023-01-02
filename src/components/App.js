
import '../styles/App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './homepage';
import Any from './storiesdata';
import Regis from './register';
import Loginp from './login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route exact path='/stories' element={<Any />}/>
        <Route exact path='/create' element={<Regis />}/>
        <Route exact path='/loginp' element={<Loginp />}/>
      </Routes>
    </Router>
  );
}

export default App;
