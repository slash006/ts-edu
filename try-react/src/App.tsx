import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter, Link} from "react-router";
import {Routes, Route} from "react-router-dom";
import World from "./components/World";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <BrowserRouter>

          <Link to="/">Home</Link>
          <Link to="/world">Hello world</Link>


          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/world" Component={World} />
          </Routes>
        </BrowserRouter>


      </header>
    </div>
  );
}

export default App;
