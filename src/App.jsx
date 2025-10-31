import { useState } from 'react'
import './styles/App.css'

import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';


function App() {

  const [ keywords, setKeywords ] = useState('');
  const [ formSubmitted, setFormSubmitted ] = useState(false);


  const handleSubmit = event => {
    event.preventDefault();
    setFormSubmitted(true);
  }

  const handleChange = event => {
    setKeywords(event.target.value);
    setFormSubmitted(false);
  }


  return (
    <div id="content">
      <Header />
      <SearchBar 
        keywords={keywords}
        onChange={handleChange}
        onSubmit={handleSubmit} 
      />
      <SearchResults 
        formSubmitted={formSubmitted} 
        keywords={keywords} 
      />
    </div>
  )
}

export default App


