import Track from './Track';


function Playlist({playlist, removeTrack}) {

    const handleClick = e => {
        const index = +e.target.closest('table').getAttribute('index');
        removeTrack(index);
    }

    const playlistElements = playlist.map(
        (track, index) => <Track track={{...track, id: index}} key={index} onClick={handleClick} icon="-" />
    );

    return (
        <div id="playlist">
            <input type="text" placeholder="Choose the name of your new playlist" />
            {playlistElements}
            <button>Save to Spotify</button>
        </div>
    );
}

export default Playlist;