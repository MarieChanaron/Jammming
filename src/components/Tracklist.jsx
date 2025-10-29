import Track from "./Track";

function Tracklist({ trackList, addTrack }) {

    const handleClick = e => {
        const index = +e.target.closest('table').getAttribute('index');
        addTrack(index);
    }

    const trackElements = trackList.map(
        (track, index) => <Track track={{...track, id: index}} key={index} onClick={handleClick} icon="+" />
    );

    return (
        <div id="tracklist">
            <h2>Results</h2>
            {trackElements}
        </div>
    );

}

export default Tracklist;