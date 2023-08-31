import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortGamesProps } from '@src/types/game'

const initialState: SortGamesProps = {
  platform: 'all',
  genre: 'shooter',
  sort: 'release-date',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters(state, action: PayloadAction<SortGamesProps>) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { updateFilters } = filtersSlice.actions

export default filtersSlice.reducer
