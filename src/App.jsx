import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Watch_list from "./Components/Watch_list";
import Banner from "./Components/Banner";
import "./App.css";
import { useState,useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchlist] = useState([]);
  let [banner,setBanner]=useState({
  name:"Spider man: No Way Home",poster_path: "https://m.media-amazon.com/images/S/pv-target-images/a5a2d5703727ac5aa4b8c0399a046b62993da6271e0c3d8776340ce0fc7627b1.jpg"
})

  let handleAddtoWatchlist = (movieObj) => {
    let tempWatchlist = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(tempWatchlist));
    setWatchlist(tempWatchlist);
    console.log("Watchlist updated", tempWatchlist);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let tempWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem('moviesApp', JSON.stringify(tempWatchlist));
    setWatchlist(tempWatchlist);
    console.log("Watchlist updated", tempWatchlist);
  };

  useEffect(()=>{
    let data = localStorage.getItem('moviesApp');
    if (!data) {
     return  
    }
    setWatchlist(JSON.parse(data));
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner banner={banner} />
                <Movies
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlist={watchlist}
                  setBanner={setBanner}
                />
              </>
            }
          />
          <Route path="watchlist" element={<Watch_list watchlist={watchlist} setWatchlist={setWatchlist}/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
