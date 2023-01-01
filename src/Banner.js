import React, { useEffect, useState } from "react";
import "./Banner.css";
function Banner() {
  const [arr, setArr] = useState({banner : [], overView : ""});

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string
  }
  useEffect(()=>{
    const fetchData = async () => {
      var response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=2c4cb1294e2af8a0e3d35e7c181e5c6f&with_networks=213"
      );
      var { results } = await response.json();
      var generateRandom = parseInt(Math.random() * results.length - 1);                                
      setArr({ ...arr, overView: truncate(results[generateRandom].overview, 150), banner: results[generateRandom] })
    }
    var t  = setTimeout(()=>{
      fetchData();
    }, 10)
    return ()=>clearTimeout(t);
  }, [])     

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${arr.banner.backdrop_path && arr.banner.backdrop_path}")`,
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {arr.banner.name}   
          </h1>
          <div className="banner__button">
            <button className="banner__button">Play</button>
            <button className="banner__button">MyList</button>
          </div>
          <h1 className="banner__description">{arr.overView}</h1>
        </div>
        <div className="banner--fadebutton" ></div>
      </header>
    </>
  );
}

export default Banner;
