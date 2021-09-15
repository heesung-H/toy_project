import React from 'react';
import './app.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
  <BrowserRouter>
      <nav>
        <Link to ="/">home</Link>
        <Link to ="/profile">profile</Link>
      </nav>
      <Switch>
        <Route path={['/', '/home']} exact>
          <Home/>
        </Route>
        <Route path="/profile" component={Profile}>
          <Profile/>
        </Route>
      </Switch>
  </BrowserRouter>
  )
}

export default App;
