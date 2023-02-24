import Good from "./Good";
import styles from "./Main.module.css"
import React from "react";
import { useEffect } from "react";
import axios from 'axios';
import MyLoader from "./Good/PizzaBlock";
import Categor from "./Categor";
import Sort from "./Sort";
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
    const sortList = ["популярності","ціні","алфавіту"];
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isVisiblePopup,setIsVisiblePopup] = React.useState(false);
    const [selected,seSelected] = React.useState(0)
    const sortArr = (arr) =>{
      if (selected == 0) return arr.sort();
      else if (selected == 1) return arr.sort((a, b) => a.price - b.price)
      else if (selected == 2) return arr.sort((a, b) => b.rating - a.rating)
    }
    const goods1 = sortArr(goods);
return(
    <main className={styles.main}>
      <div className={styles.categorios}>
       <Categor categories ={categories} activeIndex={activeIndex} OnclickCatIndex={(id) => setActiveIndex(id)}/>
       <Sort sortList={sortList} selected={selected} OnclickSortIndex={(id) => seSelected(id)}/>
       </div>
        <h1>{categories.map((value,i) => activeIndex == i ? value: "")}</h1> 
        <div className={styles.Items}>
        {isLoading ? [...Array(8)].map((_ , index) => <MyLoader key={index}/>):
         (activeIndex == 0) ? goods1.map((item,index)=><Good isLoading={isLoading} key={index} {...item}/>):
        goods1.filter((obj => (obj.category == activeIndex)))
        .map((item,index)=><Good isLoading={isLoading} key={index} {...item}/>)}
       </div>
      </main>
       )}
     export default Main;