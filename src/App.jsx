import './App.css'
function App(){ 
  
  //prop are passed as children 
  return( 
  <div style={{display:"flex"}}>
    
     <Card>
      <div style={{color:"green"}}>
        What do you want to post <br></br>
        <input type={"text"} />
      </div>
      </Card>
      <Card>
        Hiii therer friends.....
      </Card>
  </div>
  );
}


//this is the children cards this two cards are rendered in the entire page
function Card({children})
{

  return (<div style={{backgroundColor:"black",borderRadius:"23px",color:"white",padding:10,margin:10}}>

  {children}

  </div>);
}


export default App;
