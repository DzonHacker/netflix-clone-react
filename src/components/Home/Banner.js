import { useEffect, useState } from 'react'
import requests from '../../config/tmdb'

import './css/Banner.css'
const Banner = (props) => {
    const tmdb = "https://api.themoviedb.org/3"
    const [movie, setMovie] = useState([])
  

    const parseDesc = (descStr, n) => {
        let desc = ''
        descStr?.length > n ? desc = descStr.substring(0, n-1) + "..." : desc = descStr;
        return desc
    }
    
    useEffect(()=> {
        async function fetchBanner() {
            const url = `${tmdb}${requests.fetchNetflixOriginals}`
            const request = await fetch(url)
            const result = await request.json()
            const rand = Math.floor(Math.random() * result.results.length -1)
            setMovie(result.results[rand])
            
        }
        fetchBanner()
    },[])
    
    const st = {
        backgroundImage: `url(${requests.imageFetch}${movie?.backdrop_path || movie?.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: 'center center'
    }


    
    return (
        <header className="banner" style={st}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__desc">{parseDesc(`${movie?.overview}`, 150)}</h1>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner