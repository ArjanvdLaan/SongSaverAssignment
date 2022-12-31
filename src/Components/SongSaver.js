import React, { useState } from "react";
import "../CSS/SongSaver.css";

function SongSaver({
  onSongAdd,
  onSortArtist,
  onSortRating,
  onFilterGenre,
  onFilterRating,
}) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const onSubmit = () => {
    if (title.length > 0 && artist.length > 0) {
      console.log(
        `Submitting ${title}, ${artist}, ${selectedGenre}, ${selectedRating}`
      );
      onSongAdd(title, artist, selectedGenre, selectedRating);
      setTitle("");
      setArtist("");
      setSelectedGenre("");
      setSelectedRating("");
    }
  };
  const onRefresh = () => {
    window.location.reload(false);
  };

  return (
    <div className="songsaver">
      <div className="input">
        <input
          className="input-width"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          placeholder="title"
        />
      </div>
      <div className="input">
        <input
          className="input-width"
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          id="artist"
          name="artist"
          placeholder="artist"
        />
      </div>
      <div className="input">
        <select
          className="input-width"
          id="genre"
          name="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option disabled value="">
            genre
          </option>
          <option value="rock">rock</option>
          <option value="pop">pop</option>
          <option value="jazz">jazz</option>
        </select>
      </div>
      <div className="input">
        <select
          className="input-width"
          id="rating"
          name="rating"
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          <option value="rating">rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button className="button" onClick={onSubmit} placeholder="Add song">
        Add
      </button>
      <div className="side-options">
        <button className="sortBtn" onClick={onSortArtist}>
          Sort artist A-Z
        </button>
        <button className="sortBtn" onClick={onSortRating}>
          Sort rating 5-1
        </button>
        <select value="" onChange={(e) => onFilterGenre(e.target.value)}>
          <option value="" disabled>
            Filter by genre
          </option>
          <option value="rock">rock</option>
          <option value="pop">pop</option>
          <option value="jazz">jazz</option>
        </select>
        <select value="" onChange={(e) => onFilterRating(e.target.value)}>
          <option value="" disabled>
            Filter by rating
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button
        className="buttonRefresh"
        onClick={onRefresh}
        placeholder="Refresh page"
      >
        Refresh
      </button>
    </div>
  );
}

export default SongSaver;
