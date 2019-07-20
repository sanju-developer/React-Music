import React, { Component } from 'react';
import './header.css';
import Artist from '../artist/artist';
import Tracks from '../track/track';
import Searchbar from '../searchbar/searchbar';

const Api_base_Add = 'https://spotify-api-wrapper.appspot.com/'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: null,
            tracks: []
        }
    }

    runQuerry(searchQuery) {
        fetch(`${Api_base_Add}/artist/${searchQuery}`)
            .then((resp) => resp.json())
            .then(data => {
                console.log('artist',data);
                if (data.artists.items.length > 0) {
                    const artists = data.artists.items[0]
                    this.setState({ artists });

                    fetch(`${Api_base_Add}/artist/${artists.id}/top-tracks`)
                        .then((resp) => resp.json())
                        .then(innerdata => {
                            this.setState({ tracks: innerdata.tracks });
                        })
                        .catch(err => console.log(err))
                    }
                }
            )
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="main-container">
                <Searchbar runQuerry={this.runQuerry.bind(this)} />
                <Artist artists={this.state.artists} />
                <Tracks tracks={this.state.tracks} />
            </div>
        )
    }
}

export default Header;