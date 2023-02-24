import styles from './FullCart.module.css';
import Item from './Items';
import {Link} from "react-router-dom";
function FullCart() {
  return (
        <>
      <main>
        <div className={styles.cart}>
        <div className={styles.head} >
        <div className={styles.title_cart}>
        <img width={30} height={30} src="images/cart2.png" alt="cart" />
      <h1>Кошик</h1>
       </div>
       <div className={styles.delete_cart}>
        <img width={16} height={16} src="images/trashBasket.png" alt="trash" />
        <span>Oчистити кошик</span>
         </div>
         </div>
        <div className={styles.cart_content}>
            <div className={styles.cart_items}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            </div>
            <div className={styles.cart_footer}>
              <div className={styles.total_info}>
                 <div className={styles.total_count}>Всього піц: <span>3 шт.</span></div>
                 <div className={styles.total_price} >Сума замовлення: <span>387 $</span></div>
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
