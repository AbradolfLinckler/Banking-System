import React, { useState } from 'react';
import axios from 'axios';

export default function Transactions() {

  const [amount, setAmount] = useState(0);
  const [pin, setPin] = useState(0);
  const [type, setType] = useState("Deposit");
  const [showAc, setShowAc] = useState(false);
  const [sender, setSender] = useState(null);
  const [receiver, setReceiver] = useState(0);
  const [wp, setWp] = useState(false);
  const [ib, setIb] =useState(false);

  const submit = async ()=>{
    setWp(false);
    setIb(false);
    console.log(showAc);
    axios.post("http://localhost:8000/api/transaction",{
      "sender": sender,
      "type": type,
      "amount": amount,
      "receiver": receiver,
      "pin": pin
    }).then((res)=>{
      console.log(res.data);
      if(res.data==='Wrong Pin') setWp(true);
      else if(res.data==='Insufficient Bal') setIb(true);
      else {
        console.log("Transaction Successful!");
        alert("Transaction Successful!")}
    });
  }

  return (
    <div className='trasactions' id='loginform'>
      <h1 id='headerTitle'>Banking</h1>
      <div className='form'>
        <div className='row'>
          <label className='label1'>Sender's Account No</label>
          <input type={'text'} value={sender} onChange={(e)=>{
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
          {ib && <p>*Insufficient Balance</p>}
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
          {wp && <p className='error'>*Wrong Pin</p>}
        </div>
        <div id='button' className='row'>
          <button onClick={submit}>Submit</button>
        </div>
        
      </div>
    </div>
  )
}
