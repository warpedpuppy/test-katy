import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [ connected, setConnected ] = useState(false)

  useEffect(() => {
	console.log('let us see')
	fetch('https://vercel-test-jet-iota.vercel.app/')
	.then(res => setConnected(true))
	.catch(e => console.error('error'))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         { connected ? "connected!" : "not connected."}
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
  );
}

export default App;
