import React from 'react';
import './Nav.css';

class Nav extends React.Component {

    render() {
        return <div className="nav">
            <img width="110px"  src="/logo512.png" alt="Logo"></img>
            <h1>Niklas Lausch</h1>
            <div className="icons">
                <img src="/icons/twitter.png" alt="twitter"></img>
                <img src="/icons/discord.png" alt="discord"></img>
                <img src="/icons/youtube.png" alt="youtube"></img>
                <img src="/icons/xing.png" alt="xing"></img>
            </div>
        </div>
    }
}
export default Nav;
