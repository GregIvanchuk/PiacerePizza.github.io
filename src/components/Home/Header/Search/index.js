import React, {useContext} from "react";
import styles from "./Search.module.css"
import { useSelector,useDispatch } from "react-redux";
import {setInputValue} from "../../../../Redux/searchSlice";
function Search () { 
    const dispatch = useDispatch();
   const inputValue = useSelector(state => state.search.inputValue)
return(
    <div className={styles.search}>
        <input onChange={(event) => dispatch(setInputValue(event.target.value))} value={ inputValue} placeholder="пошук..." type="text" />
    </div>  
         )}
     export default Search;