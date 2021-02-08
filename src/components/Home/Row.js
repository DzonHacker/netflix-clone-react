import { useEffect, useState } from "react"
import requests from '../../config/tmdb'
import './css/Row.css'

const Row = (props) => {
    const tmdb = "https://api.themoviedb.org/3"
    const [movieData, setMovieData] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const url = `${tmdb}${props.fetchUrl}`
            const request = await fetch(url)
            const response = await request.json()
            setMovieData(response.results)
        }
        fetchData(props.fetchUrl)
    },[props.fetchUrl])

    return (
        <section className="row">
            <h1 className="row__title">{props.title}</h1>
            <div className="row__contents">
                {movieData.map(movie=>{
                   return( 
                        ((props.isLargeRow && movie.backdrop_path)||
                        (!props.isLargeRow && movie.poster_path)) && (
                            <img className="row__image" 
                            key={movie?.id} 
                            src={`${requests.imageFetch}${ props.isLargeRow ? movie.backdrop_path: movie.poster_path}`}>    
                            </img>
                        )
                    )
                })}
            </div>
        </section>
    )
}

export default Row