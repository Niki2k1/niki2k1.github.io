import React from 'react';
import './App.css';

import { faUser, faBriefcase, faBuilding, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from './Nav/Nav';
import ProgressBar from './ProgressBar/ProgressBar';
import Project from './Project/Project';

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
      <ProgressBar title="JavaScript Stack (NodeJS, React, Typescript)" value="70" color="green"></ProgressBar>
      <ProgressBar title="PHP" value="30" color="yellow"></ProgressBar>
      <ProgressBar title="Adobe Photoshop and Premiere" value="55" color="green"></ProgressBar>
      <ProgressBar title="Unity Game Developement" value="10" color="red"></ProgressBar>
      <div className="projects">
        <Project img="/projects/partyplanner.png" title="PartyPlanner">PartyPlanner ist ein Planungs-Tool um WhatsappGruppen für Unternehmungen Obsolet zu machen</Project>
        <Project img="/projects/lightainer.png" title="Lightainer">With Lightainer you can easily maintain, monitor and configure your server.</Project>
      </div>
      </div>
  );
}

export default App;
