import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
   goods:[],
   activeType:0,
   activeSize:0,
}

export const goodsSlice = createSlice({
  name: "goods",
  initialState: initialState ,
  reducers: {
   setGoods (state,action) {
  
    state.goods = action.payload;
    },
    setActiveType (state,action) {
    const uniq = state.goods.find((obj) => obj.id === action.payload )
      state.activeType = action.payload
    },
    setActiveSize (state,action) {
      const uniq = state.goods.find((obj) => obj.id === action.payload )
      console.log(uniq);
      state.activeSize = action.payload
    },
  }, 
})
export const {setGoods, setActiveSize,setActiveType } = goodsSlice.actions

export default goodsSlice.reducer