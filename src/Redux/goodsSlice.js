import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
   goods:[],
}

export const goodsSlice = createSlice({
  name: "goods",
  initialState: initialState ,
  reducers: {
   setGoods (state,action) {
    state.goods = action.payload;
    },
  },
})
export const {setGoods} = goodsSlice.actions

export default goodsSlice.reducer