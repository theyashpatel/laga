import React from "react";
import LibrarySong from "./LibrarySong";

export default function Library({ pl }) {
  return (
    <div className={`library ${pl.libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {pl.songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            songs={pl.songs}
            curSong={pl.curSong}
            setCurSong={pl.setCurSong}
          />
        ))}
      </div>
    </div>
  );
}
