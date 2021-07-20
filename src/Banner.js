import React, { useEffect, useState } from 'react'
import requests from './request';
import axios from './axios';
import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchDate(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            const movieLength = request.data.results.length;
            setMovie(request.data.results[Math.round(Math.random() * movieLength - 1)])
            return request;
        }
        fetchDate();
    },[]);

    function trancate(str,n){
        return str?.length > n ? str.substr(0, n-1) + " ..." : str
    }

    return (
        <div>
            <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
                    )`,
                backgroundPosition: "center center",
            }}
            >
                <div className="banner__contents">
                    <h3 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h3>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <div className="banner__description">
                        <p>{trancate(movie?.overview, 150)}</p>
                    </div>
                </div>
                <div className="banner--fade"></div>
            </header>
        </div>
    )
}

export default Banner
