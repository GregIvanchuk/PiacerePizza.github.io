import React from "react";
import styles from "./Categor.module.css"
function Categor ({activeIndex,OnclickCatIndex,categories}) { 
    const sortList = ["популярності","ціні","алфавіту"]
    const [isVisiblePopup,setIsVisiblePopup] = React.useState(false);
    const [selected,seSelected] = React.useState(0)
return(
    <>
    <nav className={styles.catNav}>
      <ul className={styles.catItems}>
{categories.map((value,i) => <li key={i} onClick={()=>OnclickCatIndex(i)}  className={activeIndex == i ? styles.active : styles.catItem}>{value}</li>)}
      </ul>
    </nav>
       </>
         )}
     export default Categor;