import Introduction from "./components/Introduction"
function App(){
  var name = "Hiteshi"
  return(
    <>
    <h1 style={{color:"aqua" , backgroundColor:"purple", borderRadius:"44%", textAlign:"center"}}>My first project , Welcome {name}!!!</h1>
    <Introduction/>
    <Introduction/>
    </>
  )
}

export default App