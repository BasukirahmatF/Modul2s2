import React from 'react';
import './App.css';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import CreatePlaylist from './spotify/components/pages/CreatePlaylist';
import Login from './spotify/components/pages/Login';
import { RootState } from './spotify/redux/store';

export default function App() {

  const isAuthorized: boolean = useSelector(
    (state: RootState) => state.auth.isAuthorized
  );
  return (
    <Router>
      <Switch>
        <Route path="/songplaylist" exact>
          {isAuthorized ? <CreatePlaylist /> : <Redirect to="/" />}
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}