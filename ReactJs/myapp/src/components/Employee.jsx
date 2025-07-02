function Employee(props){
    return(
        <>
        <table border="2px" className="table table-bordered">
            <tr>
                <th>Employee Name</th>
                <th>Join year</th>
                <th>Department</th>
            </tr>
            <tr>
                <td>{props.ename}</td>
                <td>{props.joinyear}</td>
                <td>{props.department}</td>
            </tr>
        </table>
        </>
    )
}
export default Employee