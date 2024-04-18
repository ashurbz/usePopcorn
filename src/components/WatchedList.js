import React, { useState } from "react";
import "./common.css";
import WatchedData from "./WatchedData";
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watchedMovie }) => {
  const [isOpenWatch, setIsOpenWatch] = useState(true);
  const handleOnCLick = () => {
    setIsOpenWatch(!isOpenWatch);
  };
  return (
    <div className={isOpenWatch ? "watchedmovie_container" : ""}>
      <div className="cross" onClick={handleOnCLick}>
        {isOpenWatch ? "➖" : "➕"}
      </div>
      {isOpenWatch && (
        <>
          <div>
            <WatchedData watchedMovie={watchedMovie} />
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
        </>
      )}
    </div>
  );
};

export default WatchedList;
