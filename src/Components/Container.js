import React, { useState } from "react";
import SongSaver from "./SongSaver";
import Playlist from "./Playlist";
import "../CSS/Container.css";

function Container() {
  const [songData, setSongData] = useState([
    { id: 1, title: "Movement", artist: "Hozier", genre: "rock", rating: 5 },
    {
      id: 2,
      title: "Bad Guy",
      artist: "Billie Eilish",
      genre: "pop",
      rating: 4,
    },
    {
      id: 3,
      title: "Lonely Boy",
      artist: "Black Keys",
      genre: "rock",
      rating: 5,
    },
  ]);

  const addSong = (title, artist, genre, rating) => {
    setSongData((prevState) => [
      ...prevState,
      {
        id: songData.length + 1,
        title: title,
        artist: artist,
        genre: genre,
        rating: rating,
      },
    ]);
  };

  const onSortArtist = () => {
    const sortArtistSongData = [...songData].sort((a, b) => {
      return a.artist.toLowerCase() > b.artist.toLowerCase() ? 1 : -1;
    });
    setSongData(sortArtistSongData);
  };

  const onSortRating = () => {
    const sortRatingSongData = [...songData].sort(
      (a, b) => b.rating - a.rating
    );
    setSongData(sortRatingSongData);
  };

  const filterByGenre = (genre) => {
    // console.log(genre)
    setSongData(
      [...songData].filter((song) => {
        // console.log(song.genre)
        return song.genre === genre;
      })
    );
  };

  const filterByRating = (rating) => {
    // console.log(rating)
    setSongData(
      [...songData].filter((song) => {
        // console.log(song.rating)
        return song.rating == rating;
      })
    );
  };

  return (
    <div>
      <header>
        <div className="header">Ariesche Playlist</div>
      </header>
      <main>
        <SongSaver
          onSongAdd={addSong}
          onSortArtist={onSortArtist}
          onSortRating={onSortRating}
          onFilterGenre={filterByGenre}
          onFilterRating={filterByRating}
        />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr className="song-header">
              <th className="song-row__item">Title</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
          </tbody>
        </table>
        <Playlist songs={songData} setSongData={setSongData} />
      </main>
    </div>
  );
}

export default Container;
