import styles from "./FramedCart.module.css";
import {Link} from "react-router-dom";
function FramedCart() {
    return (
        <div className={styles.drawer}>
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
      <main className={styles.epmty_info}>
        <div className={styles.empty_title}>
          <h2>Ваше замовлення прийнято !</h2>
        </div>
        <span>Очікуйте свій товар в найближчому відділенні нової пошти</span>
        <img className={styles.frimg} height={260} width={200} src="/images/framed.png"/>
        <Link to="/">
        <button>Повернутися назад</button>
        </Link>
      </main>
      </div>
    );
}
export default FramedCart;
