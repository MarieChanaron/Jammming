import { useState, useEffect } from 'react';

import Playlist from './Playlist.jsx';
import TrackList from './Tracklist.jsx';

import API from '../api/search';


// Process and format the data received from the API

const mapThroughData = data => {
    const items = data.tracks.items;

    const tracks = items.map(item => {
        return {
            title: item.name,
            artist: item.artists.map(artist => artist.name).join(', '),
            album: item.album.name,
            URI: item.href
        };
    });

    return tracks
}



function SearchResults({ keywords, formSubmitted }) {

    const [ trackList, setTrackList ] = useState([]);
    const [ playlist, setPlaylist ] = useState([]);


    // Fetch Data after click
    
    useEffect(() => {
        if (!formSubmitted) return;
      
        API.fetchData(keywords, 'track')
        .then(data => setTrackList(mapThroughData(data)));

    }, [formSubmitted]);


    // Add a track and remove a track from the playlist

    const addTrack = index => {
        const track = trackList[index];
        setTrackList(prev => prev.filter((t, i) => i !== index));
        setPlaylist(prev => [track, ...prev]);
    }

    const removeTrack = index => {
        const track = playlist[index];
        setPlaylist(prev => prev.filter((t, i) => i !== index));
        setTrackList(prev => [track, ...prev]);
    }

    
    return (
        <div id="search-results">
            <TrackList trackList={trackList} addTrack={addTrack} />
            <Playlist playlist={playlist} removeTrack={removeTrack} />
        </div>
    );
}

export default SearchResults;
