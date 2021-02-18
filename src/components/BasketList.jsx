import {BasketItem} from './BasketItem';

function BasketList(props) {
    const {
        order,
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                Корзина
                <span className="secondary-content">
                    <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>   
                </span>
            </li>

            {
                order.length ? 
                    <div style={{padding: '0 20px'}}>
                        <table className="highlight centered">
                            <thead>
                                <tr>
                                    <th>Назва товару</th>
                                    <th>Кількість</th>
                                    <th>Ціна</th>
                                    <th>Дії</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    order.map((item, index) => {
                                        return <BasketItem 
                                            {...item}
                                            key={item.id} 
                                            index={index}
                                            removeFromBasket={removeFromBasket} 
                                            incQuantity={incQuantity}
                                            decQuantity={decQuantity}
                                        />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    : <li className="collection-item">Корзина пуста </li>
            }
            <li className="collection-item active">
                Загальна вартість: {totalPrice} $
            </li>
            <li className="collection-item right">
                <button className="btn-small">Оформити</button>
            </li>
        </ul>
    )
}

export {BasketList}