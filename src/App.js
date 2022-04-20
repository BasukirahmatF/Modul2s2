import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Track from "./components/Track/index.tsx";
import LoginButton from "./components/button/index.tsx";
import './App.css';

function App() {
  const [access_token, set_access_token] = useState(null);
  const [query, set_query] = useState('');
  const [tracks, set_tracks] = useState([]);
  const [selectedTrackURI, setSelectedTrackURI] = useState([]);


  useEffect(() => {
    if (!setSelectedTrackURI) {
      const selectedTracks = filterSelectedTracks();

      set_tracks(selectedTracks);
    }
  }, [selectedTrackURI]);
  const filterSelectedTracks = () => {
    return tracks.filter((tracks) => selectedTrackURI.includes(tracks.uri));
  };

  const toggleSelect = (tracks) => {
    const uri = tracks.uri;

    if (selectedTrackURI.includes(uri)) {
      setSelectedTrackURI(selectedTrackURI.filter((item) => item !== uri));
    } else {
      setSelectedTrackURI([...selectedTrackURI, uri]);
    }
  };
  const SearchBox = () => {
    return (
      <div className="box">
        <input
          onChange={(event) => {set_query(event.target.value)}}
          value={query} type="text"
          placeholder="Cari album yang diinginkan"></input>
        <button onClick={() => {handleClick()}}>
          <h5>search</h5></button>
      </div>
    );
  }

  function handleClick() {
    try {
      let url = 'https://api.spotify.com/v1/search?q='+query+'&type=track,artist';
      axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
      })
      .then(res => {
        set_tracks(res.data.tracks.items);
      })
    } catch (err) {
      console.error(err);
    } finally {
      console.log(tracks);
    }
  }

  function getHashParams() {
    let hashParams = {};
    let x, l = /([^&;=]+)=?([^&;]*)/g,
      tamp = window.location.hash.substring(1);
    while (( x = l.exec(tamp))) {
      hashParams[x[1]] = decodeURIComponent(x[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    let params = getHashParams()
    let token = params.access_token;
    set_access_token(token);
  });
   return (
    <div>
      {(!access_token) && (
        <LoginButton/>
      )}
      {(access_token) && (
        <SearchBox/>
      )}
      <div>
        {tracks.map((item) => {
          return (
          <Track
              key={item.album.id}
              image_url={item.album.images[0].url}
              artist_name={item.album.artists[0].name}
              track_title={item.name}
              album_name={item.album.name}
              toggleSelect={() => toggleSelect(tracks)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;