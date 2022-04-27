import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

export default function Login() {

  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");

  
  const submit = async ()=>{
    console.log("button pressed");
    axios.post("http://localhost:8000/api/insert",{"bcode": 123,"bname": username, "badd": password}).then(()=>{
      alert("Successful request!");
    })
  }

  const register=()=>{
    
  }

  return (
    <div className='Login' id='loginform'>
      <h1 id='headerTitle'>Login</h1>
      <div className='form'>
        <div className='row'>
          <label>Username</label>
          <input type={'text'} onChange={(e)=>{
          setUserName(e.target.value) 
          }}></input>
        </div>
        <div className='row'>
          <label>Password</label>
          <input type={'password'} onChange={(e)=>{
          setPassword(e.target.value)
          }}></input>
        </div>
        <div id='button' className='row'>
          <button onClick={submit}>Login</button>
        </div>
        <div id='button' className='row'>
          <button onClick={register}>Register</button>
        </div>
        
      </div>
    </div>
  )
}
