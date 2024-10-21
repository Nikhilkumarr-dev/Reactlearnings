import './App.css'
import { useState,useEffect } from 'react';
function App()
{ 
  return 
  <div>
      <Timer />
  </div>
}

const Timer = () =>
{
  const [seconds,setSeconds]=useState(0);

  useEffect(()=>{
    let clock = setInterval(function(){
      setSeconds(prev=>prev+1);
    },1000)
    

    //cleanup function

    return function()
    {
      clearInterval(clock);
    }
    //unsubscribing from the event and clearing it mers

  },[])

  return <div>{seconds}seconds elapsed</div>
}
export default App;
