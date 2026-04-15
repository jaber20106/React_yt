import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState({user: 'jaber',age: 25})
  const [arr, setArr] = useState([1,2,3,4,5])
  const [num, setNum] = useState(10)

  // Object Update
  const btnClick = () => {
    setCount(prev =>({...prev, age:50}))
  }

  //Batch Update
  const vtnClick = () => {
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
  }
  // Array Update
  const arClick = () => {
    setArr(prev => [...prev, 6])
  }

  return (
    <div>
      <h1>{count.user}, {count.age}</h1>
      <h1>{num}</h1>
      <h1>{arr}</h1>
      <button onClick={btnClick}>Click</button>
      <button onClick={vtnClick}>Click</button>
      <button onClick={arClick}>Click</button>
    </div>
  )
}

export default App