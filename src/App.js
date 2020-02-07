import React from 'react';
import './App.css';
import useSearchText from './useSearchText'
import SearchBar from './components/SearchBar';
import { Link } from "react-router-dom";

function App() {
  const [query,setQuery, results] = useSearchText()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country searcher</h1>
      </header>
      <main>
        <SearchBar />
      </main>
      <div>
        {results.map((country) => (
            <div className="card" key={country.alpha2Code}>
              <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{country.capital}</h6>                
              </div>
            </div>
          ))}
            </div>
           
            {results.map((country) => ( <p key={country.alpha2Code}>hej</p>))}
    </div>
  );
}

export default App;
