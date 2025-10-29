import { useState } from 'react'
import './styles/App.css'

import Heading from './components/Heading.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import Playlist from './components/Playlist.jsx';
import TrackList from './components/Tracklist.jsx';

function App() {
  
  const [ tracks, setTracks ] = useState(
    [
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
    ]
  );

  return (
    <div id="content">
      <Heading />
      <SearchBar />
      <SearchResults />
    </div>
  )
}

export default App
