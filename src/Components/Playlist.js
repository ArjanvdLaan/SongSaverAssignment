import React from "react";
import Song from "./Song";

function Playlist(props) {
  // console.log(props.songs)
  function deleteSong(event, title) {
    const updatedSongList = props.songs.filter((song) => song.title !== title);
    props.setSongData(updatedSongList);
  }
  return (
    <table style={{ width: "100%" }}>
      {props.songs.map((song) => (
        <Song key={song.id} song={song} deleteSong={deleteSong} />
      ))}
    </table>
  );
}

export default Playlist;
