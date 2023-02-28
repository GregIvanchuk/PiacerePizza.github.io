import React from "react";
import styles from "./Categor.module.css"
function Categor ({catId,OnclickCatIndex,categories}) { 
return(
    <>
    <nav className={styles.catNav}>
      <ul className={styles.catItems}>
{categories.map((value,i) => <li key={i} onClick={()=>OnclickCatIndex(i)}  className={catId == i ? styles.active : styles.catItem}>{value}</li>)}
      </ul>
    </nav>
       </>
         )}
     export default Categor;