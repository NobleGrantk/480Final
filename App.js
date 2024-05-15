// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TypeText from './TypeText';
import LoginPage from './LoginPage';
import RegistrationForm from './TypeText';

const App = () => {
  const HeroUrl = "https://img.freepik.com/free-photo/nurse-patient-analyzing-brain-scan-laptop-talking-about-tomography-diagnosis-neural-system-computer-young-woman-medical-assistant-doing-checkup-consultation-waiting-room-lobby_482257-51643.jpg?w=996&t=st=1713996816~exp=1713997416~hmac=adadd80325e483311d95e1432707b76d6b3a3852062f029d3ec1ec6825444eb0";
  
  return (
    <Router>
      <div className="container">
        <img src={HeroUrl} alt="Hero" className="top-left" />
        <Routes>
          <Route path="/" element={<TypeText />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
