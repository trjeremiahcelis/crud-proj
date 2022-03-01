import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className="search-content">
            <input type="text" className="searchInput" placeholder="Search..." onChange={handleChange} />
            {/* {searchTerm.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.searchTerm.to) {
                    
                }
            })} */}
        </div>
    );
}

export default Search;