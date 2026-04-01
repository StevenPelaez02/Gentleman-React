import { useState } from 'react'
import './App.css'
import { Button } from './components'

class UseState {
  value: any;

  getValue() {
    return this.value;
  }

  setValue(newValue: any) {
    this.value = newValue;
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alan')
  
  const countMore = () => {
  setCount((count) => count + 1)
  setCount((count) => count + 1)
  setCount((count) => count + 1)
  setCount((count) => count + 1)
  setCount((count) => count + 1)
  setCount((count) => count + 1)
  setCount((count) => count + 1)
  setCount((count) => count + 1)
  setCount((count) => count + 1)
  }

  const changeName = () => {
  setName('Bob')
  }

  return (
    <>
      <Button label={`Count: ${count}`} parentMethod={countMore} />
      <p>{ name }</p>
      <Button label={`Count: ${count}`} parentMethod={changeName} />
    </>
  )
}

export default App
