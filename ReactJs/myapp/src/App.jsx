import Employee from "./components/Employee"
import Introduction from "./components/Introduction"
import Shoppingcart from "./components/Shoppingcart"
function App(){
  var name = "Hiteshi"
  const cartItems = [
    {serial:1,name:"Laptop", price:"80000", quantity:1},
    {serial:2,name:"Sling Bag", price:"650", quantity:1}
  ]
  return(
    <>
    <h1 style={{color:"aqua" , backgroundColor:"purple", borderRadius:"44%", textAlign:"center"}}>My first project , Welcome {name}!!!</h1>
    <Introduction/>
    <Introduction/>
    <Employee ename ="Satish chopra" joinyear ="2021" department ="Full Stack"/>
    <Employee ename ="Arti Sharma" joinyear ="2023" department ="Data Analyst"/>
    <Employee ename ="Vipin arora" joinyear ="2019" department ="HR"/>
    <hr />
    {/* Shopping Cart */}
    <h2>Shopping Cart</h2>
    <Shoppingcart items ={cartItems}/>
    <hr />

    </>
  )
}

export default App