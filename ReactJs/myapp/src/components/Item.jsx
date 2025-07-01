function Item({serial,name,price,quantity}){
    return(
        <tr>
            <td>{serial}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>
    )
}

export default Item