import React from 'react';
import './App.css';

import { faUser, faBriefcase, faBuilding, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from './Nav/Nav';
import ProgressBar from './ProgressBar/ProgressBar';
import Project from './Project/Project';

function App() {
  return (
    <div className="grid-container">
      <Nav />
      <div className="Infos">
        <span><FontAwesomeIcon icon={faUser} /> Niklas Lausch</span>
        <span><FontAwesomeIcon icon={faBriefcase} /> Ausbildung Fachinformatiker Anwendungsentwicklung</span>
        <span><FontAwesomeIcon icon={faBuilding} /> <a href="https://flyeralarm.com/karriere" target="_blank" rel="noopener noreferrer">Flyeralarm</a></span>
        <span><FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:support@niki2k1.de">support@niki2k1.de</a></span>
      </div>
      <div className="Knowledge">
        <ProgressBar title="JavaScript Stack (NodeJS, React, Vue, Typescript)" value="70" color="green"></ProgressBar>
        <ProgressBar title="PHP" value="30" color="yellow"></ProgressBar>
        <ProgressBar title="Adobe Photoshop and Premiere" value="55" color="green"></ProgressBar>
        <ProgressBar title="Devops (Docker, Continious Integration, Deployments)" value="25" color="yellow"></ProgressBar>
      </div>
      <div className="Projects">
        <Project img="/projects/new/PartyPlanner.png" title="PartyPlanner">PartyPlanner ist ein Planungs-Tool um WhatsappGruppen für Unternehmungen Obsolet zu machen</Project>
        <Project img="/projects/new/Lightainer.png" title="Lightainer">With Lightainer you can easily maintain, monitor and configure your server.</Project>
        <Project img="/projects/new/Frontend.png" title="Frontend Framework">A small frontend library with react components to build web applications.</Project>
        <Project img="/projects/new/YoutubeMultiplayer.png" title="YoutubeMultiPlayer">A webapp for watching Youtube videos synced with your Friends (like watch2gether).</Project>
      </div>
      </div>
  );
}

export default App;
