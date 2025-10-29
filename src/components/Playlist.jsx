import Track from './Track';


function Playlist({playlist}) {

    const playlistElements = playlist.map(
        (track, index) => <Track track={{...track, id: index}} key={index} icon="-" />
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