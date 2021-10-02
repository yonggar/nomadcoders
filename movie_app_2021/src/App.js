import React, { useEffect } from "react";
import {useState} from 'react'

function App() {
  const [count,setCount]=useState(0)
  const [isLoding,setLoding]=useState(true)

  function minus(num) {
    return setCount(num-1)
  }

  useEffect(()=>{
    setLoding(false)
    console.log('마운트 될 때만')
  },[count])

  return (
  <div>
    <div>{isLoding ? 'Loding...':'we are ready'}</div>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>plus</button>
    <button onClick={()=>minus(count)}>minus</button>
  </div>
  );
}

export default App;
