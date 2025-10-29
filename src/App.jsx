import { useState } from 'react'
import './styles/App.css'

import Heading from './components/Heading.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';


function App() {

  return (
    <div id="content">
      <Heading />
      <SearchBar />
      <SearchResults />
    </div>
  )
}

export default App
