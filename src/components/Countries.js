import React from 'react'
import { Link } from "react-router-dom";

const Countries = ({results}) => {
  return (
    <div className="list-container">
      <ul>        
      {
          results && results.length > 0 && results.map((item, index) => <li className="App-link" key={index} ><Link to={item.name}>{item.name}</Link></li>)
      }
      </ul>
    </div>
  )
};

export default Countries