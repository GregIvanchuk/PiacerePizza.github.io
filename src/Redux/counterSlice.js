import { createSlice } from '@reduxjs/toolkit';
export const initialState ={
    value:0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState ,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer