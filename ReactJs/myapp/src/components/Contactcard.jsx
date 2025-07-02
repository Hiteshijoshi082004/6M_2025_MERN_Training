export default Contactcard
function Contactcard({name,phoneno,email}){
    return(
        <>
        <div className="text-center" style={{boxShadow:"0px 0px 30px black", borderRadius:"10px", height:"150px", width:"300px", margin:"10px", backgroundColor:"purple", color:"white"}}>
            <h2>{name}</h2>
            <div>{phoneno}</div>
            <div>{email}</div>
        </div>
        </>
    )
}