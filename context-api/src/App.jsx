import { useState } from 'react'
import Dashboard from './components/Dashboard'
import { UserContext } from '../src/context/userContext'
import './App.css'

function App() {
  const [user, setUser] = useState("Akshay")

  return (
    <>
      <div>
        <UserContext.Provider value={user}>
          <Dashboard />
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
