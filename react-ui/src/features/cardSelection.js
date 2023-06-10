import { createSlice } from '@reduxjs/toolkit';

export const cardSelection = createSlice({
  name: 'selectedCard',
  initialState: [],
  reducers: {
      addCardToStore(state, action) {
        return action.payload
      }
  }
});

// allows us to read from this slice of state
export const addedCard = state => state.selectedCard;

export default cardSelection.reducer;

export const { addCardToStore} = cardSelection.actions;