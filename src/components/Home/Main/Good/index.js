import styles from "./Good.module.css";
import {addCartItems,increment} from "../../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import {useState} from "react";
function Good({id,img,title,price,sizes,type,typeid,isLoading,}) {
    const cartItems  = useSelector(state => state.cart.cartItems)
    const cartItem   = useSelector (state => state.cart.cartItems.find((obj) => obj.id === id   ))
    const addedCount = cartItem ?  cartItem.count : 0; 
    const [activeType , setActiveType] = useState(0);
    const [activeSize , setActiveSize] = useState(0);
    const dispatch  = useDispatch(); 
    const addCartItem = (obj) =>{
        dispatch(addCartItems(obj));
    }
    return (
            <div className={styles.Item}>
                <img src={img} alt="item" />
                <h3>{title}</h3>
                <div className={styles.select_option}>
                    <ul className={styles.types}>
                    {type.map((value,i) => <li key={i}  onClick={()=>{setActiveType(i)}} className={activeType == i ? styles.activeType : "" }>{value}</li> )}
                    </ul>
                    <ul className={styles.sizes}>
                      {sizes.map((value,i) =>  <li key={i} onClick={()=>{setActiveSize(i)}} className={activeSize == i ? styles.activeSize : "" } >{value}см</li> )}
                    </ul>
                </div>
                <div className={styles.item_footer}>
                    <span>{price[activeType][activeSize]} $</span>
                    <button onClick={()=>addCartItem({id,img,title,typeid: typeid[activeType], price : price[activeType][activeSize] ,type : type[activeType], sizes : sizes[activeSize] })}>+ Додати </button>
                </div>
            </div>
    );
}
export default Good;
