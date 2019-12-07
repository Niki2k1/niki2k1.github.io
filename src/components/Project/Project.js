import React from 'react';
import './Project.css';

class Project extends React.Component {

    render() {
        return <div className="project">
            <img src={ this.props.img } alt="project"></img>
            <div className="description">
                <h2>{ this.props.title }</h2>
                <p>{ this.props.children }</p>
            </div>
        </div>
    }
}
export default Project;
