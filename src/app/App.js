import React from "react";
import "./App.css";
import Routes from "../routes";
import fetch from "node-fetch";
import Unsplash from "unsplash-js";

global.fetch = fetch;
export const UNSPLASH = new Unsplash({
  accessKey: process.env.REACT_APP_APP_ACCESS_KEY,
});

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
