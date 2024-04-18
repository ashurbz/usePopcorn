import React from "react";
import "./common.css";

const Movie = ({ movie }) => {
  return (
    <div className="movie_container">
      <div>
        <img
          src={movie.Poster}
          alt="movie poster"
          height="100px"
          width="100px"
        />
      </div>
      <div>
        <div>{movie.Title}</div>
        <div>{movie.Year}</div>
      </div>
    </div>
  );
};

export default Movie;
