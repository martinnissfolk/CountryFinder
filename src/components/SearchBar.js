import React from "react";
import useSearchText from '../useSearchText'
import { Link } from "react-router-dom";

function SearchBar() {
    
    const [query,setQuery, results] = useSearchText('');

    return (
        <form>
        <label>
            Name:
            <input type="text" name="name" onKeyUp={e => setQuery(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
        <ul>        
        {
            results && results.map((item, index) => <li className="App-link" key={index} >{item.name} <Link to={item.name}>{item.name}</Link></li>)
        }
        </ul>
        </form>      
    );
}

export default SearchBar