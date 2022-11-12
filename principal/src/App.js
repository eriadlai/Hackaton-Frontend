<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React from "react";
import BarraSuperior from "./components/BarraSuperior";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import PostIdea from "./pages/PostIdea";
import MenuCategoria from "./components/MenuCategorias";
import TextoListaMateriales from "./components/TextoListaMateriales";
function App() {
  return (
    <>
      <PostIdea />
    </>
>>>>>>> Stashed changes
  );
}

export default App;
