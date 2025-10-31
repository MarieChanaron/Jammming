function SearchBar(props) {

    const { onSubmit, onChange, keywords } = props;
    
    return (
        <div id="searchbar">
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    id="keywords" 
                    name="keywords" 
                    value={keywords}
                    onChange={onChange} 
                />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default SearchBar;