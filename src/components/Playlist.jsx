import { useState } from 'react';
import Track from './Track';


function Playlist({playlist, removeTrack}) {

    const [ playlistName, setPlaylistName ] = useState();

    const handleClick = e => {
        const index = +e.target.closest('table').getAttribute('index');
        removeTrack(index);
    }

    const playlistElements = playlist.map(
        (track, index) => <Track 
            track={{...track, id: index}} 
            key={index} 
            onClick={handleClick} 
            icon="-" 
        />
    );

    const handleSave = () => {
        const uriList = playlist.map(el => el.uri);
        //saveToSpotify(uriList);
        setPlaylistName('');
    }

    return (
        <div id="playlist">
            <input 
                type="text" 
                placeholder="Playlist name" 
                value={playlistName} 
                onChange={({target}) => setPlaylistName(target.value)} 
            />
            {playlistElements}
            <button onClick = {handleSave}>Save to Spotify</button>
        </div>
    );
}

export default Playlist;