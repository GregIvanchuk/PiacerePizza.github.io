import { createSlice } from '@reduxjs/toolkit';
export const initialState ={
   cartItems: [],
   count:0,
   cartTotalPrice:0,
}
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState ,
  reducers: {
      increment: (state) => {
        state.count += 1
      },
      decrement: (state) => {
        state.count -= 1
      },
   addCartItems (state,action) {
      state.cartItems.push(action.payload);
      state.cartTotalPrice = state.cartItems.reduce((sum,obj) => {
         return  +obj.price + sum ;
         },0)
    },
    },
    removeItem(state,action) {
        state.cartItems = state.cartItems.filter((obj) => (obj.id !== action.payload))
        state.cartTotalPrice = state.cartItems.reduce((sum,obj) => {
            return  +obj.price + sum ;
            },0)
   },
   clearItems(state) {
    state.cartItems = [];
  },
})
export const {addCartItems, removeItem, clearItems,increment,decrement } = cartSlice.actions
export default cartSlice.reducer