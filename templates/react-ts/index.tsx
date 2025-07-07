import React from 'react'
import ReactDOM from 'react-dom/client'

function App(): JSX.Element {
  return (
    <div className="app">
      <h1>Welcome to {{projectName}}</h1>
      <p>Edit <code>index.tsx</code> and enjoy type-safe React.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
