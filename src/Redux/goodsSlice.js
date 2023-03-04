import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
   goods:[],
   activeType:0,
   activeSize:0,
   selected:0,
   isVisiblePopup : false,
}

export const goodsSlice = createSlice({
  name: "goods",
  initialState: initialState ,
  reducers: {
    setSelected (state,action) {
      state.selected = action.payload
    },
    setIsVisiblePopup (state,action) {
      state.isVisiblePopup = action.payload
    },
   setGoods (state,action) {
    const sort = (state.selected == 2) ? action.payload.sort((a, b) => a.title.localeCompare(b.title)):
    (state.selected == 1)? action.payload.sort((a, b) => a.price - b.price): action.payload.sort((a, b) => b.rating - a.rating)
    state.goods = sort ;
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
export const {setGoods, setActiveSize,setActiveType,setSelected, setIsVisiblePopup } = goodsSlice.actions

export default goodsSlice.reducer