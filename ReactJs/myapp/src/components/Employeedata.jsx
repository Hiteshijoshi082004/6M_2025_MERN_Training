import "./Employeedata.css"
export default Employeedata
function Employeedata(){
    let data =[
        {keyname:"Raghav chadha", department:"Data Analytics", salarypermonth:"55000"},
        {keyname:"Shalini Sharma", department:"MERN Stack developer", salarypermonth:"65000"},
        {keyname:"Gurpreet Singh", department:"HR", salarypermonth:"45000"},
        {keyname:"Rahul Mehta", department:"Marketing Head", salarypermonth:"3000"},
        {keyname:"Sonali Thakur", department:"Cyber Security", salarypermonth:"57000"}
    ]
    return(
        <>
        {data.map((el,index)=>(
            <div className="card3" key={index}>
                <h3>{el.keyname}</h3>
                <h3>{el.department}</h3>
                <h4>{el.salarypermonth}</h4>
            </div>
        ))}
        </>
    )
}