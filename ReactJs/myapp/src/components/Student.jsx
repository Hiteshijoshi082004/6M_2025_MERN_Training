export default Student
function Student(){
    let data =[
        {name:"Priya" , class:"12th A", Rollno:"23"}, 
        {name:"Diksha", class:"12th B", Rollno:"12"},
        {name:"Pranjal", class:"12th A", Rollno:"45"},
        {name:"Kartik", class:"12th C", Rollno:"32"},
        {name:"Mohit", class:"12th B",Rollno:"44"},
        {name:"Vishal", class:"12th C",Rollno:"06s"} 
    ]
    return(
        <>
        <table className="table table-bordered table-warning">
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Roll No</th>
                </tr>
            </thead>
            <tbody>
                {data.map((el,index)=>(
                    <tr key={index}>
                        <td>{index+1}.</td>
                        <td>{el.name}</td>
                        <td>{el.class}</td>
                        <td>{el.Rollno}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}