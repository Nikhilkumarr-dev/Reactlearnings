import './App.css'
function App(){ 
  
  //prop are passed as children 
  return( 
    <div>
      <Card>
          <h2>Card Title</h2>
          <p>This is some content inside the card.</p>
      </Card>
      <Card>
          <h2>Another Card</h2>
          <p>This card has different content!</p>
          <input type={"text"}/>
          <br></br>
          <button>input</button>
      </Card>
    </div>
  );
}


//this is the children cards this two cards are rendered in the entire page
function Card({children})
{
  return (
    <div style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        margin: '10px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    }}>
        {children}
    </div>
);
}


export default App;
