const Search = (props) => {
    const searchTerm = props.searchTerm;
    const setSearchTerm = props.setSearchTerm;
    const handleChange = (e) => { setSearchTerm(e.target.value) };
    return (
        <div className="search-content">
            <input type="text" className="searchInput" placeholder="Search..."
                 onChange={handleChange} value={searchTerm} />
        </div>
    );
}

export default Search;