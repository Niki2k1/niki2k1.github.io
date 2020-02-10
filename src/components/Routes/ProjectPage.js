import React from 'react';

import Nav from '../Nav/Nav';
import Project from '../Project/Project';
import * as showdown from "showdown";

class ProjectPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            html: ""
        }
    }

    async getReadme() {
        let converter = new showdown.Converter({
            'tables': true,
            'strikethrough': true,
            tasklists: true
        });

        const response = await fetch('https://raw.githubusercontent.com/Lightainer-Project/marketplace-service/master/README.md');
        let html = converter.makeHtml(await response.text());
        this.setState({
            html: html
        });
    }

    render() {
        this.getReadme()

        return <div className="content">
            <Nav />
            <h1>{ this.props.project }</h1>
            <Project img="/projects/partyplanner_dark.png" title="PartyPlanner"></Project>
            <p>PartyPlanner ist ein Planungs-Tool um WhatsappGruppen für Unternehmungen Obsolet zu machen</p>
            <div className="markdown">
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: this.state.html }}/>
            </div>
        </div>
    }
}

export default ProjectPage;