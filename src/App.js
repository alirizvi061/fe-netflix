import React from "react";
import Row from "./Row"

import './App.css';
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1> Netflix Clone Front End</h1>

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
