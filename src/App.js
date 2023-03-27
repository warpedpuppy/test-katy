import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [ connected, setConnected ] = useState(false);
  const [ connected2, setConnected2 ] = useState(false);
  const [ connected3, setConnected3 ] = useState(false)
  const [ connected4, setConnected4 ] = useState(false)

  const url = 'https://vercel-test-jet-iota.vercel.app';
  useEffect(() => {

	fetch(url)
	.then(res => res.json())
	.then(res => { if (res.success) setConnected(true)})
	.catch(e => console.error('error'))

	fetch(`${url}`, {method: "POST"})
	.then(res => res.json())
	.then(res => {console.log(res); if (res.success) setConnected2(true)})
	.catch(e => console.error('error'))

	fetch(`${url}`, {method: "PUT"})
	.then(res => res.json())
	.then(res => {console.log(res); if (res.success) setConnected3(true)})
	.catch(e => console.error('error'))

	fetch(`${url}`, {method: "DELETE"})
	.then(res => res.json())
	.then(res => {console.log(res);if (res.success) setConnected4(true)})
	.catch(e => console.error('error'))


  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         { connected ? "connected to vercel!" : "not connected to vercel."}
        </p>
		<p>
         { connected2 ? "connected to post vercel!" : "not connected to post vercel."}
        </p>
		<p>
         { connected3 ? "connected to put vercel!" : "not connected to put vercel."}
        </p>
		<p>
         { connected4 ? "connected to delete vercel!" : "not connected to delete vercel."}
        </p>
        
      </header>
    </div>
  );
}

export default App;
