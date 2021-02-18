import {GoodsItem} from './GoodsItem';

function GoodsList(props) {
    const {
        goods = [], 
        addToBasket = Function.prototype
    } = props;
    return (
        <div>
            <div className="goods-list"> 
                { goods.length ? 
                 goods.map(goodsItem => <GoodsItem key={goodsItem.id} {...goodsItem} addToBasket={addToBasket}/>)
                : <h4>Товарів не знайдено...</h4>}
            </div>
        </div>
    )
}

export {GoodsList};