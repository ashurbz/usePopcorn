import React from "react";
import "./common.css";

const WatchedMovie = ({ watchedMovie, onDelete }) => {
  const handleOnClick = () => {
    return onDelete(watchedMovie.imdbID);
  };

  return (
    <div className="watchmovie_container">
      <div>
        <img
          src={watchedMovie.Poster}
          alt="movie img"
          width="100px"
          height="100px"
        />
      </div>
      <div className="details_container">
        <div>
          <div>{watchedMovie.Title}</div>
        </div>
        <div>
          <div>{` ⭐ ${watchedMovie.imdbRating}`}</div>
          <div>{` 🌟 ${watchedMovie.userRating}`}</div>
          <div>{` ⏳ ${watchedMovie.runtime} mins`}</div>
        </div>
        <button
          style={{
            padding: "10px",
            margin: "20px",
            width: "40%",
            fontSize: "x-large",
            cursor: "pointer",
            border: "2px solid red",
            borderRadius: "10px",
          }}
          onClick={handleOnClick}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default WatchedMovie;
