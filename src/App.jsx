import './App.css'
import { useState,useEffect } from 'react';
function App()
{
  const [count,setCount]=useState(0);
  
  function increaseCount()
  {
    setCount(currentValue=>currentValue+1);
  }

  useEffect(function()
  {
    console.log("above set interval");
    //this below is the sideeffect
    setInterval(increaseCount,1000);  
  },[])

  //if we want to use state variable in useeffect we add the state in the depenency array

  return (
  <div >
      {count}
  </div>
  )
}
export default App;
