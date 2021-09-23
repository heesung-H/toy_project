import React from 'react';
import './app.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './components/login/login';

function App({authService}) {
  return (
    <Login authService={authService}/>
  )
}

export default App;
