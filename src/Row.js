import React, {useState, useEffect} from 'react'
import axios from "./axios"
import AXIOS from "axios"
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const API_KEY = "34bafb36b895e1cc03e6abd128816c70"

const baseURL = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        // console.log(movie)

        AXIOS.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=videos`)
            .then((res)=>{
                console.log(res.data.videos.results.map(video => console.log(video)))

            })
        

        // if (trailerUrl) {
        //     setTrailerUrl("");
        //     console.log(trailerUrl, "is empty")
        // } else {
        //     movieTrailer(movie?.name || "")
        //     .then(url => {
        //         console.log(url)
        //         const urlParams = new URLSearchParams(new URL(url).search);
        //         setTrailerUrl(urlParams.get('v'));
        //         console.log(trailerUrl, "is full")
        //     }).catch(error => console.log(error))
        // }

    }



    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">  

            {movies.map((movie) => (
                <img 
                key={movie.id}
                onClick = {() => handleClick(movie)}
                className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}/>
            ))}
            </div>
            {trailerUrl && < Youtube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row
