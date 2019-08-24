import React from 'react';
import './entry.css';
// import { withRouter } from 'react-router-dom';

class Entry extends React.Component{
    constructor(props){
        super(props);
    }

    goToReminder(){
        this.props.history.push('/entry/reminder');
    }

    goToMusic(){
        this.props.history.push('/entry/music');
    }

    goToAgeMeter(){
        this.props.history.push('/entry/agemeter');
    }

    render(){
        return(
            <div className="Entry-container">
                <button onClick={() => this.goToReminder()} className="btn primary countdown">
                    Reminder
                </button>
                <button onClick={() => this.goToMusic()} className="btn primary music">
                    Music
                </button>
                <button onClick={() => this.goToAgeMeter()} className="btn primary music">
                    AgeMeter
                </button>
            </div>
        )
    }
}

export default Entry;