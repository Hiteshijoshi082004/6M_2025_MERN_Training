export default City
function City(){
    let city =["jalandhar","mohali","banglore"]
    let data=[
        {name:"Food Bazar",rating:4,address:"Central Town"},
        {name:"Macdonalds",rating:3,address:"BMC Chowk"}
    ]
    return(
        <>
        {city.map((el,index)=>(
            <h1>{index+1}. {el}</h1>
        ))}
        <hr />
        <table className="table table-bordered">
            <thead>
                <tr>
                    <td>Sno</td>
                    <td>name</td>
                    <td>rating</td>
                    <td>address</td>
                </tr>
            </thead>
            <tbody>
                {data.map((el,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{el.name}</td>
                        <td>{el.rating}</td>
                        <td>{el.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}