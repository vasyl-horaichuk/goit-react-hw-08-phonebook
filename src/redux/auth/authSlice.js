import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

//  logIn, logOut, refreshUser;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    return builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
  },
});

export const authReducer = authSlice.reducer;
