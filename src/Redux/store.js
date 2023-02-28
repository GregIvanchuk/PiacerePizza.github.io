import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import filterReducer from './filterSlice'
import sortReducer from './sortSlice'
import searchReducer from './searchSlice'
import goodsReducer from './goodsSlice'
import cartReducer from './cartSlice'
export const store = configureStore({
  reducer: {
    counter:counterReducer, 
    filter:filterReducer,
    goods:goodsReducer,
    sort : sortReducer,
    cart: cartReducer,
    search:searchReducer,
  },
})
