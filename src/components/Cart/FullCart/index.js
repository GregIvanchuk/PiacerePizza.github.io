import styles from './FullCart.module.css';
import Item from './Items';
import { useSelector,useDispatch } from "react-redux";
import {clearItems} from "../../../Redux/cartSlice";
import {Link} from "react-router-dom";
function FullCart() {
  const cartItems = useSelector(state => state.cart.cartItems)
  const cartTotalPrice = useSelector(state => state.cart.cartTotalPrice)
  const dispatch = useDispatch();
  return (
        <>
      <main>
        <div className={styles.cart}>
        <div className={styles.head} >
        <div className={styles.title_cart}>
        <img width={30} height={30} src="images/cart2.png" alt="cart" />
        <h1>Кошик</h1>
       </div>
       <div onClick={() => dispatch(clearItems())} className={styles.delete_cart}>
        <img width={16} height={16} src="images/trashBasket.png" alt="trash" />
        <span>Oчистити кошик</span>
         </div>
         </div>
        <div className={styles.cart_content}>
            <div className={styles.cart_items}>

            {cartItems.map((item,index)=><Item key={item.id} id={item.id}  img={item.img} title={item.title} price={item.price} count={item.count} />)}
            </div>
            <div className={styles.cart_footer}>
              <div className={styles.total_info}>
                 <div className={styles.total_count}>Всього піц: <span>{cartItems.length} шт.</span></div>
                 <div className={styles.total_price} >Сума замовлення: <span>{cartTotalPrice} $</span></div>
              </div>
              <div className={styles.cart_buts}>
                 <Link to="/"><button className={styles.c_back}>Повернутися назад</button></Link>
                 <button className={styles.buy}>Оплатити зараз</button>
              </div>
            </div>
        </div>
        </div>
      </main>
</>
  );
}

export default FullCart;
