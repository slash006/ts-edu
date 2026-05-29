import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";

import {BrowserRouter, Link} from "react-router";
import {Routes, Route} from "react-router-dom";
import World from "./components/World";


function App() {

  const [input, setInput] = useState('hello');
  const [username, setUsername] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }


  const fetchUsername = async (username: string) => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {})

    console.debug('response', response);
    if(response.ok) {
      const users = await response.json();
      const user = users.find((usr: { username: any; }) => usr?.username === username)

      console.log(users)
      setUsername(user?.username)

    }

  }

  useEffect(() => {

    const user = fetchUsername("Bret");

  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/*<p>{fetchUsername("Bret")}</p>*/}


        {input}

        <input type={"text"} onChange={onChangeInput} data-testid={"test-input"} id={"test-input"}/>


        {username}

        {/*        <BrowserRouter>

          <Link to="/">Home</Link>
          <Link to="/world">Hello world </Link>



          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/world" Component={World} />
          </Routes>
        </BrowserRouter>*/}


      </header>
    </div>
  );
}

export default App;
