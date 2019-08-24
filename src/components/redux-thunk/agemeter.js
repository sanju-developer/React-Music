import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/action';

class AgeMeter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="agemeter-conatiner">
                <div>{this.props.age}</div  >
                <button className="btn success" onClick={this.props.AgeUp} >Age Up</button>
                <button className="btn primary" onClick={this.props.AgeDown}>Age Down</button>
            </div>
        )
    }
}

const mapStateToprops = state => {
    return {
        age: state.AgeReducer.age
    }
}       

const mapDispatchToprops = dispatch => {
    return {
        AgeUp: () => dispatch(Actions.AgeUp(1)),
        AgeDown: () => dispatch(Actions.AgeDown(1)),
    }
}


export default connect(mapStateToprops, mapDispatchToprops)(AgeMeter);