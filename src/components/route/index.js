import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRoute,
  useParams
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/create-playlist">
            <CreatePlaylist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}
function CreatePlaylist() {
  let match = useRoute();

  return (
    <div>
      <h2>Create Playlist</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:listId`}>
          <List />
        </Route>
        <Route path={match.path}>
          <h3>Create Playlist</h3>
        </Route>
      </Switch>
    </div>
  );
}

function List() {
  let { listId } = useParams();
  return <h3>Requested id: {listId}</h3>;
}
