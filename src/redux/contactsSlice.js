// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operation';
// import useContacts from '.././components/user.contacts.json';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
// const contactsInitialItems = [useContacts];

// const contactsInitialState = {
//   items: contactsInitialItems,
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: {
//     //fetchContacts
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.playload;
//     },
//     [fetchContacts.rejected]: handleRejected,

//     //addContacts
//     [addContact.pending]: handlePending,
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addContact.rejected]: handleRejected,

//     //deleteContacts
//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteContact.rejected]: handleRejected,
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';
import useContacts from '.././components/user.contacts.json';
const contactsInitState = [...useContacts];
const extraActions = [fetchContacts, addContact, deleteContact];
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
