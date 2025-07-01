import Item from "./Item.jsx";
function Shoppingcart({items}){
    return(
        <table border={"2px"} cellPadding={"5px"}>
            <thead>
            <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        serial={item.serial}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Shoppingcart