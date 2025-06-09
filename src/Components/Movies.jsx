import React from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";
import { useState, useEffect } from "react";

function Movies({handleAddtoWatchlist,handleRemoveFromWatchlist,watchlist,setBanner}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);


  const handlePrev=()=>{
    if(pageNo==1)
    {
      setPageNo(1)
    }
    else
    {
      setPageNo(pageNo-1)
    }
    
  }

  const handleNext=()=>{
    setPageNo(pageNo+1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3e97aa8c1c44f2e3fdb70156a3828a4c&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
        let new_banner={
          name: res.data.results[2].original_title,
          poster_path: `https://image.tmdb.org/t/p/original/${res.data.results[2].backdrop_path}`,
        };
        setBanner(new_banner);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around m-8 gap-5">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              movieObj={movieObj}
              key={movieObj.id}
              posterpath={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>

      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movies;
