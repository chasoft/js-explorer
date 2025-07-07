import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div className="app">
      <h1>Welcome to {{projectName}}</h1>
      <p>Edit <code>index.jsx</code> and save to test React.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
