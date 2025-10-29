import { useState } from 'react';

import Playlist from './Playlist.jsx';
import TrackList from './Tracklist.jsx';

function SearchResults() {

    const [ trackList, setTrackList ] = useState([
        {
            title: "song1",
            artist: "artist1",
            album: "album1"
        }, {
            title: "song2",
            artist: "artist2",
            album: "album2"
        }, {
            title: "song3",
            artist: "artist3",
            album: "album3"
        }
    ]);

    const [ playlist, setPlaylist ] = useState([]);


    const addTrack = index => {
        const track = trackList[index];
        setTrackList(prev => prev.filter((t, i) => i !== index));
        setPlaylist(prev => [track, ...prev]);
    }

    const removeTrack = index => {

    }
    
    return (
        <div id="search-results">
            <TrackList trackList={trackList} addTrack={addTrack} />
            <Playlist playlist={playlist} removeTrack={removeTrack} />
        </div>
    );
}

export default SearchResults;
