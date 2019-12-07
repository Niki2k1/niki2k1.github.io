import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }

    animate(){
        setTimeout(() => {
            this.setState({
                value: this.props.value
            });
        }, 200)
      }

    componentDidMount() {
        this.animate();
    }

    render() {
        return <>
            <h1 className="progress-title">{ this.props.title }</h1>
            <div className="progress">
                <div className={ "progress-bar " + this.props.color } role="progressbar" style={{ width: `${this.state.value}%` }}/>
            </div>
        </>
    }
}
export default ProgressBar;
