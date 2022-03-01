import { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
    const handleChange = (e) => { setSearchTerm(e.target.value) };
    const searchTerm = props.searchTerm;
    const setSearchTerm = props.setSearchTerm;
    return (
        <div className="search-content">
            <input type="text" className="searchInput" placeholder="Search..."
                 onChange={handleChange} value={searchTerm} />
        </div>
    );
}

export default Search;