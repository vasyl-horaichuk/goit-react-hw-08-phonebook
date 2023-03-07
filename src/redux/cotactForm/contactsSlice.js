import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operation';
import useContacts from '../../components/user.contacts.json';
const contactsInitState = [...useContacts];
const extraActions = [fetchContacts, addContact, deleteContact, editContact];
const getActions = type => extraActions.map(action => action[type]);
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsInitState,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.find(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.find(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});
export const contactsReducer = contactsSlice.reducer;
