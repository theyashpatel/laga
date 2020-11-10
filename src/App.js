import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import chillHop from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(chillHop);
  const [curSong, setCurSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  const payload = {
    songs: songs, // array of all songs
    curSong: curSong, // current playing song
    setCurSong: setCurSong, // set current playing song
    isPlaying: isPlaying, // song is playing or paused
    setIsPlaying: setIsPlaying, // set play pause
    libraryStatus: libraryStatus, // is library vissible
    setLibraryStatus: setLibraryStatus, // set library vissibility
  };

  return (
    <div className="App">
      <Nav pl={payload} />
      <Song pl={payload} />
      <Player pl={payload} />
      <Library pl={payload} />
    </div>
  );
}

export default App;
