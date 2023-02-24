import styles from './Item.module.css';
function Item() {
  return (
            <div className={styles.cart_item}>
              <div className={styles.descr}>
              <img width={80} height={80} src="images/im1.jpg" alt="" />
              <div className={styles.title_inner_cart}>
                <h3>Назва піци</h3>
                <span>тонке тісто, 6см</span>
              </div>
              </div>
              <div className={styles.cart_item_rigth}>
              <div className={styles.count}>
                <img width={29} height={29} src="images/minusGood.png" alt="" />
                <span>3</span>
                <img width={32} height={32} src="images/addGood.png" alt="" />
              </div>
              <div className={styles.price}>340 $</div>
              </div>
              <img className={styles.del_cart} width={30} height={30} src="images/delGood.png" alt="" />
            </div>

  );
}
export default Item;
