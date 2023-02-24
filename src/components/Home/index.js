import styles from "./Home.module.css"
import Main from "./Main";
import {Link} from "react-router-dom";
function Home () {
return(
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
          <Link to="/cart"><div className={styles.cart_button} >
            <span>34 $</span>
            <div className={styles.line_between}></div>
            <div  className={styles.inner_cart_button} > 
                    <img height={16} width={16} src="images/cart.png" alt="cart" />
                    <span>3</span>
            </div>
          </div>
          </Link>
        </div>
      </header>
        <Main/>
      <footer className={styles.footer}></footer>
      </div>
       )}
     export default Home;