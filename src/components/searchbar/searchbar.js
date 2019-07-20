import React, { Component } from 'react';
import './searchbar.css';

class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
        }
    }

    changeQuerry(e) {
        this.setState({ searchQuery: e.target.value });
    }

    onHitEnter(e) {
        if (e.key == 'Enter') {
            this.runQuerryFun();
        }
    }

    runQuerryFun(){
        this.props.runQuerry(this.state.searchQuery);
    }

    render() {
        return (
            <div className="Header-container">
                <input type="text"
                    className="search-input"
                    placeholder="Enter artist name"
                    value={this.state.searchQuery}
                    onChange={(e) => this.changeQuerry(e)}
                    onKeyPress={(e) => this.onHitEnter(e)}
                />
                <button className="submit-btn"
                    onClick={() => this.runQuerryFun()}>
                    Search
            </button>
            </div>
        )
    }
}

export default Searchbar;