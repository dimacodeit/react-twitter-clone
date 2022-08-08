/* eslint-disable no-param-reassign */
import { NewsSlice } from '@Models/news-slice';
import { createSlice } from '@reduxjs/toolkit';

const initialState: NewsSlice = {
  news: [],
  isLoaded: false,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsReducer: (state, { payload }) => {
      state.news = payload;
      state.isLoaded = true;
    },
  },
});

export const { setNewsReducer } = newsSlice.actions;
export default newsSlice.reducer;
