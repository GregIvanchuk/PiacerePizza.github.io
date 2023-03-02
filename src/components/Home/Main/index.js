import Good from "./Good";
import styles from "./Main.module.css"
import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCatId } from "../../../Redux/filterSlice";
import {setSelected  } from "../../../Redux/sortSlice";
import {setGoods} from "../../../Redux/goodsSlice";
import axios from 'axios';
import MyLoader from "./Good/PizzaBlock";
import Categor from "./Categor";
import Sort from "./Sort";
import MyContext from "../../../MyContext";
function Main ({}) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(true);
    const inputValued =  useSelector((state) => state.search.inputValue)
     useEffect(() => {
    fetch("https://be42-188-191-238-40.eu.ngrok.io/goods")
    .then((resp) => {
     return (resp.json())
    })
    .then((arr) => {
      dispatch(setGoods(arr));
      setIsLoading(false);
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
    const goods = useSelector((state) => state.goods.goods)
    const catId = useSelector((state) => state.filter.catId)
    const selected = useSelector((state) => state.sort.selected)
//     const dbt = [
//       {"img":"/images/im1.jpg", "title": "Папероні",       "price":"23" , "id" : 1, "sizes":[26,30,40], "type" : [0,1],"category" : 1,"rating":8},                                                            
//       {"img":"/images/im2.jpg", "title": "Сирна",          "price":"21" , "id" : 2, "sizes":[26,30],    "type" : [0],  "category" : 1,"rating":3},
//       {"img":"/images/im3.jpg", "title": "Азіатська",      "price":"32" , "id" : 3, "sizes":[26,30,40], "type" : [1],  "category" : 3,"rating":6},
//       {"img":"/images/im4.jpg", "title": "Ананас з куркою","price":"17" , "id" : 4, "sizes":[26,30,40], "type" : [0,1],"category" : 1,"rating":2},
//       {"img":"/images/im1.jpg", "title": "Маргарита",      "price":"40" , "id" : 5, "sizes":[30,40],    "type" : [0,1],"category" : 2,"rating":6},
//       {"img":"/images/im2.jpg", "title": "Українська",     "price":"20" , "id" : 6, "sizes":[26,30,40], "type" : [0],  "category" : 2,"rating":5},
//       {"img":"/images/im3.jpg", "title": "Неополітанська", "price":"19" , "id" : 7, "sizes":[26,40],    "type" : [0,1],"category" : 4,"rating":4},
//       {"img":"/images/im4.jpg", "title": "Чізбургер-піца", "price":"14" , "id" : 8, "sizes":[26],       "type" : [0,1],"category" : 5,"rating":1}

// ]
    let  sortArr = (arr) => {
      return (
    (selected == 2) ? arr.sort((a, b) => a.title.localeCompare(b.title)):
    (selected == 1)? arr.sort((a, b) => a.price - b.price): arr.sort((a, b) => b.rating - a.rating)
    )
  }
console.log(selected)
console.log(catId)
    const filtredGoods = goods.filter((item) =>
    item.title.toLowerCase().includes(inputValued.toLowerCase())
         ) 
return(
    <main className={styles.main}>
      <div className={styles.categorios}>
       <Categor categories ={categories} catId={catId} OnclickCatIndex={(id) => dispatch(getCatId(id))}/>
       <Sort sortList={sortList} selected={selected} OnclickSortIndex={(id) => dispatch(setSelected(id))}/>
       </div>
        <h1>{categories.map((value,i) => catId === i ? value: "")}</h1>
    {  inputValued ? 
    <div className={styles.Items1}>
      {isLoading ? [...Array(8)].map((_ , index) => <MyLoader key={index}/>):
      (catId == 0) ? 
      filtredGoods.map((item,index) => <Good  isLoading={isLoading} key={index} {...item}/>):
      filtredGoods.filter((obj => (obj.category === catId)))
    .map((item,index)=> <Good isLoading={isLoading} key={index} {...item}/>)} 
    </div>
    :
    <div className={styles.Items2}>
    {isLoading ? [...Array(8)].map((_ , index) => <MyLoader key={index}/>):
      (catId == 0) ? 
      goods.map((item,index)=><Good isLoading={isLoading} key={index} {...item}/>):
    goods.filter((obj => (obj.category === catId)))
    .map((item,index)=><Good isLoading={isLoading} key={index} {...item}/>)}
    </div>
    }
      </main>
       )}
     export default Main;