import React, {useContext} from "react";
import styles from "./Search.module.css"
import { useSelector,useDispatch } from "react-redux";
import {setInputValue} from "../../../../Redux/searchSlice";
function Search () { 
    const dispatch = useDispatch();
   const inputValue = useSelector(state => state.search.inputValue)
return(
    <div className={styles.search}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
  <path fill="none" d="M0 0h24v24H0V0z"/>
  <path d="M15.5 14h-.79l-.28-.27C14.41 12.59 15 11.11 15 9.5 15 5.91 12.09 3 8.5 3S2 5.91 2 9.5 4.91 16 8.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-7 0C5.47 14 3 11.53 3 8.5S5.47 3 8.5 3s5.5 2.47 5.5 5.5S11.53 14 8.5 14z"/>
</svg>
        <input onChange={(event) => dispatch(setInputValue(event.target.value))} value={ inputValue} placeholder="пошук..." type="text" />
    </div>  
         )}
     export default Search;