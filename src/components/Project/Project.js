import React from 'react';
import './Project.css';

class Project extends React.Component {

    render() {
        return <a className="project" href={ "/projects/" + this.props.title }>
            <img src={ this.props.img } alt="project"></img>
            <div className="description">
                <h2>{ this.props.title }</h2>
                <p>{ this.props.children }</p>
            </div>
        </a>
    }
}
export default Project;
