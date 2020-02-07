import React from 'react'

    const Countries = ({ countries }) => {
      return (
        <div>
          <center><h1>Country List</h1></center>
          {countries.map((country) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{country.name}</h5>
                               
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Countries