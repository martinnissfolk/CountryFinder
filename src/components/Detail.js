import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useSearchText from '../useSearchText'

function Detail({
  match: {
    params: { id }
  }
}) {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
      if(!id)
      {
        //id is null or empty 
      }
      else
      {
        fetch(`https://restcountries.eu/rest/v2/name/` + id)
            .then(response => {                
                response.json()
                .then( 
                    data => {
                        const foundItem = data.find((item) => {
                            return item.name === id
                        })
                        setData(foundItem)
                    }
                )
                
            })
            .catch(error => setError(error))    
      }
      return () => console.log('unmounting...');      
  }, [id]);

  return (
    <div className="App">
      <main>        
          <h1>{data.name}</h1>
          <div className="list-container">
            <img src={data.flag} alt="country flag" height="120" width="120" /> 
            <ul>
              <li>Capital: {data.capital}</li>
              <li>Region: {data.region}</li>
              <li>Population: {data.population}</li>                
            </ul>              
          </div>
          <div>
            <Link to="/">Return to List View</Link>
          </div>
      </main>
    </div>
  );
}

export default Detail;