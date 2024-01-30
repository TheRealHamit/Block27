import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

const API_URL = "https://fsa-jwt-practice.herokuapp.com"

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
    <SignUpForm API_URL={API_URL} token={token} setToken={setToken}/>
    <Authenticate API_URL={API_URL} token={token} setToken={setToken}/>
    </>
  )
}

export default App
