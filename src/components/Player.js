import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

export default function Player({ pl }) {
  const { songs, curSong, setCurSong, isPlaying, setIsPlaying } = pl;

  const audioRef = useRef(null);
  const [songInfo, setsongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [curSong, isPlaying]);

  function timeUpdateHandler(event) {
    const current = event.target.currentTime;
    setsongInfo((pstate) => {
      return {
        ...pstate,
        currentTime: current,
      };
    });
  }

  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function playSongHandler() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(() => false);
    } else {
      audioRef.current.play();
      setIsPlaying(() => true);
    }
  }

  function metadaDataHandler(event) {
    setsongInfo((pstate) => {
      return {
        ...pstate,
        duration: event.target.duration,
      };
    });
  }

  function dragHandler(event) {
    audioRef.current.currentTime = event.target.value;
    setsongInfo((pstate) => {
      return {
        ...pstate,
        currentTime: event.target.value,
      };
    });
  }

  function getIndex() {
    console.log(
      "get index",
      songs.findIndex((e) => e.id === curSong.id)
    );
    return songs.findIndex((e) => e.id === curSong.id);
  }

  function skipSongHandler(direction) {
    const curIndex = getIndex();
    switch (direction) {
      case "back":
        // do something
        if (curIndex > 0) {
          setCurSong(() => songs[curIndex - 1]);
        }
        break;
      case "forward":
        //do something
        if (curIndex < songs.length - 1) {
          setCurSong(() => songs[curIndex + 1]);
        }
        break;
      default:
      // default case
    }
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipSongHandler("back")}
          className={`skip-back ${getIndex() === 0 ? "icon-hidden" : ""}`}
          size="5x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="5x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipSongHandler("forward")}
          className={`skip-forward ${
            getIndex() === songs.length - 1 ? "icon-hidden" : ""
          }`}
          size="5x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onLoadedMetadata={metadaDataHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={curSong.audio}
      ></audio>
    </div>
  );
}
