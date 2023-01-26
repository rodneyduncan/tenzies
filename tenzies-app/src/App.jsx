import { useState } from 'react'
import './App.css'
import Die from './Die'
import {nanoid} from 'nanoid'




function App() {
  const [numbers, setNumbers] = useState(allNewDice())

function allNewDice() {

  let arr = []
  for(let i = 0; i < 10; i++){
    arr.push({
      value: Math.floor(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    })
  }
  console.log(arr)
  return arr
  }

  function rollDice() {
    setNumbers(allNewDice())
  }
  
 
const diceElements = numbers.map(number => 
<Die key={number.id} 
value={number.value} />)
  return (
    <main>
      <div className='die-components'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={()=>rollDice()}>Roll</button>
    </main>
  )
}

export default App;
