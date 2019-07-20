import React from 'react';
import './artist.css';

const Artist = ({ artists }) => {
    if(!artists) return null;

    const { images, name, followers, genres } = artists;
    return(
        <div className="artist-container">
            <div className="artist-profile-container">
                <img className="artist-profile" src={images[0] && images[0].url} alt="artist-profile" />
                <p>{name}</p>
                <p>{genres.join(',')}</p>
                <p>{followers.total}</p>
            </div>
        </div>
    )
}

export default Artist;