import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import Feed from './components/Feed';
import Add from './components/Add';
import ProfileOptions  from './components/UserProfile';
import Pages from './Pages'

function App() {
  return (
    <div>
      <Link to="/">
        <h1>Onjabook</h1>
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
          <ProfileOptions />
        </Route>
      </Switch>
    </div>
  )
}

export default App
