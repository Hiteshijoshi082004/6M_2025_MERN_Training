export default Shoppingcart
function Shoppingcart(props){
    return(
        <tr>
            <td>{props.srno}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
        </tr>
    )
}