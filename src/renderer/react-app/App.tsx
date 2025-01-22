import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl">Hello, Electron with React!</h1>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App