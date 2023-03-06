import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './cotactForm/contactsSlice';
import { filterReducer } from './cotactForm/filterSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    filter: filterReducer,
  },
});
