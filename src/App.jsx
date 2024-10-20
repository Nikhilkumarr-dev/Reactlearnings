import './App.css'
import { PostComponent } from './post';
import { useState } from 'react';
function App()
{
  let [count,setCount]=useState(1);

  function add()
  {
    setCount(count+1)
  }

  function remove()
  {
    setCount(count-1);

  }

  return (
  <div style={{display:"flex"}}>
      <div style={{background:"red",borderRadius:20,widhth:20,height:25,paddingLeft:10,paddingRight:10,paddingTop:5,marginLeft:12}}
      >
      {count}
      </div>
    <div>
      <img src={"https://cdn2.iconfinder.com/data/icons/linkedin-ui-flat/48/LinkedIn_UI-06-512.png"} width={50}/> 
      <div><button onClick={add}>MyNetwork</button></div>
      <div><button onClick={remove}>Delete</button></div>
    </div>
  </div>
  )
}
export default App
