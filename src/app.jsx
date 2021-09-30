import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './components/login/login';
import styles from './app.module.css';
import Maker from './components/maker/maker';
import Youtube from './components/youtube/youtube';

function App({FileInput, authService, cardRepository, youtube}) {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className={styles.app}>
              <Login authService={authService}/>
            </div>
          </Route>
          <Route path="/maker">
            <div className={styles.app}>
              <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository}/>
            </div>
          </Route>
          <Route path="/youtube">
            <Youtube authService={authService} youtube={youtube}/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
