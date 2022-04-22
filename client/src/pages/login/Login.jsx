import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='Login'>
      <h1>Login</h1>
      <div className='form'>
        <label>Username</label>
        <input type={'text'}></input>
        <label>Password</label>
        <input type={'password'}></input>
      </div>
    </div>
  )
}
