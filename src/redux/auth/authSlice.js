import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

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
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.token = '';
      state.isLoggedIn = false;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      // state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
