import React from "react";

function MovieCard({
  movieObj,
  posterpath,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function isContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[180px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${posterpath})`,
      }}
    >
      {isContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemoveFromWatchlist(movieObj);
          }}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-xl bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddtoWatchlist(movieObj);
          }}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-xl bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 ">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
