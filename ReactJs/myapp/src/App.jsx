import City from "./components/City"
import Contactcard from "./components/Contactcard"
import Employee from "./components/Employee"
import Employeedata from "./components/Employeedata"
import Introduction from "./components/Introduction"
import Productcard from "./components/Productcard"
import Shoppingcart from "./components/Shoppingcart"
import Student from "./components/Student"
import Weather from "./components/Weather"
import Zomato from "./components/Zomato"
function App(){
  var name = "Hiteshi"
  return(
    <>
    <h1 style={{color:"aqua" , backgroundColor:"purple", borderRadius:"44%", textAlign:"center"}}>My first project , Welcome {name}!!!</h1>
    <Introduction/>
    <Introduction/>
    <Employee ename ="Satish chopra" joinyear ="2021" department ="Full Stack"/>
    <Employee ename ="Arti Sharma" joinyear ="2023" department ="Data Analyst"/>
    <Employee ename ="Vipin arora" joinyear ="2019" department ="HR"/>
    <hr />
    <h2 style={{ backgroundColor:"pink", textAlign:"center", textDecoration:"underline"}}>SHOPPING CART</h2>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Srno</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <Shoppingcart srno="1" name="Lays" price="40" quantity="2"/>
        <Shoppingcart srno="2"name="Pepsi" price="40" quantity="2"/>
      </tbody>
    </table>
    <hr />
    <h2 style={{ backgroundColor:"pink", textAlign:"center", textDecoration:"underline"}} >PRODUCT CARD</h2>
    <div className="d-flex justify-content-evenly">
        <Productcard name="HP Laptop" price="80000" description="This is Laptop"/>
        <Productcard name="Samsung  A14" price="18000" description="This is Mobile"/>
        <Productcard name="ipad" price="70000" description="this is Tab"/>
      </div>
    <hr />
    <h2 style={{ backgroundColor:"pink", textAlign:"center", textDecoration:"underline"}}>CONTACT CARD</h2>
    <div className="d-flex justify-content-evenly">
      <Contactcard name="Priya" phoneno="1216827199" email="priya1@gmail.com"/>
      <Contactcard name="Ritika" phoneno="9826447623" email="ritika4@gmail.com"/>
      <Contactcard name="Taniya" phoneno="6783298945" email="taniya7@gmail.com"/>
      <Contactcard name="Ridhi" phoneno="9911168945" email="ridhi8@gmail.com"/>
    </div>
    <hr />
    <h2 style={{ backgroundColor:"pink", textAlign:"center", textDecoration:"underline"}}>WEATHER CARD</h2>
    <div className="d-flex justify-content-evenly">
      <Weather city="Raipur" temperature="26°C" humidity="85%" weathercon="Rainy"/>
      <Weather city="Banglore" temperature="23°C" humidity="85%" weathercon="Cloudy"/>
      <Weather city="Kerala" temperature="26°C" humidity="88%" weathercon="Cloudy"/>
    </div>
    <City/>
    <h2 style={{ backgroundColor:"darkorchid", color:"white", textAlign:"center", textDecoration:"underline"}}>STUDENT DATA</h2>
    <Student/>
    <hr />
    <h2 style={{ backgroundColor:"darkorchid", color:"white",textAlign:"center", textDecoration:"underline"}}>EMPOLYEE DATA </h2>
    <div className="d-flex justify-content-evenly">
    <Employeedata/>
    </div>
    <hr />
    <h2 style={{ backgroundColor:"darkorchid", color:"white" , textAlign:"center", textDecoration:"underline"}}>ZOMATO DATA </h2>
    <Zomato/>
    </>
  )
}

export default App