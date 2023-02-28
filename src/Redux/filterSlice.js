import { createSlice } from '@reduxjs/toolkit';
export const initialState ={
    catId:0,
}

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState ,
  reducers: {
   getCatId (state,action) {
      state.catId = action.payload
    },
  },
})
export const {getCatId} = filterSlice.actions

export default filterSlice.reducer