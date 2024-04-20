import React from "react";
import "./common.css";

const Movie = ({ movie }) => {
  const handleOnClick = () => {};
  return (
    <div className="movie_container" onClick={handleOnClick}>
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
