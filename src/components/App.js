import React from 'react';
import './App.css';

import { faUser, faBriefcase, faBuilding, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from './Nav/Nav';
import ProgressBar from './ProgressBar/ProgressBar';

function App() {
  return (
    <div className="content">
      <Nav />
      <div className="bio">
        <span><FontAwesomeIcon icon={faUser} /> Niklas Lausch</span>
        <span><FontAwesomeIcon icon={faBriefcase} /> Ausbildung Fachinformatiker Anwendungsentwicklung</span>
        <span><FontAwesomeIcon icon={faBuilding} /> Flyeralarm</span>
        <span><FontAwesomeIcon icon={faEnvelope}/> support@niki2k1.de</span>
      </div>
    </div>
  );
}

export default App;
