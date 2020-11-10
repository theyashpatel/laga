import React from "react";

export default function LibrarySong({ song, songs, curSong, setCurSong }) {
  function songSelectHandler() {
    setCurSong(() => song);
  }
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === curSong.id ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
