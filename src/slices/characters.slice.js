/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  characters: [],
  isFetching: false,
}

// ------------------------------------
// Slice
// ------------------------------------

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getCharacters: (state, { payload }) => {
      state.characters = payload
    },
  },
})

export const { getCharacters } = charactersSlice.actions

export default charactersSlice.reducer
