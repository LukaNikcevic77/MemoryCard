import React, { useState, useEffect } from 'react'
import './App.css'
import { MemoryCard } from '../components/MemoryCard'

function App() {
 
  const[idarray, setIdArray] = useState([1,2,3,4,5]);
  const[wonRounds, setWonRounds] = useState(0);

  function Randomize(){
    const newArray = idarray.map(() => Math.floor(Math.random() * 5) + 1);
      setIdArray(newArray);
  }
  function WinWin(){
    setWonRounds(wonRounds + 1);
  }
 
  return (
    <>
    <h1>You won: {wonRounds} times</h1>
    <div className='myGrid'>
    <MemoryCard color='green' id={idarray[0]}  key={1} onBeingPressed = {Randomize} onWin={WinWin}/>
    <MemoryCard color='black' id={idarray[1]}  key={2} onBeingPressed = {Randomize}  onWin={WinWin}/>
    <MemoryCard color='red'   id={idarray[2]}    key={3} onBeingPressed = {Randomize}  onWin={WinWin}/>
    <MemoryCard color='yellow' id={idarray[3]} key={4} onBeingPressed = {Randomize}  onWin={WinWin}/>
    <MemoryCard color='purple' id={idarray[4]} key={5} onBeingPressed = {Randomize}  onWin={WinWin}/>
    </div>
    </>
  )
}

export default App
