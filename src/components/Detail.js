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
        console.log("the id is null or empty"); 
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
        <div className="container">
        <div className="card">
            <h1>{data.name}</h1>
            <div className="img-container">
            capital: {data.capital}
            </div>
            <Link to="/">Return to List View</Link>
        </div>
        </div>
    </div>
  );
}

export default Detail;