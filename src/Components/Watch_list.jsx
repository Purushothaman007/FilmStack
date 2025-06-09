import React from "react";
import { useState, useEffect } from "react";
import genreids from "../Utility/genre";
function Watch_list({ watchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(["All Genres"]);
  const [current_genre, setCurrent_gernre] = useState("All Genres");

  let handlsearch = () => {
    setSearch(document.querySelector("input").value);
  };

  let delete_watchlist = (movieObj) => {
    let tempWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(tempWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(tempWatchlist));
    console.log("Watchlist updated", tempWatchlist);
  };

  let handlefilter = (genre) => {
    setCurrent_gernre(genre);
  };

  let sort = () => {
    let sortedwatchlist = watchlist.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchlist([...sortedwatchlist]);
    console.log(watchlist);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp= [...new Set(temp)];
    setGenre(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genre.map((genreName) => {
          return (
            <div key={genreName}
              onClick={() => {
                handlefilter(genreName);
              }}
              className={
                current_genre === genreName
                  ? "flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold items-center mx-4"
                  : "flex justify-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold items-center mx-4"
              }
            >
              {genreName}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4 ">
        <input
          onInput={handlsearch}
          type="text"
          placeholder="search movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 rounded-xl "
        />
      </div>

      <div className=" rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-600 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex flex-row gap-2">
                  <div>Ratings</div>
                  <div onClick={sort}>
                    <i className="fa-solid fa-arrows-up-down"></i>
                  </div>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.
            filter((movieObj)=>{
              if (current_genre === "All Genres") {
                return true;
              } else {
                return genreids[movieObj.genre_ids[0]] === current_genre;
              }
            })
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex item-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[8rem]"
                        src={`https://image.tmdb.org/t/p/w500/${movieObj.backdrop_path}`}
                        alt="movie poster"
                      />
                      <div className="mx-20 my-9">
                        {movieObj.original_title}
                      </div>
                    </td>

                    <td>{movieObj.vote_average}</td>

                    <td>{movieObj.popularity.toFixed(2)}</td>

                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td onClick={()=>{delete_watchlist(movieObj)}} className=" hover:cursor-pointer hover:text-red-500">
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watch_list;
