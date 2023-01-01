import React, { useEffect, useState } from 'react'
import { requests, baseURL, base_img_URL } from "./request";
import './Row.css'
function Row({title, fetchURL, isLargePoster}) {
    const [netflixScreen, setNetflixScreen] = useState([]);
    useEffect(()=>{

        try {
            var fetchData = async () => {
                var response = await fetch(`${fetchURL}`);
                var { results } = await response.json();
                setNetflixScreen(results);
            }
        } catch (error) {
            console.error(error)
        }
        fetchData();
    }, []);

    return (

        <div className={isLargePoster?"largeRow":"row"}>
        <h3>{title}</h3>
        <div className='row_posters'>
            {netflixScreen.map((items)=>{
                return(
                    <>
                            <img className={`row_poster ${isLargePoster && "row_LargePoster"}`}
                            key={items.id}
                            src={`${base_img_URL}${isLargePoster ? items.poster_path : items.backdrop_path}`} alt={items.title ? items.title : items.original_name}></img>
                    </>
                        )
            })}
        </div>
    </div>
  )
}

export default Row