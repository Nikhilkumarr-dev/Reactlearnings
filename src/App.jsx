import './App.css'
function App(){ 
  return(
    <div>
      {
        [
          <Todo key={1} title={"go to gym"} done={false} />,<Todo key={2} title={"eat food"} done={false} />
        ]
      }
    </div>
  )
  
}

function Todo({title,done})
{
  return <div>
    {title} - {done ? "Done!":" Not done"}
  </div>
}
export default App;
