import React from 'react';
import { connect } from 'react-redux';
import './reminder.css';

class Reminder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reminderText: '',
        }
    }

    handleChange(e) {
        this.setState({ reminderText: e.target.value });
    }

    addreminder() {
        this.props.addReminder(this.state.reminderText);
        this.setState({ reminderText:'' });
    }

    render() {
        return (
            <div className="reminder-container">
                <h4>Your Reminder</h4>
                <input className="reminder-input"
                    type="text"
                    value={this.state.reminderText}
                    onChange={(e) => this.handleChange(e)}
                />
                <button className="btn success add-reminder-btn"
                    type="submit"
                    onClick={() => this.addreminder()}
                >
                    Add reminder
                </button>
                {this.props.reminder.length > 0 ?
                    this.props.reminder.map(rem => {
                        return (
                            <div key={rem.id} >
                                <span>{rem.reminderText}</span>
                                <button className="btn danger delete-btn" onClick={() => this.props.deleteReminder(rem.id)} >Delete</button>
                            </div>
                        )
                    })
                    : ''}
                
                <div >
                    <button className="btn danger remove-all-btn" onClick={() => this.props.clearReminder()} >Clear Reminder</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('store data', state);
    return {
        reminder: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addReminder: (text) => dispatch({ type: 'SET_REMINDER', reminderText: text }),
        deleteReminder: (id) => dispatch({ type:'DELETE_ONE_REMINDER', id: id }),    
        clearReminder: () => dispatch ({ type:'CLEAR_REMINDER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminder);