import React from "react";
import Row from "./Row"

import './App.css';
import requests from "./requests";

function App() {
  console.log(requests)
  return (
    <div className="App">
      <h1> Netflix Clone Front End</h1>

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>

    </div>
  );
}

export default App;
