import { useState, useEffect } from "react";

export default function useSearchText(initialValue){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);   

    useEffect(() => {        
        if(!query.trimLeft()) {
            //query is null or empty       
        }
        else
        {
            fetch(`https://restcountries.eu/rest/v2/name/` + query)
            .then(response => {                
                response.json()
                .then( data => 
                    {
                        if(data.status === 404)
                        {
                            // no matches where found
                        }                        
                        setResults(data)
                    })
            })
            .catch(error => 
                {
                    //error has occurred
                    setError(error)
                })       
        }
        
    },[query]);    

    return [query, setQuery, results, error]
}