import React from "react";
import {useState} from 'react'

function App() {
  const [count,setCount]=useState(0)

  function minus(num) {
    return setCount(num-1)
  }
  return (
  <div>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>plus</button>
    <button onClick={()=>minus(count)}>minus</button>
  </div>
  );
}

export default App;
