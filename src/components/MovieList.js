import React from "react";
import "./common.css";
import Movie from "./Movie";

const MovieList = ({ movieData }) => {
  console.log(movieData);
  return (
    <div>
      <div className="movieList_container">
        <div className="cross">+</div>
        <div>
          {movieData.map((movie) => {
            return <Movie movie={movie} key={movie.imdbID} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
