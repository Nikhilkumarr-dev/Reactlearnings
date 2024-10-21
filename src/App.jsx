import './App.css'
import { useState,useEffect } from 'react';
function App()
{
  const [currentTab,setCurrentTab]=useState(1)
  const [tabData,setTabData]=useState({});
  const [loading,setLoading]=useState(true);

  useEffect(function(){
    //sending a backend request to get data from this tab
    // console.log("send request to backend to get data for the tab"+currentTab);
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
    .then( async res=>{
      const json =await res.json();
      setTabData(json);
      setLoading(false);
    })
       
  },[currentTab])

  //this is the dependency array this effect runs whenever the dependency changes 
  
  return <div>
    <button  onClick={function()
      {
        setCurrentTab(1);
      }
    }  style={{color: currentTab==1 ? "red":'black'}}>1</button>
    <button onClick={function()
      {
        setCurrentTab(2);
      }
    } 
    style={{color:currentTab== 2 ? "red": "black"}}>2</button>
    <button
    onClick={function()
      {
        setCurrentTab(3);
      }
    }
     style={{color:currentTab==3? "red":"black"}}>3</button>
    <button
     onClick={function()
      {
        setCurrentTab(4);
      }
    }
     style={{color:currentTab==4? "red":"black"}}>4</button>

     <br />

     {loading ? "loading>>>" : tabData.title}
     
  </div>
}
export default App;
