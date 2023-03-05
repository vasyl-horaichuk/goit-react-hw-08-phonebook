import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: filterInitialState,
  // Об'єкт редюсерів
  reducers: {
    setFilterValue(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
