import React, { useEffect } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();
  
  useEffect(() => { // Run code based on a given condition 
    const hash = getTokenFromUrl(); //get the token from the url after authenticating
    window.location.hash = ""; // remove token from url for privacy reasons
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });


      spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcDC2ZJz239DO').then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
        );


    }
    
  }, []);

  console.log('TOKK', token);
  console.log('USSR',user);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }


    </div>
  );
}

export default App;
