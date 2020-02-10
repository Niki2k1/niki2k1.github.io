import React from 'react';
import './Nav.css';

class Nav extends React.Component {

    render() {
        return <div className="nav">
            <a href="/"><img width="110px"  src="/logo512.png" alt="Logo"/></a>
            <h1>Niki2k1</h1>
            <div className="icons">
                <a href="http://twitter.niki2k1.de" target="_blank" rel="noopener noreferrer"><img src="/icons/twitter.png" alt="twitter"/></a>
                <a href="http://discord.niki2k1.de" target="_blank" rel="noopener noreferrer"><img src="/icons/discord.png" alt="discord"/></a>
                <a href="http://yt.niki2k1.de" target="_blank" rel="noopener noreferrer"><img src="/icons/youtube.png" alt="youtube"/></a>
                <a href="https://www.xing.com/profile/Niklas_Lausch" target="_blank" rel="noopener noreferrer"><img src="/icons/xing.png" alt="xing"/></a>
            </div>
        </div>
    }
}
export default Nav;
