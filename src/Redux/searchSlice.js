import { createSlice } from '@reduxjs/toolkit';
export const initialState ={
    inputValue:"",
}
export const searchSlice = createSlice({
  name: "search",
  initialState: initialState ,
  reducers: {
    setInputValue (state,action) {
      state.inputValue = action.payload
    },
  },
})
export const {setInputValue} = searchSlice.actions
export default searchSlice.reducer