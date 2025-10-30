import { useState } from 'react';

function SearchBar() {

    const [ keywords, setKeywords ] = useState('');

    const handleSubmit = () => {
        // Research through the API
        setKeywords('');
    }

    return (
        <div id="searchbar">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="keywords" 
                    name="keywords" 
                    value={keywords} 
                    onChange={({ target }) => setKeywords(target.value)} 
                />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default SearchBar;