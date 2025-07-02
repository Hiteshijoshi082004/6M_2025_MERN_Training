import "./Weather.css"
export default Weather
function Weather({city,temperature,humidity,weathercon}){
    return(
        <div className="card2">
            <h2>{city}</h2>
            <h3>{temperature}</h3>
            <h6>{humidity}</h6>
            <p>{weathercon}</p>
        </div>
    )
}