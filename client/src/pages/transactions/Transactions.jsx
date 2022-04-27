import React, { useState } from 'react';
import axios from 'axios';

export default function Transactions() {

  const [amount, setAmount] = useState(0);
  const [pin, setPin] = useState(0);
  const [type, setType] = useState(0);
  const [showAc, setShowAc] = useState(false);
  const [sender, setSender] = useState(0);
  const [receiver, setReceiver] = useState(0);

  const submit = async ()=>{
    console.log(showAc);
    axios.post("http://localhost:8000/api/transaction",{
      "sender": sender,
      "type": type,
      "amount": amount,
      "receiver": receiver,
      "pin": pin
    }).then(()=>{
      console.log("Transaction Successful!");
      alert("Transaction Successful!")
      setReceiver(null);
      setAmount(null);
      setPin(null);
    });
  }

  return (
    <div className='trasactions'>
      <h1 id='headerTitle'>Banking</h1>
      <div className='form'>
        <div className='row'>
          <label className='label1'>Sender's Account No</label>
          <input type={'text'} onChange={(e)=>{
            setSender(e.target.value) 
          }}></input>
        </div>
        <div className='row'>
          <select value={type} onChange={(e)=>{
              setType(e.target.value)
              if(e.target.value==='Transfer') setShowAc(true);
              else setShowAc(false);
              }}>
            <option>Deposit</option>
            <option>Withdraw</option>
            <option>Transfer</option>
          </select>
        </div>
        <div className='row'>
          <label className='label1'>Amount</label>
          <input type={'text'} onChange={(e)=>{
          setAmount(e.target.value) 
          }}></input>
        </div>
        {
          showAc &&
          <div className='row'>
            <label className='label1'>Receiver's Account No</label>
            <input type={'text'} onChange={(e)=>{
              setReceiver(e.target.value) 
          }}></input>
        </div>
        }
        <div className='row'>
          <label className='label1' id='lbl'>Pin</label>
          <input type={'password'} onChange={(e)=>{
          setPin(e.target.value)
          }}></input>
        </div>
        <div id='button' className='row'>
          <button onClick={submit}>Login</button>
        </div>
        
      </div>
    </div>
  )
}
