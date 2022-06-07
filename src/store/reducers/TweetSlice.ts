import { createSlice } from '@reduxjs/toolkit';
import { TweetSlice } from '../../models/tweet';

const initialState: TweetSlice = {
  tweets: [],
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    setTweets: (state, { payload }) => {
      state.tweets = payload;
    },
  },
});

export const { setTweets } = tweetSlice.actions;
export default tweetSlice.reducer;
