import React from 'react'
import { useState } from 'react'

const LoginComponent = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()  // Prevents the default behavior of the form

    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true)
      setError('')
    } else {
      setError('Invalid username or password')
      setIsLoggedIn(false)
    }
  }



  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoggedIn && <p style={{ color: 'green' }}>You are logged in</p>}
    </>
  )
}

export default LoginComponent