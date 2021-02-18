function BasketItem(props) {
    const {
        id,
        name,
        price,
        index,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <span className="count-wrap">
                    <i className="material-icons" onClick={() => decQuantity(id, index)}>indeterminate_check_box</i>
                    {price * quantity} $ 
                    <i className="material-icons" onClick={() => incQuantity(id)}>add_box</i> 
                </span>
            </td>
            <td><i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>close</i></td>
        </tr>
    )
}

export {BasketItem};