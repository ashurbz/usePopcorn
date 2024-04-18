import React from "react";
import "./common.css";

const WatchedMovie = ({ watchedMovie }) => {
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
      </div>
    </div>
  );
};

export default WatchedMovie;
