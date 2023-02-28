import styles from './Item.module.css';
import {removeItem,increment,decrement} from "../../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
function Item({id,img,price,title}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems)
  const count = useSelector(state => state.cart.count)
  return (
            <div className={styles.cart_item}>
              <div className={styles.descr}>
              <img width={80} height={80} src={img} alt="" />
              <div className={styles.title_inner_cart}>
                <h3>{title}</h3>
                <span>тонке тісто, 6см</span>
              </div>
              </div>
              <div className={styles.cart_item_rigth}>
              <div className={styles.count}>
                <img onClick={()=> dispatch(decrement())}  width={29} height={29} src="images/minusGood.png" alt="" />
                <span>{count}</span>
                <img onClick={()=> dispatch(increment())}  width={32} height={32} src="images/addGood.png" alt="" />
              </div>
              <div className={styles.price}>{price} $</div>
              </div>
              <img onClick={() => dispatch(removeItem(id))} className={styles.del_cart} width={30} height={30} src="images/delGood.png" alt="" />
            </div>

  );
}
export default Item;
