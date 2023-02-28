import styles from "./Good.module.css";
import { useState } from "react";
import {addCartItems} from "../../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
function Good({id,img,title,price,sizes,type,isLoading}) {
    const [pizzaCount,setPizzaCount] = useState(0);
    const nameTypes = ["тонкі","традиційні"];
    const [activeType , setActiveType] = useState(0);
    const [activeSize , setActiveSize] = useState(0);
    const dispatch = useDispatch(); 
    const addCartItem = (obj) =>{
        console.log(obj);
        dispatch(addCartItems(obj));
        setPizzaCount(pizzaCount + 1);
    }
    return (
            <div className={styles.Item}>
                <img src={img} alt="item" />
                <h3>{title}</h3>
                <div className={styles.select_option}>
                    <ul className={styles.types}>
                    {type.map((value,i) => <li key={i}  onClick={()=>{setActiveType(i)}} className={activeType == i ? styles.activeType : "" }>{nameTypes[value]}</li> )}
                    </ul>
                    <ul className={styles.sizes}>
                      {sizes.map((value,i) =>  <li key={i} onClick={()=>{setActiveSize(i)}} className={activeSize == i ? styles.activeSize : "" } >{value}см</li> )}
                    </ul>
                </div>
                <div className={styles.item_footer}>
                    <span>від {price} $</span>
                    <button onClick={()=>addCartItem({id,img,title,price})}>+ Добавити <i>{pizzaCount}</i></button>
                </div>
            </div>
    );
}
export default Good;
