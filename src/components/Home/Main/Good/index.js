import styles from "./Good.module.css";
import { useState } from "react";
function Good({img,title,price,sizes,type,isLoading}) {
    const [pizzaCount,setPizzaCount] = useState(0);
    const nameTypes = ["тонкі","традиційні"];
    const [activeType , setActiveType] = useState(0);
    const [activeSize , setActiveSize] = useState(0);
    const addCount = () =>{
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
                    <button onClick={addCount}>+ Добавити <i>{pizzaCount}</i></button>
                </div>
            </div>
    );
}
export default Good;
