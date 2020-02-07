import React from 'react';
import './App.css';
import useSearchText from './useSearchText'
import Countries from './components/Countries';


function App() {
  const [query,setQuery, results, error] = useSearchText()

  if (error) return <div>{error}</div>

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countryfinder</h1>
        <h3>Type the name of a country</h3>
      </header>
      <main>        
        <div>
          <form>
              <label>
                  Name:
                  <input type="text" name="name" onKeyUp={e => setQuery(e.target.value)} />
              </label>                
          </form>
          <Countries results={results} />
        </div>
      </main>      
    </div>
  );
}

export default App;
