import React, { Component } from 'react';
import './track.css';

class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            audio: null,
            playing_previous_preview_url: null
        }
    }

    playAudio = preview_url => {
        const audio = new Audio(preview_url);

        if (!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio: audio, playing_previous_preview_url: preview_url })
        } else {
            this.state.audio.pause();
            if (this.state.playing_previous_preview_url == preview_url) {
                this.setState({ playing: false });
            } else {
                audio.play();
                this.setState({ audio: audio, playing_previous_preview_url: preview_url })
            }
        }
    }

    render() {

        const { tracks } = this.props;
        return (
            <div className="track-contanier">
                {
                    tracks.map(track => {
                        const { id, album, name, preview_url } = track;

                        return (
                            <div key={id} className="track-info" onClick={() => this.playAudio(preview_url)}>
                                <img className="track-image" src={album.images[0] && album.images[0].url} alt="track-profile" />
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;