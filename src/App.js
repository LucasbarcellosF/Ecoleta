import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/home.js'

import Results from './components/searchResults.js'
import CreatePoint from './components/createPoint'
import About from './components/about'

function App() {
  return (
    <div id="page-home" className="App">
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/create-point' component={CreatePoint} />
        <Route exact path='/search-results' component={Results} />

        
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
