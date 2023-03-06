import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    filter: filterReducer,
  },
});
