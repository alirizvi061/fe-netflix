import React, {useState} from "react";
import Row from "./Row"
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
import SignUp from "./SignUp"
import Login from "./Login"
import Youtube from "react-youtube"
import AXIOS from "axios"
import movieTrailer from "movie-trailer"
import { AuthProvider } from "./Auth.js"


const API_KEY = "34bafb36b895e1cc03e6abd128816c70"


function App() {

const [trailerUrl, setTrailerUrl] = useState("")
const [loggedIn, setLogin] = useState(false)

console.log(loggedIn)

const setUserLogin = () => {
  setLogin(!loggedIn)
  console.log('user now logged in')
}


const handleClick = (movie) => {


  if (trailerUrl) {
      setTrailerUrl("");

  } else {
      movieTrailer(movie?.name || "")
      .then(url => {

          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));

      }).catch(error => console.log(error))
  }
  if (trailerUrl) {
          setTrailerUrl("");
          console.log(trailerUrl, "is empty")
  } else {
      AXIOS.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=videos`)
          .then((res)=>{

              const trailer = res.data.videos.results
              if(trailer.length !== 0) {
                  trailer.map(videos => {
                      setTrailerUrl(videos.key)
                  })
              }
          }).catch(error => console.log(error))
          
  }


}
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
      autoplay: 1,
  }
}

  // console.log(requests)
  return (
    <AuthProvider>
    <Router>
     <div className="app">
        <Navbar
        loggedIn={loggedIn}
        />

        <Banner handleClick={handleClick}/>
        {trailerUrl && < Youtube videoId={trailerUrl} opts={opts} />}

        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>

        <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        
        />

        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> */}


        <Route exact path="/login" 
        component={Login} 
        setUserLogin={setUserLogin}
        loggedIn={loggedIn}
        />

        <Route exact path="/signup" component={SignUp} />
        

      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
