import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <h1>Welcome to Electron Multi-Framework App</h1>
      <button className="btn" onClick={() => window.location.href='/src/renderer/react-app/'}>Go to React App</button>
      <button className="btn" onClick={() => window.location.href='/src/renderer/vue-app/'}>Go to Vue App</button>
      <button className="btn" onClick={() => window.location.href='/src/renderer/angular-app/'}>Go to Angular App</button>
      <button className="btn" onClick={() => window.location.href='/src/renderer/svelte-app/'}>Go to Svelte App</button>
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
