import styles from './Cart.module.css';
import EmptyCart from './EmptyCart';
import FullCart from './FullCart';
import Counter  from '../Counter';
import { useSelector,useDispatch } from "react-redux";
function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
        <>
        <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_left}>
          <img src="/images/logo.png" alt="logo" />
          <div className={styles.title}>
          <h3>Piacere Pizza</h3>
          <span>тобі личить зайве</span>
          </div>
        </div>
        <div className={styles.header_rigth}>
        </div>
      </header>
      {(cartItems.length != 0) ?
      <FullCart/> :
       <EmptyCart/>
    }
      {/* <Counter/> */}
      </div> 

</>
  );
}

export default Cart;
