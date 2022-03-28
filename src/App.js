import React from "react";
import './App.css'; 
import data from "./data/data";
import Track from "./components/Track/index.js";

function App() {

  return data.map((a) => (
      <Track
        Cover={a.album.images[1].url}
        Judul={a.name}
        Artist={a.artists[0].name}
        Album={a.album.name}
      />
    ));
  }
  
  export default App;
