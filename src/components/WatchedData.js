import React from "react";

import "./common.css";

const WatchedData = ({ watchedMovie }) => {
  const totalMovie = watchedMovie.length;
  const userRatingAvg = watchedMovie.reduce((acc, curr) => {
    return (acc.userRating + curr.userRating) / watchedMovie.length;
  });

  const imdbAvg = watchedMovie.reduce((acc, curr) => {
    return (acc.imdbRating + curr.imdbRating) / watchedMovie.length;
  });

  const runtimeAvg = watchedMovie.reduce((acc, curr) => {
    return (acc.runtime + curr.runtime) / watchedMovie.length;
  });

  return (
    <div className="watchedData_container">
      <div>
        <p>Movies You Watched (Average)</p>
      </div>
      <div>
        <div className="average">
          <span>{`🔢 ${totalMovie}`}</span>
          <span>{`🌟 ${userRatingAvg}`}</span>
          <span>{`⭐ ${imdbAvg}`}</span>
          <span>{`⏳ ${runtimeAvg} mins`}</span>
        </div>
      </div>
    </div>
  );
};

export default WatchedData;
