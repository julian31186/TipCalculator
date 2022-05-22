import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { idText } from 'typescript';

function App() {

const[amount, setAmount] = useState(0)
const[tip , setTip] = useState(0)
const[prevTip, setprevTip] = useState(0)

const calcTip = (num:number) => {
  setTip(Math.round((amount * num) * 100) / 100)
}

const roundUp = () => {
   setprevTip(tip)
   setTip(Math.ceil(tip))
}

const setPrevTip = () => {
  setTip(prevTip)
}


const isChecked = (e:any) => {
  if(e.target.checked) {
    roundUp()
  } else {
    setPrevTip()
  }
} 


  return (
    <div  className="App">

      <div>

      <h1  style={{ fontSize:60}}>Tip Calculator</h1>
      
     <label style={{ fontSize:35}}>$</label><input style={{ fontSize:30}} onChange={(e : any) => setAmount(e.target.value)} type="number" placeholder = "Enter tip amount"></input>
      
      <button style={{ fontSize:30}} onClick={ () => calcTip(.1)}>10%</button>
      <button style={{ fontSize:30}} onClick={ () => calcTip(.15)}>15%</button>
      <button style={{ fontSize:30}} onClick={ () => calcTip(.18)}>18%</button> 
      <button style={{ fontSize:30}} onClick={ () => calcTip(.2)}>20%</button>
      
      <p style={{ fontSize:35}} >Your tip is ${tip}</p>

      <input onClick={ (e) => isChecked(e)} style={{height: '30px', width : '30px'}} type="checkbox"></input>
      <label style={{ fontSize:35}}>Round Up</label>
      



      </div>
      
    </div>
  );
}

export default App;
