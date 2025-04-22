import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlayersList from './components/PlayerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Player Directory</h1>
      </header>
      <main>
        <PlayersList />
      </main>
      <footer className="text-center py-3 mt-4 bg-light">
        <p>&copy; {new Date().getFullYear()} Player Directory</p>
      </footer>
    </div>
  );
}

export default App;