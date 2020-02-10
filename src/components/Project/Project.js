import React from 'react';
import './Project.css';

import { Link } from "react-router-dom";

class Project extends React.Component {
    getDescription() {
        if(this.props.children) {
            return <div className="description">
            <h2>{ this.props.title }</h2>
            <p>{ this.props.children }</p>
        </div>;
        }
    }

    render() {
        return <Link className="project" to={ "/projects/" + this.props.title }>
            <img src={ this.props.img } alt="project"></img>
            { this.getDescription() }
        </Link>
    }
}
export default Project;
