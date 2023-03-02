import { createSlice } from '@reduxjs/toolkit';
export const initialState ={
   cartItems: [],
   totalCount:0,
   cartTotalPrice:0,
}
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState ,
  reducers: {
     increment (state,action) {
        state.cartItems.find((obj) => obj.id === action.payload.id && obj.price === action.payload.price ).count++;
        state.totalCount =  state.cartItems.reduce((current,prev)=> current + prev.count,0)
        state.cartTotalPrice = state.cartItems.reduce((sum,obj) => {
          return  Number(((obj.price*obj.count) + sum).toFixed(2)); ;
          },0)
},
  decrement (state,action) {
    const uniq = state.cartItems.find((obj) => obj.id === action.payload.id && obj.price === action.payload.price)
    if  (uniq.count !== 1)  uniq.count--;
    state.totalCount =  state.cartItems.reduce((current,prev)=> current + prev.count,0)
    state.cartTotalPrice = state.cartItems.reduce((sum,obj) => {
      return  Number(((obj.price*obj.count) + sum).toFixed(2));
      },0)
      },  
   addCartItems (state,action) {
      // state.cartItems.push(action.payload)
    const uniq = state.cartItems.find((obj) => obj.id === action.payload.id && obj.price === action.payload.price && obj.typeid === action.payload.typeid  )
      if(uniq) {
          uniq.count++;
      }
      else {
        state.cartItems.push({
          ...action.payload,
          count:1,
        })
      }
      state.totalCount =  state.cartItems.reduce((current,prev)=> current + prev.count,0)
      state.cartTotalPrice = state.cartItems.reduce((sum,obj) => {
        return  (obj.price*obj.count) + sum ;
        },0)
    },
    removeItem(state,action) {
        state.cartItems = state.cartItems.filter((obj) => (obj.id != action.payload.id || obj.price !== action.payload.price ))
        state.totalCount =  state.cartItems.reduce((current,prev)=> current + prev.count,0)
        state.cartTotalPrice = state.cartItems.reduce((sum,obj) => {
          return  +obj.price + sum ;
          },0)
   },
   clearItems(state) {
    state.cartItems = [];
    state.totalCount = 0;
    state.cartTotalPrice = 0;
  },
}})
export const {addCartItems, removeItem, clearItems,increment,decrement } = cartSlice.actions
export default cartSlice.reducer