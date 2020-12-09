import React, {useState, useEffect} from 'react'
import axios from "./axios"

const baseURL = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])
    // console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">  
            {movies.map(movie => (
                <img className="row__poster" src={`${baseURL}${movie.poster_path}`} alt={movie.name}/>
            ))}
            </div>
            {/* constainer -- > posters */}

        </div>
    )
}

export default Row
