import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from '../components/Preloader';
import {GoodsList} from './GoodsList';
import {Cart} from './Cart';
import {BasketList} from './BasketList';
import {Alert} from './Alert'

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
           setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }

        setAlertName(item.name);
    };

    const removeFromBasket = (itemId) => {
        const filteredOrder = order.filter(el => el.id !== itemId);
        setOrder(filteredOrder);
    }

    const incQuantity = (itemId) => {
        const updatedQuantity = order.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else {
                return item;
            }
        })

        setOrder(updatedQuantity);
    };

    const decQuantity = (itemId, itemIndex) => {
        const updatedQuantity = order.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            } else {
                return item;
            }
        })
        
        if (updatedQuantity[itemIndex].quantity === 0) {
            removeFromBasket(itemId);
        } else {
            setOrder(updatedQuantity);
        }
    };

    const closeAlert = () => {
         setAlertName('');
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(responce => responce.json())
        .then(data => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        })
    }, []);
    
    return (
        <main className="container content">
            <Cart 
                quantity={order.length} 
                handleBasketShow={handleBasketShow}
            />

            {
                !loading ? 
                <GoodsList goods={goods} addToBasket={addToBasket}/> 
                : <Preloader/>
            }
            
            { isBasketShow && 
                <BasketList 
                    order={order} 
                    handleBasketShow={handleBasketShow} 
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert} />
            }
        </main>
    )
}

export {Shop};