import React from "react";
import styles from "./Header.module.css"
import { useSelector,useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import Search from "./Search";
import  { useContext } from 'react';
function Header () { 
  const cartTotalPrice = useSelector(state => state.cart.cartTotalPrice)
  const cartItems = useSelector(state => state.cart.cartItems)
return(
    <header className={styles.header}>
         <div className={styles.header_left}>
           <img src="/images/logo.png" alt="logo" />
           <div className={styles.title}>
             <h3>Piacere Pizza</h3>
             <span>тобі личить зайве</span>
           </div>
        </div>
        <Search/>
        <div className={styles.header_rigth}>
          <Link to="/cart"><div className={styles.cart_button} >
            <span>{cartTotalPrice} $</span>
            <div className={styles.line_between}></div>
            <div  className={styles.inner_cart_button} > 
                    <img height={16} width={16} src="images/cart.png" alt="cart" />
                    <span>{cartItems.length}</span>
            </div>
          </div>
          </Link>
        </div>
      </header>
         )}
     export default Header;