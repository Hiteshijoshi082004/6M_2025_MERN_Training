import "./Productcard.css"
export default Productcard
function Productcard({name,price,description}){
    return(
        <div className="card">
            <h1>{name}</h1>
            <div>{price}</div>
            <p>{description}</p>

        </div>
    )
}
