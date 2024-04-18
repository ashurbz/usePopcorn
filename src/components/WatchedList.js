import React from "react";
import "./common.css";
import WatchedData from "./WatchedData";
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watchedMovie }) => {
  return (
    <div className="watchedmovie_container">
      <div className="cross">+</div>
      <div>
        <WatchedData />
      </div>
      <div>
        {watchedMovie.map((watchedMovie) => {
          return (
            <WatchedMovie
              watchedMovie={watchedMovie}
              key={watchedMovie.imdbID}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WatchedList;
