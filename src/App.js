import React from "react";
import './App.css';
import data from './data/data';
import Song from './components/index.js';

function App() {
  return (

  <Song
        title={data.name}
        image={data.album.images[0].url}
        artists={data.album.name}
        album={data.artists[0].name}
      />
);
}

export default App;
