import styles from "./EmptyCart.module.css";
import {Link} from "react-router-dom";
function EmptyCart() {
    return (
        <>
      <main className={styles.epmty_info}>
        <div className={styles.empty_title}>
          <h2>Корзина порожня</h2>
          <img height={32} width={32} src="/images/smile.svg"/>
        </div>
        <span>Скоріш за все ви ще не замовляли піцу.</span>
        <span> Для здійснення замовлення перейдіть на головну сторінку</span>
        <img height={260} width={280} src="/images/epmty.jfif" />
        <Link to="/">
        <button>Повернутися назад</button>
        </Link>
      </main>
     </>
    );
}
export default EmptyCart;
