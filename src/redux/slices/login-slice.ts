import { createSlice } from '@reduxjs/toolkit'

export interface LoginState {
  value: number
}

const initialState: LoginState = {
  value: 0,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
   
    setUser: (state) => {
      state.value -= 1
    }
   
  },
})

// Action creators are generated for each case reducer function
export const {  setUser } = loginSlice.actions

export default loginSlice.reducer