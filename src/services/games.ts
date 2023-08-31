import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { GameFull, GameItem, SortGamesProps } from '@src/types/game'

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
    },
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query<Array<GameItem>, string>({
      query: () => `games`,
    }),
    getGameById: builder.query<GameFull, string>({
      query: (gameId) => `game?id=${gameId}`,
      keepUnusedDataFor: 5 * 60 * 1000,
    }),
    getSortGames: builder.query<Array<GameItem>, SortGamesProps>({
      query: ({ platform, genre, sort }) =>
        `games?platform=${platform || 'all'}&category=${
          genre || 'shooter'
        }&sort-by=${sort || 'release-date'}`,
    }),
  }),
})

export const {
  useGetAllGamesQuery,
  useGetGameByIdQuery,
  useGetSortGamesQuery,
} = gamesApi
