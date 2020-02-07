import { useState, useEffect } from "react";

export default function useSearchText(initialValue){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState({});

    useEffect(() => {
        console.log("Email value is :" +query);
        if(!query) {
            console.log("the string is null or empty");        
        }
        else
        {
            fetch(`https://restcountries.eu/rest/v2/name/` + query)
            .then(response => {
                //console.log(response.json());
                response.json()
                .then( data => setResults(data))
            })
            .catch(error => setError(error))            
        }
        
    },[query]);    

    return [query, setQuery, results]
}