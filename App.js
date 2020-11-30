import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import Feed from './components/Feed';
import Add from './components/Add';
import Username from './components/Username';
import Pages from './Pages'

function App() {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Pages/>
      <Switch>
        <Route exact path="/">
            <Feed />
        </Route>
        <Route path="/add">
            <Add />
        </Route>
        <Route path="/username">
          <Username />
        </Route>
      </Switch>
    </div>
  )
}

export default App
