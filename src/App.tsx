import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="container">
        <h1>Welcome to Electron Multi-Framework App</h1>
        <button className="btn" onClick={() => window.open('/src/renderer/react-app/')}>Go to React App</button>
        <button className="btn" onClick={() => window.open('/src/renderer/vue-app/')}>Go to Vue App</button>
        <button className="btn" onClick={() => window.open('/src/renderer/svelte-app/')}>Go to Svelte App</button>
      </div>
    </>
  )
}

export default App
