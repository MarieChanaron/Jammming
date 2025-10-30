import { useState } from 'react'
import './styles/App.css'

import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';

import './api/authorization.js';


function App() {

  return (
    <div id="content">
      <Header />
      <SearchBar />
      <SearchResults />
    </div>
  )
}

export default App
