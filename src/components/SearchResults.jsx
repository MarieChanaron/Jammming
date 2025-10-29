import Playlist from './Playlist.jsx';
import TrackList from './Tracklist.jsx';

function SearchResults({ trackList }) {
    
    return (
        <div id="search-results">
            <TrackList trackList={trackList} />
            <Playlist />
        </div>
    );
}

export default SearchResults;
