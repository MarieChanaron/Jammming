import Track from "./Track";

function Tracklist({ trackList }) {

    const trackElements = trackList.map(
        track => <Track track={track}/>
    );

    return (
        <div id="tracklist">
            <h2>Results</h2>
            {trackElements}
        </div>
    );

}

export default Tracklist;