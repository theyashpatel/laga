import React from "react";

export default function Song({ pl }) {
  const curSong = pl.curSong;
  return (
    <div className="song-container">
      <img alt={curSong.name} src={curSong.cover} />
      <h2>{curSong.name}</h2>
      <h3>{curSong.artist}</h3>
    </div>
  );
}
