import styles from './Cart.module.css';
import EmptyCart from './EmptyCart';
import FullCart from './FullCart';
function Cart() {
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
      {/* <FullCart/>  */}
      <EmptyCart/>
      </div> 

</>
  );
}

export default Cart;
