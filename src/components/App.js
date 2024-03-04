import React from 'react';
import {  Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import { Home, Contact, Navbar, Project, Skill } from './index';

function App() {
  

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />      
      <Route path="/project" element={<Project />} />      
      <Route path="/skill" element={<Skill />} />      
    </Routes>
  );

  return (
    <div className="App">
      <Router>  
        <Navbar/>
        {routes}
      </Router>
    </div>
  );
}


export default App;
