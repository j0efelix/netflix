import React, { useEffect, useState } from 'react'
import axios from "./axios";
import "./Row.css"


const imgUrl = "https://image.tmdb.org/t/p/original";


function Row({title, fetchUrl, isLarge}) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
              {movies.map((movie)=>{
                  return(<img 
                    className={`row__poster ${isLarge && "row__posterLarge"}`}
                    src={`${imgUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                  />)
              })}
            </div>
        </div>
    )
}

export default Row;
