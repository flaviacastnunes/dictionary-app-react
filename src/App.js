import React from "react";
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <main>
            <Dictionary />
            
          </main>
          
        </div>
      </header>
      <footer>Coded by Flávia Nunes, with <a href="https://github.com/flaviacastnunes/dictionary-app-react" target="_blank" rel="noreferrer noopener">open source code on GitHub.</a></footer>

    </div>
  );
}

export default App;
