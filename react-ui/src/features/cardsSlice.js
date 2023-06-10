import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk('cards/all', async() => {
  const response = await fetch('https://api.pokemontcg.io/v2/cards');
  const data = await response.json();
  return data.data;
});

export const cardsSlice = createSlice({
  name: 'card',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCards.fulfilled, (state,action) => {
      return action.payload
    });
  }
});

export const cards = state => state.cards

export default cardsSlice.reducer


