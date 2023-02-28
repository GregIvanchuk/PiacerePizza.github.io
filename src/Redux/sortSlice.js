import { createSlice } from '@reduxjs/toolkit';
export const initialState ={
    selected:0,
    isVisiblePopup : false,
}

export const sortSlice = createSlice({
  name: "sort",
  initialState: initialState ,
  reducers: {
    setSelected (state,action) {
        state.selected = action.payload
      },
      setIsVisiblePopup (state,action) {
        state.isVisiblePopup = action.payload
      },
  },
})
export const {setSelected, setIsVisiblePopup} = sortSlice.actions

export default sortSlice.reducer