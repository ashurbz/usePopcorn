import React, { useState } from "react";
import "./common.css";
import Movie from "./Movie";

const MovieList = ({ movieData }) => {
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
              return <Movie movie={movie} key={movie.imdbID} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
