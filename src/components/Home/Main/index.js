import Good from "./Good";
import styles from "./Main.module.css"
import React from "react";
import { useEffect } from "react";
import axios from 'axios';
import MyLoader from "./Good/PizzaBlock";
function Main () {
    // const goods = [
    //     {img:"/images/im1.jpg", title: "Папероні",       price:"23" , id : 1, sizes:[26,30,40], type : [0,1]},
    //     {img:"/images/im2.jpg", title: "Сирна",          price:"21" , id : 2, sizes:[26,30],    type : [0]},
    //     {img:"/images/im3.jpg", title: "Азіатська",      price:"32" , id : 3, sizes:[26,30,40], type : [1]},
    //     {img:"/images/im4.jpg", title: "Ананас з куркою",price:"17" , id : 4, sizes:[26,30,40], type : [0,1]},
    //     {img:"/images/im1.jpg", title: "Маргарита",      price:"40" , id : 5, sizes:[30,40],    type : [0,1]},
    //     {img:"/images/im2.jpg", title: "Українська",     price:"20" , id : 6, sizes:[26,30,40], type : [0]},
    //     {img:"/images/im3.jpg", title: "Неополітанська", price:"19" , id : 7, sizes:[26,40],    type : [0,1]},
    //     {img:"/images/im4.jpg", title: "Чізбургер-піца", price:"14" , id : 7, sizes:[26],       type : [0,1]},
    // ]
     
    const [goods,setGoods] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
     useEffect(() => {
    fetch("http://localhost:3001/goods")
    .then((resp) => {
     return (resp.json())
    })
    .then((arr) => {
      console.log(arr);
      setTimeout(()=>{
      setGoods(arr);
      setIsLoading(false);
    },1000)
    })      
    //   async function fetchData() {
    // const Responceobj = await axios.get("http://localhost:3001/goods");
    // setGoods(Responceobj.data);
    // console.log(goods);
    //   }
    //   fetchData();
   },[])
    
    const categories = ["Всі","Вегатиріанські","М'ясні","Гострі","Гриль","Закриті"]
    const sortList = ["популярності","ціні","алфавіту"]
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isVisiblePopup,setIsVisiblePopup] = React.useState(false);
    const [selected,seSelected] = React.useState(0)
    let onCatSort = () =>{
      setIsVisiblePopup(!isVisiblePopup);
    }
return(
    <main className={styles.main}>
        <div className={styles.categorios}>
          <nav>
            <ul className={styles.catItems}>
{categories.map((value,i) => <li key={i} onClick={()=>setActiveIndex(i)}  className={activeIndex == i ? styles.active : styles.catItem}>{value}</li>)}
            </ul>
          </nav>
          <div onClick={onCatSort} className={styles.sort}>
            <div className={styles.sort_label}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
          </svg>
            <span className={styles.sortBy}>Сортування по: </span>
            <span className={styles.sortByItem}> {sortList.map((value,i) =>  selected == i ? value : "")}</span>
          </div>
          {isVisiblePopup ?
          <div className={styles.sort_popup}>
               <ul>
               {sortList.map((value,i) => <li className = {selected == i ? styles.activeSelected : styles.selected} onClick={() => seSelected(i)} key={value}>{value}</li>)}
                </ul>    
          </div>
          : ""}
          </div>
         </div>
        <h1>{categories.map((value,i) => activeIndex == i ? value: "")}</h1>
        <div className={styles.Items}>
        {isLoading ? [...Array(8)].map((_ , index) => <MyLoader key={index}/>):
        goods.map((item,index)=><Good isLoading={isLoading} key={index} {...item}/>)}
       </div>
      </main>
       )}
     export default Main;