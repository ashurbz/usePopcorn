import React, { useState } from "react";
import "./common.css";
import Movie from "./Movie";

const MovieList = ({ movieData, onMovieClick }) => {
  const [isOpenMovieList, setIsOpenMovieList] = useState(true);
  const handleOnClick = () => {
    setIsOpenMovieList(!isOpenMovieList);
  };

  return (
    <div>
      <div className={isOpenMovieList ? "movieList_container" : ""}>
        <div className="cross" onClick={handleOnClick}>
          {isOpenMovieList ? "➖" : "➕"}
        </div>
        {isOpenMovieList && (
          <div>
            {movieData?.map((movie) => {
              return (
                <Movie
                  movie={movie}
                  key={movie.imdbID}
                  onMovieClick={onMovieClick}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
